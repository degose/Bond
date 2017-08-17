<template lang="pug">
  div.all-wrapper
    main-header
    //- router-link
    my-group
    main-footer
</template>

<script>
import MainHeader from '../Header-Footer/MainHeader';
import MainFooter from '../Header-Footer/MainFooter';
import MyGroup from '../Main//MyGroup';
export default {
  name: 'MainPage',
  components: {
    MainHeader,
    MyGroup,
    MainFooter,
    
  },
  
}
</script>

<style lang="sass">
@import "~bulma"
@import "~style"

// body
.all-wrapper
  background: #eee

</style>


