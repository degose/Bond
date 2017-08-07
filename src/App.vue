<template lang="pug">
  #app
    .container
      router-view
      app-nav
      //- main-header
      //- feed

    //- main-footer
</template>

<script>
  import Navigation from './components/Navigation';
// import Navigation from './components/Home/Navigation';
// import MainHeader from './components/Main/MainHeader';
// import MainFooter from './components/Main/MainFooter';
// import Feed from './components/Feed/Feed';
export default {
  name: 'app',
  components: {
    appNav: Navigation,
    // MainHeader,
    // MainFooter,
    // Feed
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
    // font-size: 100%
    // margin: 0
    // padding: 0
    // height: 100%
#app 
    // position: relative
    // min-height: 100%
.title
    // margin-top: 20px



</style>