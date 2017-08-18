<template lang="pug">  
  div.all-wrapper
    .container
      .columns
        .column.is-10.is-offset-1
          .box.fetched-data
            article.media.fetched-data-item(v-for = "group in group_list")
              a(@click.prevent ="goGroup(group.pk, $event)")
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
            a.pagination-previous(@click="prevPage()") 이전 페이지
            a.pagination-next(@click="nextPage()") 다음 페이지 
            //- ul.pagination-list
            //-   li
            //-     a.pagination-link 1
            //-   li
            //-     span.pagination-ellipsis …
            //-   li
            //-     a.pagination-link 45
            //-   li
            //-     a.pagination-link.is-current 46
            //-   li
            //-     a.pagination-link 47
            //-   li
            //-     span.pagination-ellipsis …
            //-   li
            //-     a.pagination-link 86
</template>

<script>
export default {
  data(){
    return{
      group_list: [],
      page_num: '',
      pagination:{
        next: '', 
        prev: ''
      }
    }
  },
  created(){
    this.fetched();
  },
  methods: {
    fetched(direction){
      let path = null;
      let search = null;
      if ( this.page_num.trim() === '' ) {
        search = window.localStorage.getItem('searchKeyword');
        path = 'http://bond.ap-northeast-2.elasticbeanstalk.com/api/group/?search='+`${search}`;
      } else {
        path = this.pagination[direction];
        search = this.page_num;
      }
      this.$http
          .get(path)
          .then(response => {
            let data = response.data;
            this.group_list = data.results;
            this.pagination.next = data.next;
            this.pagination.prev = data.previous;
            this.$router.push({ path: '/SearchResult/group/', query: { search: `${search}` }});
          })
          .catch(error => console.error(error.message));
    },
    nextPage(){
      let api_path = this.pagination.next;
      let first = api_path.indexOf('?page=');
      let last = api_path.indexOf('&');
      let page_path = api_path.slice(first, last);
      this.page_num = page_path[page_path.length - 1];
      this.fetched('next');
      // let path = this.$route.path;
      // let query = {
      //   search: page_num
      // }
      // this.$router.push({
      //   path, query
      // });
    },
    prevPage(){
      this.$http.get(this.pagination.prev)
      .then(response => {
          this.group_list = response.data.results;
          console.log(this.group_list);
          console.log(response)})
      .catch(error => console.error(error.message))
    },
    goGroup(pk, e){
      this.$router.push({ path: '/NoneJointGroupFeed/', query: { group: `${pk}` }});
      window.localStorage.setItem('this_group',pk);
      console.log(pk);
    },
  },
  // watch: {
  //   $route(newVal, oldVal) {
  //     newVal.query.search !== oldVal.query.search;
  //   },
  // }
}
</script>

<style lang="sass" scoped>
@import "~bulma"
@import "~style"
.all-wrapper
  background: #eee
  // height: 100vh

body
  // background: #eee
</style>
