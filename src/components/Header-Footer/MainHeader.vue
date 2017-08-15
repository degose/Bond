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
                label.label(for="search")
                input.input(id="search" type='text', placeholder='그룹이나 게시글을 검색해보세요' @input="inputChangeSearch" v-bind:value = "search")
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
  created(){
    this.group_list_keys = Object.keys(this.group_list[0]);
  },
  data(){
    return{
      search: '',
      group_list_keys: [],
      group_list:[],
      datalist: []
    }
  },
  computed: {
    filtered_group_list(){
      let group_list = this.group_list;
      let search = this.search.trim();
      //사용자가 정보를 입력한 경우
      if(search){
        group_list = group_list.filter(task => Object.values(task).some(value=>value.includes(search)));
      }
    }
  },
  methods: {
    openMySetting() {
      this.$refs.my_setting.visible = true;
    },
    fetch(){
      this.$http.get('https://bond-accf7.firebaseio.com/0.json')
                .then(response => {
                    return response.json();
                    })
                .then(data => {
                    const datalist = Object.values(data);
                    this.datalist = datalist;
                    })
                .catch(error => console.error(error.message));
    },
    inputChangeSearch(event){
      this.search = event.target.value;
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
