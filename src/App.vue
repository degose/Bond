<template lang="pug">
  #app
    div
      //- header
      //- main
        //- main-header
      router-view
      app-nav
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
    MainFooter
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
  // min-height: 100vh
.wrapper
  display: flex
  flex-direction: column
  flex-wrap: nowrap
  // height: 100vh
  // justify-content: flex-start
  // align-items: flex-start
  // align-content: stretch
  background: #eee
header
  flex: 0 1 auto
  align-self: auto
main
  flex: 1 1 auto
  align-self: auto
footer
  // flex: 0 1 auto
  // align-self: auto


</style>

