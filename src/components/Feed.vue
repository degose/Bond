<template lang="pug">
  .wrapper
    feed-menu
    //- my-group-feed
    joined-group-feed
    //- none-joint-feed
    //- member-list
    
    
    


</template>

<script>
import FeedMenu from './FeedMenu';
import JoinedGroupFeed from './JoinedGroupFeed';
import MyGroupFeed from './MyGroupFeed.vue';
import NoneJointFeed from './NoneJointFeed';
import MemberList from './MemberList';


export default {
  name: 'app',
  components: {
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
