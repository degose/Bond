<template lang="pug">
      div.nav-bg
        nav.navbar.container
          .navbar-brand
            router-link.navbar-item(to="MainPage")
              picture
                img.is-hidden-mobile(src='../../assets/logo-01.svg', alt='큰본드', width=112, height=28)
                img.is-hidden-desktop.is-hidden-tablet(src='../../assets/logo-02.svg', alt='작은본드')
            .navbar-burger.burger(data-target="navMenuburger" @click="openMobileMyMenu")
              figure
                img.image.is-30x30.user-img(src='http://bulma.io/images/placeholders/96x96.png', alt='Image', width=30, height=30)
          .search.column
            .field.has-addons
              .control.has-icons-left.is-expanded
                input.input(type='text', placeholder='그룹이나 게시글을 검색해보세요')
                span.span.icon.is-small.is-left
                  i.fa.fa-search
              .control
                router-link(to="/SearchResult")
                  button.button.btn-search(type="button") Search



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
                  a.navbar-item(@click="signOut")
                    //- a.navbar-item(@click="console")
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
    MobileMyMenu
  },
  data(){
    return{
        vue: {
        // 동적 속성 바인딩 시에는 src/ 디렉토리에서 찾아야 이미지 출력
        // file-loader를 사용하지 않고, 직접 속성 값을 설정하기 때문
        // path: './src/assets/logo.png',
        // label: 'Vue.js'
      },
      
    }
  },
  methods: {
    signOut(){
      this.$http.post('http://bond.ap-northeast-2.elasticbeanstalk.com/api/member/logout/')
      //  { headers: {'Authorization' : `Token ${user_token}`}})
      .then(response => {
        let token = response.data.token;
        if ( window.localStorage.getItem('token') ) {
          window.localStorage.removeItem('token', token);
        }
        this.$router.push( {path: "/Home"} );
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
    
  }
}
</script>

<style lang="sass">
@import "~bulma"
@import "~style"

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
</style>
