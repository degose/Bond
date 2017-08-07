<template lang="pug">
  .wrapper
    header-main
    my-group-feed
    joined-group-feed
    none-joint-feed
    


</template>

<script>
import NoneJointFeed from './NoneJointFeed';
import JoinedGroupFeed from './JoinedGroupFeed';
import MyGroupFeed from './/MyGroupFeed.vue';
import HeaderMain from './Header';
import WriteModal from './WriteModal';

export default {
  name: 'app',
  components: {
    NoneJointFeed,
    JoinedGroupFeed,
    MyGroupFeed,
    HeaderMain,
    WriteModal
  },

}
</script>


<style lang="sass">




</style>
