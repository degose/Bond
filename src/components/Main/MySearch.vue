<template lang="pug">  
div.all-wrapper
  .page-wrapper
    .container
      .columns
        .column.is-10.is-offset-1
          .box.fetched-data(v-for = "group in group_list")
            article.media.fetched-data-item
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

      //- .columns
      //-   .column
      //-     nav.pagination.is-centered
      //-       a.pagination-previous 이전 그룹 
      //-       a.pagination-next 다음 그룹 
      //-       ul.pagination-list
      //-         li
      //-           a.pagination-link 1
      //-         li
      //-           span.pagination-ellipsis …
      //-         li
      //-           a.pagination-link 45
      //-         li
      //-           a.pagination-link.is-current 46
      //-         li
      //-           a.pagination-link 47
      //-         li
      //-           span.pagination-ellipsis …
      //-         li
      //-           a.pagination-link 86
</template>

<script>
export default {
  name: 'app',
  data(){
    return{
      group_list: [],
      search: ''
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
                  // this.$router.push({ path: '/SearchResult/group/', query: { search: `${search}` }});
                })
                .catch(error => console.error(error.message))
    },
     goGroup(pk, e){
      let user_token = window.localStorage.getItem('token');
      this.$http.get('http://bond.ap-northeast-2.elasticbeanstalk.com/api/group/my-group/', 
        {headers: { 'Authorization' : `Token ${user_token}` }}
      )
      .then(response => {
        let data = response.data.results;
        let data_pk = []
        console.log('data::',data);
        data.pk.forEach(item => {
          // if(data.includes(pk))
          data_pk.push(item);
        });
        console.log('data_pk::',data_pk);
      })
      .catch(error => {
        console.log(error.message);
      })

      // if(this.data.includes(pk)){
      //   this.$router.push({ path: '/JointGroup/', query: { group: `${pk}` }});
      // } else {
        //   this.$router.push({ path: '/NoneJointGroupFeed/', query: { group: `${pk}` }});
      // }
        this.$router.push({ path: '/NoneJointGroupFeed/', query: { group: `${pk}` }});

        // this.$router.push({ path: '/JointGroup/', query: { group: `${pk}` }});
      window.localStorage.setItem('this_group',pk);
      // this.$http.get('http://bond.ap-northeast-2.elasticbeanstalk.com/api/group/')
      // console.log(pk);
    }
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
.page-wrapper
  min-height: 87vh

</style>
