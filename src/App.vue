<template lang="pug">
  #app
     
    feed
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
@import "~style"

body
  // background: #ffc107

</style>
