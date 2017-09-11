<template lang="pug">
      div.nav-bg(v-cloak)
        nav.navbar.container
          transition(
            appear
            enter-active-class="animated rubberBand"
            :duration="2000"
          )
            .navbar-brand
              router-link.navbar-item(to="/MainPage")
                picture
                  img.is-hidden-mobile(src='../../assets/logo-01.svg', alt='큰본드', width=112, height=28)
                  img.is-hidden-desktop.is-hidden-tablet(src='../../assets/logo-02.svg', alt='작은본드')
              .navbar-burger.burger(data-target="navMenuburger" @click="openMobileMyMenu")
                figure.is-35x35.is-1by1.figure-image.user-header-wrapper
                  img.user-header(:src='user.profile_img', alt='Image', width=35, height=35)
          .search.column
            .field.has-addons
              .control.has-icons-left.is-expanded
                label.label.is-hidden(for="search")
                input.input(
                  id="search" 
                  type='text' 
                  placeholder='그룹을 검색해보세요'  
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
                  figure.is-35x35.is-1by1.figure-image.user-header-wrapper
                    img.user-header(:src='user.profile_img', alt='Image')
                .navbar-dropdown
                  a.navbar-item(@click="openMySetting")
                    | 내 정보
                  router-link.navbar-item(to="/MyWriteFeed")
                    | 내 글 보기
                  router-link.navbar-item(to="/MyGroupFeed")
                    | 새 글 보기
                  router-link.navbar-item(to="/MyFollowList")
                    | 팔로잉 / 팔로워
                  hr.dropdownhr
                  a.navbar-item(@click="signOut")
                    | 로그 아웃
        //- hr.navhr.is-hidden-mobile
        hr.navhr
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
      this.$http.get('http://api.thekym.com/member/' + `${pk}` + '/',
      { headers: {'Authorization' : `Token ${user_token}`}})
                .then(response => {
                  this.user = response.data;
                  window.localStorage.setItem('user_img', this.user.profile_img);
                  window.localStorage.setItem('user_email', this.user.email);
                  window.localStorage.setItem('user_nickname', this.user.nickname);
                  window.localStorage.setItem('user_username', this.user.username);
                  })
                .catch(error => console.log(error.response));
    },
    signOut(){
      this.$http.post('http://api.thekym.com/member/logout/')
      .then(response => {
        let token = response.data.token;
        let pk = response.data.user;
        if ( window.localStorage.getItem('token') ) {
          window.localStorage.removeItem('token', token);
          window.localStorage.removeItem('pk', pk)
          window.localStorage.removeItem('searchKeyword')
          window.localStorage.removeItem('user_email')
          window.localStorage.removeItem('user_img')
          window.localStorage.removeItem('user_nickname')
          window.localStorage.removeItem('user_username')
          window.localStorage.removeItem('this_group')

        }
        this.$router.push( {path: "/"} );
        alert("성공적으로 로그아웃 하셨습니다.")
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
      // const loadingComponent = this.$loading.open()
      // setTimeout(() => loadingComponent.close(), 1 * 1000)
      let search = this.search.trim();
      window.localStorage.setItem('searchKeyword',search)

      this.$http.get('http://api.thekym.com/'+'group/?search='+`${search}`)
                .then(response => {
                 if (search === ''){
                    alert("빈 문자열은 검색 하실 수 없습니다.")
                    return
                  }
                  if(response.data.count != 0){
                  this.$router.push({ path: '/SearchResult/group/', query: { search: `${search}` }});
                  }else{
                    alert("해당 검색어와 관련된 그룹이 없습니다.");
                  }
                }
                )
                .catch(error => console.error(error.message))
    },
  }
}
</script>

<style lang="sass">
@import "~bulma"
@import "~style"


.user-header-wrapper
  background: #eee
  width: 35px
  height: 35px
  overflow: hidden
  border-radius: 50%
  // display: block
  // position: relative

.user-header
  width: 100%
  min-height: 100%
.navbar-burger.burger
  padding-top: 8px
  padding-left: 10px
.navhr
  // margin: 0 5px 30px 5px
  margin: 0
  // padding: 0
.dropdownhr
  margin: 5px

.nav-bg
  position: fixed 
  top: 0
  width: 100%
  background: #fff
  z-index: 10
  // left: 0
  // border-top: 0

.btn-search
  color: $primary

</style>