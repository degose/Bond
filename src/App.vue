<template lang="pug">
  #app
    .header-bg
      .container
        nav.navbar
          .navbar-brand
            a.navbar-item(href="#")
              picture
                source.responsive-object(srcset='./assets/logo-02.svg', media='max-width: 767px')
                img(src='./assets/logo-02.svg', alt='본드', width=112, height=28)
            .navbar-burger.burger(data-target="navMenuExample")
              figure
                img.image.is-30x30.user-img(src='http://bulma.io/images/placeholders/96x96.png', alt='Image', width=30, height=30)
          .search.column
            .field
              .control.has-icons-left.has-icons-right
                input.input.is-dark(type='text', placeholder='그룹이나 게시글을 검색해보세요')
                a.span.icon.is-small.is-right(aria-label="search")
                  i.fa.fa-search
          #navMenuExample.navbar-menu    
            .navbar-end
              .navbar-item.has-dropdown.is-hoverable.is-right
                a.navbar-link
                  figure
                    img.image.is-30x30.user-img(src='http://bulma.io/images/placeholders/96x96.png', alt='Image')
                .navbar-dropdown
                  a.navbar-item
                    | 내 정보
                  a.navbar-item
                    | 내 글 보기
                  a.navbar-item
                    | 새 글 보기
                  hr.dropdownhr
                  a.navbar-item
                    | 로그 아웃
      hr.navhr.is-hidden-mobile
      .container
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
                    p.title.is-4.is-2-mobile 그룹 이름

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
          .column.is-3
            .card
              .card-image.makegroup
                figure.image
                  img.plusgroup(src='./assets/orange-plus-hi.png', alt='Image')
              .card-content
                .media
                  .media-content
                    p.title.is-4 그룹 만들기
        nav.pagination.is-hidden-mobile.is-centered
          a.pagination-previous(title='This is the first page', disabled='') Previous
          a.pagination-next Next page
          ul.pagination-list
            li
              a.pagination-link.is-current.is-dark 1
            li
              a.pagination-link.is-dark 2
            li
              a.pagination-link.is-dark 3

</template>

<script>
import Vue from 'Vue';
import Home from './components/Home/Home';
// import HeaderUser from './components/HeaderUser';
import Feed from './components/Feed/Feed';

export default {
  name: 'app',
  components: {
    // HeaderMain,
    Home,
    Feed
  },
  data () {
    return {
      vue: {
        // 동적 속성 바인딩 시에는 src/ 디렉토리에서 찾아야 이미지 출력
        // file-loader를 사용하지 않고, 직접 속성 값을 설정하기 때문
        path: './src/assets/logo.png',
        label: 'Vue.js'
      }
    }
  }
}
</script>

<style lang="sass">
@import "~bulma"

body
  // background: #ffc107
.user-img
  border-radius: 50%
.navbar-burger.burger
  padding-top: 8px
  padding-left: 10px
.navhr
  margin: 0 5px 30px 5px
.dropdownhr
  margin: 5px
.feed-box
  margin-bottom: 30px
.header-bg
  background-color: #181818
  height: 60.341px
.navbar
  background-color: #181818
.makegroup
  width: 222.017px
  height: 111.009px
</style>
