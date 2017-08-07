<template lang="pug">
  .wrapper
    //- my-group-feed
    feed-menu
    joined-group-feed
    //- member-list
    //- none-joint-feed
    
    


</template>

<script>
import NoneJointFeed from './NoneJointFeed';
import FeedMenu from './FeedMenu';
import JoinedGroupInfo from './JoinedGroupInfo';
import JoinedGroupFeed from './JoinedGroupFeed';
import MyGroupFeed from './/MyGroupFeed.vue';
import WriteModal from './WriteModal';
import MemberList from './MemberList';

export default {
  name: 'app',
  components: {
    NoneJointFeed,
    JoinedGroupFeed,
    JoinedGroupInfo,
    MyGroupFeed,
    WriteModal,
    FeedMenu,
    MemberList
  },

}
</script>


<style lang="sass">




</style>
