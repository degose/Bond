<template lang="pug">
  div
    main-header
    //- router-link
    my-group
</template>

<script>
import MainHeader from '../Header-Footer/MainHeader';
import MyGroup from '../Main//MyGroup';
export default {
  name: 'app',
  components: {
    MainHeader,
    MyGroup,
    // FeedMenu,
    // JointGroupFeed,
    // MyGroupFeed,
    // NoneJointFeed,
    
  },
  
}
</script>

