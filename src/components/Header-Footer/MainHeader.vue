<template lang="pug">
      div.nav-bg
        nav.navbar.container
          .navbar-brand
            router-link.navbar-item(to="/MainPage")
              picture
                img.is-hidden-mobile(src='../../assets/logo-01.svg', alt='큰본드', width=112, height=28)
                img.is-hidden-desktop.is-hidden-tablet(src='../../assets/logo-02.svg', alt='작은본드')
            .navbar-burger.burger(data-target="navMenuburger" @click="openMobileMyMenu")
              figure
                img.image.is-30x30.user-img(src='http://bulma.io/images/placeholders/96x96.png', alt='Image', width=30, height=30)
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
                  )
                span.span.icon.is-small.is-left
                  i.fa.fa-search
              .control
                button.button.btn-search(type="button" @click.prevent="fetch") Search
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
      group_list:[],
    }
  },
  methods: {
      signOut(){
      this.$http.post('http://bond.ap-northeast-2.elasticbeanstalk.com/api/member/logout/')
      .then(response => {
        let token = response.data.token;
        let pk = response.data.user;
        if ( window.localStorage.getItem('token') ) {
          window.localStorage.removeItem('token', token);
          window.localStorage.removeItem('pk', pk)
        }
        // this.$store.commit('bg_off')
        // this.$store.commit('bg_on')
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
    filtered_group_list(){
      let search = this.search.trim();
      //사용자가 정보를 입력한 경우
      if(search){
        this.group_list = group_list.filter(search => Object.values(search));
      }
    },
    inputSearch(event){
    this.search = event.target.value;
    },
    fetch(){
      let search = this.search.trim();
      window.localStorage.setItem('searchKeyword',search)
      this.$router.push({ path: '/SearchResult/group/', query: { search: `${search}` }});
      // let searchkeyword = window.localStorage.getItem('searchKeyword');
      // this.$http.get('http://bond.ap-northeast-2.elasticbeanstalk.com/api/'+'group/?search='+`${search}`)
      //           .then(response => {
      //             this.group_list = response.data.results;
      //             console.log('results:',this.group_list);
      //             this.$router.push({ path: '/SearchResult/group/', query: { search: `${search}` }});
      //           })
      //           .catch(error => console.error(error.message))
    },
  }
}
</script>

<style lang="sass">
@import "~bulma"
@import "~style"
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