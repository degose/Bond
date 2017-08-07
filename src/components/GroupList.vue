<template lang="pug">
  div
    .container.grouplist
      .columns
        //- 그룹 정보 영역
        .column.is-3
          .card
            .card-image
              figure.image.is-desktop-16by9.is-mobile-1by1.is-tablet-2by1
                img(src='http://bulma.io/images/placeholders/640x320.png', alt='Image')
            .card-content
              .media
                .media-content
                  p.title.is-4 그룹 이름
        .column.is-3
          .card
            .card-image
              figure.image.is-desktop-16by9.is-mobile-1by1.is-tablet-2by1
                img(src='http://bulma.io/images/placeholders/640x320.png', alt='Image')
            .card-content
              .media
                .media-content
                  p.title.is-4 그룹 이름

        .column.is-3
          .card
            .card-image
              figure.image.is-desktop-16by9.is-mobile-2by1.is-tablet-2by1
                img(src='http://bulma.io/images/placeholders/640x320.png', alt='Image')
            .card-content
              .media
                .media-content
                  p.title.is-4 그룹 이름

        .column.is-3
          .card
            .card-image
              figure.image.is-desktop-16by9.is-mobile-2by1.is-tablet-2by1
                img(src='http://bulma.io/images/placeholders/640x320.png', alt='Image')
            .card-content
              .media
                .media-content
                  p.title.is-4 그룹 이름

      .columns
        //- 그룹 정보 영역
        .column.is-3
          .card
            .card-image
              figure.image.is-desktop-16by9.is-mobile-2by1.is-tablet-2by1
                img(src='http://bulma.io/images/placeholders/640x320.png', alt='Image')
            .card-content
              .media
                .media-content
                  p.title.is-4 그룹 이름

        .column.is-3
          .card
            .card-image
              figure.image.is-desktop-16by9.is-mobile-2by1.is-tablet-2by1
                img(src='http://bulma.io/images/placeholders/640x320.png', alt='Image')
            .card-content
              .media
                .media-content
                  p.title.is-4 그룹 이름

        .column.is-3
          .card
            .card-image
              figure.image.is-desktop-16by9.is-mobile-2by1.is-tablet-2by1
                img(src='http://bulma.io/images/placeholders/640x320.png', alt='Image')
            .card-content
              .media
                .media-content
                  p.title.is-4 그룹 이름

        .column.is-3
          .card
            .card-image
              figure.image.is-desktop-16by9.is-mobile-2by1
                img(src='http://bulma.io/images/placeholders/640x320.png', alt='Image')
            .card-content
              .media
                .media-content
                  p.title.is-4 그룹 이름

      .columns
        .column.is-3
          .card
            .card-image
              figure.image.is-desktop-16by9.is-mobile-1by1.is-tablet-2by1
                img(src='http://bulma.io/images/placeholders/640x320.png', alt='Image')
            .card-content
              .media
                .media-content
                  p.title.is-4 그룹 이름
                  // 도움 요청..
            
        .column.is-3.is-hidden-mobile
          .card
            .card-image.makegroup
              a.figure.image
                a(@click="openModal")
                  div.plusgroup
                    i.fa.fa-plus-circle.fa-5x(aria-hidden='true')
                //- img.plusgroup
                //- img.plusgroup(src='./assets/plusmark.svg' width=30 height=30 alt='makegroup')
            //- svg.icon.icon--plus(viewbox='0 0 5 5', xmlns='http://www.w3.org/2000/svg')
            //-   path(d='M2 1 h1 v1 h1 v1 h-1 v1 h-1 v-1 h-1 v-1 h1 z')
            .card-content
              .media
                .media-content
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

</template>

<script>
// import Vue from 'Vue';
// import Home from './components/Home/Home';
// // import HeaderUser from './components/HeaderUser';
// import Feed from './components/Feed/Feed';
import MakingGroupModal from './MakingGroupModal';

export default {
  name: 'app',
  components: {
    // HeaderMain,
    // Home,
    // Feed,
    MakingGroupModal
  },
  data () {
    return {
      vue: {
        // 동적 속성 바인딩 시에는 src/ 디렉토리에서 찾아야 이미지 출력
        // file-loader를 사용하지 않고, 직접 속성 값을 설정하기 때문
        path: './src/assets/logo.png',
        label: 'Vue.js'
      }
    };
  },
  methods: {
    openModal(){
      this.$refs.my_modal.visible = true;
    },
  }
}
</script>

<style lang="sass" scoped>
@import "~bulma"
@import "~style"

.grouplist
  // margin-top: 30px


// .navbar-burger.burger
//   padding-top: 8px
//   padding-left: 10px
// .navhr
//   margin: 0 5px 30px 5px
.dropdownhr
  margin: 5px
// .feed-box
//   margin-bottom: 30px
// .header-bg
//   background-color: #fff
//   height: 60.341px
// .navbar
//   background-color: #fff

  // 도움 요청
.column.is-3.is-hidden-mobile
  width: 238px
  height: 194px
.fa.fa-plus-circle.fa-5x
  font-size: 119px
  margin: 0 63px 0 63px
  color: #E91E63
.grouplist-nav
  // margin-bottom: 200px


</style>
