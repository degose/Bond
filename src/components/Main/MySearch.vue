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
      search: '',
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
    fetched(){
      let search = window.localStorage.getItem('searchKeyword');
      this.$http.get('http://bond.ap-northeast-2.elasticbeanstalk.com/api/'+'group/?search='+`${search}`)
                .then(response => {
                  this.group_list = response.data.results;
                  console.log(this.group_list);
                  this.pagination.next = response.data.next
                  this.pagination.prev = response.data.previous
                  console.log(this.pagination.next)
                  console.log(this.pagination.prev)
                  // let response.data.next
                  // this.makePagination(response.data)
                  // this.nextPage()
                  // this.prevPage()
                  // this.$router.push({ path: '/SearchResult/group/', query: { search: `${search}` }});
                })
                .catch(error => console.error(error.message))
    },
  nextPage(){
    this.$http.get(this.pagination.next)
    .then(response => {
        this.group_list = response.data.results;
        console.log(this.group_list);
        console.log(response)})
    .catch(error => console.error(error.message))
  },
  prevPage(){
    this.$http.get(this.pagination.prev)
    .then(response => {
        this.group_list = response.data.results;
        console.log(this.group_list);
        console.log(response)})
    .catch(error => console.error(error.message))
  },
    // makePagination(){
    //   this.$router.push({ path: '/MySearch/api/group/', query: {search: `${search}`= }})
    // },

    // makePagination(){
    //   this.$http.get('http://bond.ap-northeast-2.elasticbeanstalk.com/api/'+'group/?search='+`${search}`)
    //              .then(response => {
    //                let pagination = this.response = {
    //                  next_page_url: response.data.next,
    //                   prev_page_url: response.data.previous
    //                }
    //                console.log(response)
    //              })
    // },
    // makePagination(response){
    //      pagination = {
    //         // current_page: data.current_page,
    //         // last_page: data.last_page,
    //         next: data.next,
    //         prev: data.previous
    //     }
    //     this.pagination = pagination
    },
     goGroup(pk, e){
      // this.$router.push({ path: 'JointGroup', query: { plan: 'private' }});
      // http://bond.ap-northeast-2.elasticbeanstalk.com/api/group/my-group/?group=1
      // let group_pk = 'http://bond.ap-northeast-2.elasticbeanstalk.com/api/group/' + `${pk}`;
      // this.$router.push('/JointGroup/?group=${}');
      // this.$router.push({path: '/JointGroup', params: {id: pk}});
      this.$router.push({ path: '/NoneJointGroupFeed/', query: { group: `${pk}` }});
      // this.$router.push({ path: '/JointGroup/', query: { group: `${pk}` }});

      window.localStorage.setItem('this_group',pk);
      // this.$http.get('http://bond.ap-northeast-2.elasticbeanstalk.com/api/group/')
      console.log(pk);
    },
  watch: {
    $route(newVal, oldVal) {
      newVal.query.search !== oldVal.query.search && this.fetched();
    },
  },
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
