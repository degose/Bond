<template lang="pug">
  div
    main-header
    feed-menu
      //- router-view
    //- joint-group-feed
  
</template>

<script>
import MainHeader from '../Header-Footer/MainHeader';
import FeedMenu from './FeedMenu';
import JointGroupFeed from './JointGroupFeed';
export default {
  name: 'app',
  components: {
    MainHeader,
    FeedMenu,
    JointGroupFeed,
    
  },
  
}
</script>
