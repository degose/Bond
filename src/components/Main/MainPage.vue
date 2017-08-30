<template lang="pug">
  div.all-wrapper(v-cloak)
    main-header
    hr.hr.is-hidden-touch
    hr.hr.is-hidden-desktop
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
  methods:{

  },
  // watch: {
  //   $route(newVal, oldVal) {
  //     newVal.query.search !== oldVal.query.search && this.fetched();
  //   },
  // },
  
}
</script>

<style lang="sass">
@import "~bulma"
@import "~style"

// body
.all-wrapper
  background: #eee
.hr.is-hidden-desktop
  margin-top: 112px
  opacity: 0
.hr.is-hidden-touch
  margin-top: 61px
  opacity: 0
</style>


