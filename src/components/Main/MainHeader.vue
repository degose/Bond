<template lang="pug">
      div.nav-bg
        nav.navbar.container
          .navbar-brand
            a.navbar-item(href="#")
              picture
                img.is-hidden-mobile(src='../../assets/logo-01.svg', alt='큰본드', width=112, height=28)
                img.is-hidden-desktop.is-hidden-tablet(src='../../assets/logo-02.svg', alt='작은본드')
            .navbar-burger.burger(data-target="navMenuburger")
              figure
                img.image.is-30x30.user-img(src='http://bulma.io/images/placeholders/96x96.png', alt='Image', width=30, height=30)
          .search.column
            .field
              .control.has-icons-left.has-icons-right
                input.input(type='text', placeholder='그룹이나 게시글을 검색해보세요')
                a.span.icon.is-small.is-right(aria-label="search")
                  i.fa.fa-search
          #navMenuburger.navbar-menu    
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
    
</template>

<script>
import GroupList from './GroupList'

export default {
  components:{
    GroupList
  },
  data(){
    return{
        vue: {
        // 동적 속성 바인딩 시에는 src/ 디렉토리에서 찾아야 이미지 출력
        // file-loader를 사용하지 않고, 직접 속성 값을 설정하기 때문
        path: './src/assets/logo.png',
        label: 'Vue.js'
      },

    }
  }
}
</script>

<style lang="sass" scoped>
@import "~bulma"

.nav-bg
  background: #fff

.navbar-burger.burger
  padding-top: 8px
  padding-left: 10px
.navhr
  margin: 0 5px 30px 5px
  // margin: 0
.dropdownhr
  margin: 5px
// .header-bg
//   background-color: #fff
//   // height: 60.341px
.navbar
  // background-color: #fff
.nav-fixed
  position: fixed
</style>
