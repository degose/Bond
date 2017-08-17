<template lang="pug">
  div.all-wrapper
    main-header
    feed-menu
    main-footer
  
</template>

<script>
import MainHeader from '../Header-Footer/MainHeader';
import FeedMenu from './FeedMenu';
import JointGroupFeed from './JointGroupFeed';
import MainFooter from '../Header-Footer/MainFooter';
export default {
  name: 'app',
  components: {
    MainHeader,
    FeedMenu,
    JointGroupFeed,
    MainFooter
  },
  
}
</script>

<style lang="sass" scoped>
@import "~bulma"
@import "~style"

.all-wrapper
  background: #eee

body
  // background: #eee

</style>