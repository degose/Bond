<template lang="pug">
      div.nav-bg
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
                input.input(type='text', placeholder='그룹이나 게시글을 검색해보세요', v-model="group_input.name")
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
    
</template>

<script>
import MySetting from '../Main/MySetting';
export default {
  components:{
    MySetting
  },
  data(){
    return{
      group_input: {
        done: false,
        name: ''
      },
      datalist: []
    }
  },
  methods: {
    openMySetting() {
      this.$refs.my_setting.visible = true;
    },
    submit(){
      //VueResource === this.$http
      this.$http.post('https://bond-accf7.firebaseio.com/group.json', this.group_input)
                .then(function(response){
                  console.log(response);
                })
                .catch(function(error){
                  console.error(error.message);
                })
    },
    fetch(){
      this.$http.get('https://bond-accf7.firebaseio.com/group.json')
                .then(response => {
                    return response.json();
                    })
                .then(data => {
                    const datalist = Object.values(data);
                    this.datalist = datalist;
                    })
                .catch(error => console.error(error.message));
    }
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
