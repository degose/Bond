<template lang="pug">  
  div.all-wrapper(v-cloak)
    main-header
    my-search
    main-footer
</template>

<script>
import MainHeader from '../Header-Footer/MainHeader';
import MainFooter from '../Header-Footer/MainFooter';
import MySearch from './MySearch';

export default {
  components: {
    MainHeader,
    MainFooter,
    MySearch
  },
}


</script>

<style lang="sass" scoped>
@import "~bulma"
@import "~style"

.all-wrapper
  background: #eee

</style>
