<template lang="pug">
  .wrapper
    main-header
    group-list
    //- feed-menu
    //- my-group-feed
    //- joined-group-feed
    //- none-joint-feed
    //- member-list
    
    
    


</template>

<script>
import MainHeader from './MainHeader';
import GroupList from './GroupList';
import FeedMenu from './FeedMenu';
import JoinedGroupFeed from './JoinedGroupFeed';
import MyGroupFeed from './MyGroupFeed.vue';
import NoneJointFeed from './NoneJointFeed';
import MemberList from './MemberList';


export default {
  name: 'app',
  components: {
    MainHeader,
    GroupList,
    FeedMenu,
    JoinedGroupFeed,
    MyGroupFeed,
    NoneJointFeed,
    MemberList,
    
  },

}
</script>


<style lang="sass">
@import "~bulma"
@import "~style"


</style>
