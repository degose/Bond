<template lang="pug">  
  div.all-wrapper(v-cloak)
    main-header
    hr.hr.is-hidden-touch
    hr.hr.is-hidden-desktop
    my-search
    ToTheTopBTN
    main-footer
</template>

<script>
import MainHeader from '../Header-Footer/MainHeader';
import MainFooter from '../Header-Footer/MainFooter';
import MySearch from './MySearch';
import ToTheTopBTN from '../Header-Footer/ToTheTopBTN';

export default {
  components: {
    MainHeader,
    MainFooter,
    MySearch,
    ToTheTopBTN
  },
}


</script>

<style lang="sass" scoped>
@import "~bulma"
@import "~style"

.all-wrapper
  background: #eee
.hr.is-hidden-desktop
  margin-top: 112px
  opacity: 0
.hr.is-hidden-touch
  margin-top: 61px
  opacity: 0
</style>
