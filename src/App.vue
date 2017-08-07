<template lang="pug">
  #app
    .container
      router-view
      app-nav
    footer.footer.is-hidden-mobile
      .content.has-text-centered
        p
          strong 본드
          |  by 
          a(href='http://school.fastcampus.co.kr/') 패스트 캠퍼스.
          |  웹 프론트엔드 스쿨 
</template>

<script>
import Navigation from './components/Navigation';
export default {
  name: 'app',
  components: {
    appNav: Navigation
  },
  data () {
    return {
      }
    }
  }
</script>

<style lang="sass">
@import "~bulma"
@import "~style"
html,body
    font-size: 100%
    margin: 0
    padding: 0
    height: 100%
#app 
    position: relative
    min-height: 100%
.title
    margin-top: 20px
.footer
    position: absolute
    bottom: 0
    width: 100%
    background-color: hsla(0, 0%, 100%, .3)
</style>
