<template lang="pug">
  div
    main-header
    my-group
    main-footer
</template>

<script>
import MainHeader from '../Header-Footer/MainHeader';
import MainFooter from '../Header-Footer/MainFooter';
import MyGroup from '../Main//MyGroup';
export default {
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

body
  // background: #eee

</style>


