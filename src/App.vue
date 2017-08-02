<template lang="pug">
  #app
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
              input.input.is-warning(type='text', placeholder='그룹이나 게시글을 검색해보세요')
              a.span.icon.is-small.is-right(aria-label="search")
                i.fa.fa-search
          //- fieldset
          //-   legend 검색 폼
          //-   input#search-keyword(type='search', aria-label='검색어 입력상자', required='', placeholder='검색어를 입력하세요')
            
          //- .field
          //-   .control.is-4-mobile
          //-     input.input.is-warning(type='text', placeholder='Warning input')
        #navMenuExample.navbar-menu    
          .navbar-end
            .navbar-item.has-dropdown.is-hoverable
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
    hr.navhr

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
  margin: 5px
.dropdownhr
  margin: 5px
</style>
