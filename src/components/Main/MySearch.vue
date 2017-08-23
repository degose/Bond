<template lang="pug">  
  div.all-wrapper(v-cloak)
    .container
      .columns
        .column.is-10.is-offset-1
          .box.fetched-data
            article.media.fetched-data-item(v-for = "(group,i) in group_list")
              a(@click.prevent ="goGroup(group.pk, i)")
                .media-left
                  figure.image.is-64x64
                    img(:src='group.profile_img', alt='Image')
                .media-content
                  .content
                    p
                      strong {{group.name}}
                      br
                      |           {{group.description}}
                    div
                      span.icon.is-small.member
                        i.fa.fa-users(aria-hidden='true')
                      small    {{group.num_of_members}}
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
            for(let i=0;i <response.data.results.length;i++){
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
        console.log("pk값이 있다")
        console.log(this.is_member[i])
        this.$router.push({ path: '/JointGroup/', query: { group: `${pk}` }});
      }
      else{
        console.log("pk값이 없다")
        this.$router.push({ path: '/NoneJointGroupFeed/', query: { group: `${pk}` }});
      }
      console.log(pk);
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
  // height: 100vh
.pagination-btn
  color: $bond
body
  // background: #eee
</style>