<template lang="pug">
div
  .nav-bg
    nav.navbar.container
      .navbar-brand
        router-link.navbar-item(to="MainPage")
          picture
            img.is-hidden-mobile(src='../../assets/logo-01.svg', alt='큰본드', width=112, height=28)
            img.is-hidden-desktop.is-hidden-tablet(src='../../assets/logo-02.svg', alt='작은본드')
        .navbar-burger.burger(data-target="navMenuburger")
          figure
            img.image.is-30x30.user-img(src='http://bulma.io/images/placeholders/96x96.png', alt='Image', width=30, height=30)
      .search.column
        .field.has-addons
          .control.has-icons-left.is-expanded
            input.input(
              type='text'
              placeholder='그룹이나 게시글을 검색해보세요' 
              v-model = "search"
              )
            span.span.icon.is-small.is-left
              i.fa.fa-search
          .control
              button.button.btn-search(type="button" @click="fetch") Search

      #navMenuburger.navbar-menu
        .navbar-end
          .navbar-item.has-dropdown.is-hoverable.is-right
            a.navbar-link
              figure
                img.image.is-30x30.user-img(src='http://bulma.io/images/placeholders/96x96.png', alt='Image')
            .navbar-dropdown
              a.navbar-item(@click="openMySetting")
                | 내 정보
              router-link.navbar-item(to="/MyWriteFeed")
                | 내 글 보기
              router-link.navbar-item(to="/MyGroupFeed")
                | 새 글 보기
              hr.dropdownhr
              a.navbar-item(@click="console")
                | 로그 아웃
    hr.navhr.is-hidden-mobile
    my-setting(close_message="close lightbox" ref='my_setting')
  
  
  div
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
import MainFooter from '../Header-Footer/MainFooter';
export default {
  name: 'app',
  components: {
    MySetting,
    MainFooter,
  },
  data(){
    return{
      search: '',
      group_list: []
    }
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
      this.$http.get(''+'group/')
                .then(response => {
                  this.group_list = response.data.results;
                  console.log(this.group_list);
                })
                .catch(error => console.error(error.message))
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
