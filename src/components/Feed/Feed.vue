<template lang="pug">
  .wrapper
    main-header
    none-joint-feed
    
    
    


</template>

<script>
import MainHeader from '../Header-Footer/MainHeader';
import MyGroup from '../Main//MyGroup';
import MyGroupFeed from '../Feed/MyGroupFeed';
import MyWriteFeed from '../Feed/MyWriteFeed';
import NoneJointFeed from '../Feed/NoneJointGroupFeed';


export default {
  components: {
    MainHeader,
    MyGroup,
    MyGroupFeed,
    MyWriteFeed,
    NoneJointFeed,
    
  },

}
</script>


<style lang="sass">
@import "~bulma"
@import "~style"


</style>
