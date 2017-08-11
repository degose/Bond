<template lang="pug">
  #app
    div
      //- Home
      //- main-page
      router-view
      //- app-nav
      //- joint-group
      //- feed

    //- main-footer

</template>

<script>
import Home from './components/Home/Home';
import Navigation from './components/Navigation';
import MainHeader from './components/Header-Footer/MainHeader';
import MainPage from './components/Main/MainPage';
import JointGroup from './components/Group/JointGroup';
import Feed from './components/Feed/Feed';
import MyGroup from './components/Main/MyGroup';
import MainFooter from './components/Header-Footer/MainFooter';

export default {
  name: 'app',
  components: {
    Home,
    appNav: Navigation,
    MainHeader,
    MainPage,
    JointGroup,
    Feed,
    MyGroup,
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

body
  
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
// header
//   flex: 0 1 auto
//   align-self: auto
// main
//   flex: 1 1 auto
//   align-self: auto
footer
  // flex: 0 1 auto
  // align-self: auto


</style>

