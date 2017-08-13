<template lang="pug">
div
  //- MainHeader
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

  //- MyGroup
  div
    .container.grouplist
      .columns
        //- 그룹 정보 영역
        .column.is-3
          //- 그룹을 누르면 해당 그룹으로 이동하는 링크를 걸어야 한다.
          //- a(href="/JointGroup")
          router-link(to="/JointGroup")
            .card.fetched-data
              .fetched-data-item(v-for="data in datalist")
                .card-image
                  figure.image.is-desktop-16by9.is-mobile-1by1.is-tablet-2by1
                    img(src='http://bulma.io/images/placeholders/640x320.png', alt='Image')
                .card-content
                  .media
                    .media-content.has-text-centered
                      p.title.is-4 {{ data.name }}        
        .column.is-3
          .card
            .card-image.makegroup
              figure.image.is-desktop-16by9.is-mobile-1by1.is-tablet-2by1
                a(@click="openModal")
                  img(src='../../assets/group-add-hoverx2.png', alt='Image')
            .card-content
              .media
                .media-content.has-text-centered
                  p.title.is-4 그룹 만들기
      nav.pagination.is-hidden-mobile.is-centered.grouplist-nav
        a.pagination-previous(title='This is the first page', disabled='') Previous
        a.pagination-next Next page
        ul.pagination-list
          li
            a.pagination-link.is-current.is-dark 1
          li
            a.pagination-link.is-dark 2
          li
            a.pagination-link.is-dark 3
    
    MakingGroupModal(
      ref="my_modal"
      close_message="close lightbox"
    )
  main-footer
</template>

<script>
import MySetting from '../Main/MySetting';
import MakingGroupModal from '../Group/MakingGroupModal';
import MainFooter from '../Header-Footer/MainFooter';

export default {
  name: 'app',
  components: {
    MySetting,
    MakingGroupModal,
    MainFooter,
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
    openMySetting(){
      this.$refs.my_setting.visible = true;
    },
    openModal(){
      this.$refs.my_modal.visible = true;
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
//MainHeader
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

//MyGroup
.column.is-3.is-hidden-mobile
  width: 238px
  height: 194px
.fa.fa-plus-circle.fa-5x
  font-size: 119px
  margin: 0 63px 0 63px
  color: #E91E63
.grouplist-nav
  margin-top: 100px
  // margin-bottom: 200px
.plusgroup
  background: yellow

</style>


