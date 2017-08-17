<template lang="pug">  
  div
    main-header
    .container
      .columns
        .column.is-10.is-offset-1
          .box.fetched-data
            article.media.fetched-data-item(v-for = "group in group_list")
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
            a.pagination-previous Previous
            a.pagination-next Next page
            ul.pagination-list
              li
                a.pagination-link 1
              li
                span.pagination-ellipsis …
              li
                a.pagination-link 45
              li
                a.pagination-link.is-current 46
              li
                a.pagination-link 47
              li
                span.pagination-ellipsis …
              li
                a.pagination-link 86
    main-footer

</template>

<script>
import MySetting from '../Main/MySetting';
import MainHeader from '../Header-Footer/MainHeader';
import MainFooter from '../Header-Footer/MainFooter';
export default {
  // name: 'app',
  components: {
    MySetting,
    MainHeader,
    MainFooter,
  },
  data(){
    return{
      search: '',
      group_list: []
    }
  },
  created(){
    // this.group_list = Object.keys(this.group_list[0]); 
    this.fetch();
  },
  computed: {
    filtered_group_list(){
      let search = this.search.trim();
      //사용자가 정보를 입력한 경우
      if(search){
        this.group_list = group_list.filter(search => Object.values(search));
      }
    },
  },
  methods: {
    openMySetting() {
      this.$refs.my_setting.visible = true;
    },
    submit(){
      //VueResource === this.$http
      this.$http.post('', this.group_list)
                .then(function(response){
                  console.log(response);
                })
                .catch(function(error){
                  console.error(error.message);
                })
    },
    fetch(){
      let search = this.search.trim();
      this.$http.get('http://bond.ap-northeast-2.elasticbeanstalk.com/api/'+'group/?search='+`${search}`)
                .then(response => {
                  this.group_list = response.data.results;
                  console.log(this.group_list)
                  this.$router.push('/SearchResult')
                })
                .catch(error => console.error(error.message))
    },
  watch: {
    $route(newVal, oldVal) {
      newVal.query.search !== oldVal.query.search && this.fetched();
      },
    },
  }
}


</script>

<style lang="sass" scoped>
@import "~bulma"
@import "~style"
// html
//   font-size: 100%
//   background: #fff
// body
//   margin: 0
body
  background: #eee
.navbar-burger.burger
  padding-top: 8px
  padding-left: 10px
.navhr
  margin: 0 5px 30px 5px
  // margin: 0
.dropdownhr
  margin: 5px

.nav-fixed
  position: fixed
.nav-bg
  background: #fff
.btn-search
  color: $primary
.leader
  margin-left: 8px
</style>
