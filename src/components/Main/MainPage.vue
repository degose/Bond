<template lang="pug">
  div.all-wrapper(v-cloak)
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

</style>


