<template lang="pug">
  div
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

  // name: 'app',
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

body
  background: #eee

</style>


