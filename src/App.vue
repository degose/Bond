<template lang="pug">
  #app
    div.wrapper
      //- .container
      //- router-view
      //- app-nav
      main-header
      //- group-list
      //- feed
      //- group-list
      //- member-list
      feed-menu
      //- joined-group-info
      joined-group-feed

    //- footer.footer.is-hidden-mobile
    //-   .content.has-text-centered
    //-     p
    //-       strong 본드
    //-       |  by 
    //-       a(href='http://school.fastcampus.co.kr/') 패스트 캠퍼스.
    //-       |  웹 프론트엔드 스쿨 
    main-footer
</template>

<script>
// import Navigation from './components/Navigation';
import MainHeader from './components/Main/MainHeader';
// import GroupList from './components/Main/GroupList';
import MainFooter from './components/Main/MainFooter';
// import Feed from './components/Feed/Feed';
// import MemberList from './components/Feed/MemberList';
import FeedMenu from './components/Feed/FeedMenu';
import JoinedGroupFeed from './components/Feed/JoinedGroupFeed';
// import JoinedGroupInfo from './components/Feed/JoinedGroupInfo';
export default {
  name: 'app',
  components: {
    // appNav: Navigation
    MainHeader,
    // GroupList,
    MainFooter,
    // MemberList,
    FeedMenu,
    JoinedGroupFeed,
    // JoinedGroupInfo,
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
// .title
//     margin-top: 20px
.wrapper
  // background: #eee

</style>
