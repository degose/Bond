<template lang="pug">
  .wrapper
    main-header
    group-list
    //- feed-menu
    //- my-group-feed
    //- joint-group-feed
    //- none-joint-feed
    //- group-member-list
    
    
    


</template>

<script>
import MainHeader from '../Header-Footer/MainHeader';
import MyGroup from '../Main//MyGroup';
import FeedMenu from '../Feed/FeedMenu';
import JointGroupFeed from '../Feed/JointGroupFeed';
import MyGroupFeed from '../Feed/MyGroupFeed';
import NoneJointFeed from '../Feed/NoneJointGroupFeed';
import GroupMemberList from '../Group/GroupMemberList';


export default {
  name: 'app',
  components: {
    MainHeader,
    MyGroup,
    FeedMenu,
    JointGroupFeed,
    MyGroupFeed,
    NoneJointFeed,
    GroupMemberList,
    
  },

}
</script>


<style lang="sass">
@import "~bulma"
@import "~style"


</style>
