<template lang="pug">  
  div(v-cloak)
    .page-wrapper
      .container
        .columns.is-container-height
          .column.is-10.is-offset-1
            .box.fetched-data
              article.media.fetched-data-item(v-for = "(group,i) in group_list")
                //- a(@click.prevent ="goGroup(group.pk, i)")
                a(@click.prevent ="goGroup(group.pk, i)").media-left
                  figure.image.is-64x64.group-search-img-wrapper
                    img.group-search-img(:src='group.profile_img', alt='Image')
                a(@click.prevent ="goGroup(group.pk, i)").media-content
                  .content
                    p(style='white-space: pre-line')
                      strong {{group.name}}
                      br
                      |           {{group.description}}
                    div
                      span.icon.is-small.member
                        i.fa.fa-users(aria-hidden='true')
                      small    {{group.num_of_members}}
                      | &nbsp; 
                      | &nbsp; 
                      span.icon.is-small.leader
                        i.fa.fa-user-circle-o(aria-hidden='true')
                      small    {{group.owner.nickname}}

        .columns
          .column
            nav.pagination.is-centered
              button.pagination-previous.pagination-btn(@click="prevPage()" :disabled='pagination.prev === null') 이전 페이지
              button.pagination-next.pagination-btn(@click="nextPage()" :disabled='pagination.next === null') 다음 페이지 
</template>

<script>
export default {
  data(){
    return{
      group_list: [],
      page_num: '',
      pagination:{
        next: '', 
        prev: '',
      },
      is_member: [],
      direction: '',
      newsearch:''
    }
  },
  created(){
    this.fetched();
  },
  methods: {
    fetched(){
      const loadingComponent = this.$loading.open()
      setTimeout(() => loadingComponent.close(), 1 * 1000)
      
      let path = null;
      let search = window.localStorage.getItem('searchKeyword');
      let user_token = window.localStorage.getItem('token');
      let direction = this.direction;
      let newsearch = this.newsearch;
      if ( this.page_num.trim() === '' || `${newsearch}` !== `${search}`) {
        path = 'https://api.thekym.com/group/?search='+`${search}`;
        this.newsearch = `${search}`;
      }
      else{
        path = direction ? this.pagination[direction] : '';
      }
      this.$http
          .get(path, { headers: {'Authorization' : `Token ${user_token}`}})
          .then(response => {
            let data = response.data;
            this.group_list = data.results;
            this.pagination.next = data.next;
            this.pagination.prev = data.previous;
            this.is_member = [];
            for(let i=0;i<response.data.results.length;i++){
              this.is_member.push(data.results[i].is_member)
            }
          })
          .catch(error => console.error(error));
    },
    nextPage(){
      let api_path = this.pagination.next;
      let search = window.localStorage.getItem('searchKeyword');
      this.newsearch = `${search}`;
      if (api_path !== null) {
        let first = api_path.indexOf('?page=');
        let last = api_path.indexOf('&');
        let page_path = api_path.slice(first, last);
        this.page_num = page_path[page_path.length - 1];
        this.direction = 'next';
        this.$router.push({ path: '/SearchResult/group/', query: { page: `${this.page_num}`}});
      } 
    },
    prevPage(){
      let api_path = this.pagination.prev;
      let last = api_path.indexOf('&');
      let first = api_path.indexOf('?page=');
      let page_path = api_path.slice(first, last);
      let search = window.localStorage.getItem('searchKeyword');
      this.newsearch = `${search}`;
      if(this.page_num >= 3){
        this.page_num = page_path[page_path.length - 1];
        this.direction = 'prev';
        this.$router.push({path: '/SearchResult/group/', query: {page: `${this.page_num}`}});
      }else if(this.page_num == 2){
        let search = window.localStorage.getItem('searchKeyword');
        this.direction = 'prev';
        this.$router.push({path: '/SearchResult/group/', query: {search: `${search}`}});
      }
    },
    goGroup(pk, i){
      window.localStorage.setItem('this_group',pk);
      if(this.is_member[i] === true){
        this.$router.push({ path: '/JointGroup/', query: { group: `${pk}` }});
      }
      else{
        this.$router.push({ path: '/NoneJointGroupFeed/', query: { group: `${pk}` }});
      }
    },
  },
  watch: {
    $route(newVal, oldVal) {
      this.fetched()
    },
  }
}
</script>

<style lang="sass" scoped>
@import "~bulma"
@import "~style"

.all-wrapper
  background: #eee
.page-wrapper
  min-height: 115vh

.group-search-img-wrapper
  width: 64px
  height: 64px
  overflow: hidden
  // border-radius: 10%
.group-search-img
  width: 100%
  min-height: 100%

.pagination-btn
  color: $bond

.is-container-height
  min-height: 80vh

</style>