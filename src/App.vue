<template lang="pug">
  #app
    div
      router-view
      app-nav
      //- main-header
      //- feed
      //- group-list

      main-footer
</template>

<script>
import Navigation from './components/Navigation';
import MainHeader from './components/MainHeader';
import Feed from './components/Feed';
import GroupList from './components/GroupList';
import MainFooter from './components/MainFooter';

export default {
  name: 'app',
  components: {
    appNav: Navigation,
    MainHeader,
    Feed,
    GroupList,
    MainFooter,
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
  min-height: 100vh
#app 
    // position: relative
    // min-height: 100%
.title
    // margin-top: 20px

</style>
