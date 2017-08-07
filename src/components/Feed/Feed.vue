<template lang="pug">
  .wrapper
    //- my-group-feed
    //- feed-menu
    //- .container
    //-   .columns
        //- .column.is-3
          joined-group-info
        //- .column.is-9
          joined-group-feed
    //- none-joint-feed
    
    


</template>

<script>
import NoneJointFeed from './NoneJointFeed';
import FeedMenu from './FeedMenu';
import JoinedGroupInfo from './JoinedGroupInfo';
import JoinedGroupFeed from './JoinedGroupFeed';
import MyGroupFeed from './/MyGroupFeed.vue';
import WriteModal from './WriteModal';

export default {
  name: 'app',
  components: {
    NoneJointFeed,
    JoinedGroupFeed,
    JoinedGroupInfo,
    MyGroupFeed,
    WriteModal,
    FeedMenu
  },

}
</script>


<style lang="sass">




</style>
