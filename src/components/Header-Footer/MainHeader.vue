<template lang="pug">
      div.nav-bg(v-cloak)
        nav.navbar.container
          .navbar-brand
            router-link.navbar-item(to="/MainPage")
              picture
                img.is-hidden-mobile(src='../../assets/logo-01.svg', alt='큰본드', width=112, height=28)
                img.is-hidden-desktop.is-hidden-tablet(src='../../assets/logo-02.svg', alt='작은본드')
            .navbar-burger.burger(data-target="navMenuburger" @click="openMobileMyMenu")
              figure
                img.image.is-35x35.user-img(:src='user.profile_img', alt='Image', width=35, height=35)
          .search.column
            .field.has-addons
              .control.has-icons-left.is-expanded
                label.label.is-hidden(for="search")
                input.input(
                  id="search" 
                  type='text' 
                  placeholder='그룹이나 게시글을 검색해보세요'  
                  @input="inputSearch" 
                  :value="search"
                  @keyup.enter="fetch"
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
                    img.image.is-35x35.user-img(:src='user.profile_img', alt='Image')
                .navbar-dropdown
                  a.navbar-item(@click="openMySetting")
                    | 내 정보
                  router-link.navbar-item(to="/MyWriteFeed")
                    | 내 글 보기
                  router-link.navbar-item(to="/MyGroupFeed")
                    | 새 글 보기
                  hr.dropdownhr
                  a.navbar-item(@click="signOut")
                    | 로그 아웃
        hr.navhr.is-hidden-mobile
        my-setting(close_message="close lightbox" ref='my_setting')
        mobile-my-menu(close_message="close lightbox" ref='mobile_my_menu')
</template>

<script>
import MySetting from '../Main/MySetting';
import MobileMyMenu from './MobileMyMenu';
export default {
  components:{
    MySetting,
    MobileMyMenu,
  },
  data(){
    return{
      search: '',
      user: {}
    }
  },
  created(){
    this.getUserImg();
  },
  methods: {
    getUserImg(){
      let user_token = window.localStorage.getItem('token');
      let pk = window.localStorage.getItem('pk');
      this.$http.get('https://api.thekym.com/member/' + `${pk}` + '/',
      { headers: {'Authorization' : `Token ${user_token}`}})
                .then(response => {
                  this.user = response.data;
                  // console.log(this.user.profile_img);
                  window.localStorage.setItem('user_img', this.user.profile_img);
                  window.localStorage.setItem('user_email', this.user.email);
                  window.localStorage.setItem('user_nickname', this.user.nickname);
                  window.localStorage.setItem('user_username', this.user.username);
                  })
                .catch(error => console.log(error.response));
    },
    signOut(){
      this.$http.post('https://api.thekym.com/member/logout/')
      .then(response => {
        let token = response.data.token;
        let pk = response.data.user;
        if ( window.localStorage.getItem('token') ) {
          window.localStorage.removeItem('token', token);
          window.localStorage.removeItem('pk', pk)
          window.localStorage.removeItem('searchKeyword')
          window.localStorage.removeItem('this_group')
        }
        this.$router.push( {path: "/"} );
        alert("성공적으로 로그아웃 하셨습니다.")
        // console.log(response);
        // console.log('성공');
      })
      .catch(error => {
        console.log(error.response);
      })
    },
    openMySetting() {
      this.$refs.my_setting.visible = true;
    },
    openMobileMyMenu() {
      this.$refs.mobile_my_menu.visible = true;
    },
    inputSearch(event){
    this.search = event.target.value;
    },
    fetch(){
      let search = this.search.trim();
      window.localStorage.setItem('searchKeyword',search)
      this.$http.get('https://api.thekym.com/'+'group/?search='+`${search}`)
                .then(response => {
                  if(response.data.count != 0){
                  this.$router.push({ path: '/SearchResult/group/', query: { search: `${search}` }});
                  }else{
                    alert("해당 검색어와 관련된 그룹이 없습니다.");
                  }
                })
                .catch(error => console.error(error.message))
    },
  }
}
</script>

<style lang="sass">
@import "~bulma"
@import "~style"


.user-img
  background: #eee
  // overflow: hidden
  // width: 35px
  // height: 35px

body
  // background: #eee
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
</style>