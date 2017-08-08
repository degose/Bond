<template lang="pug">
  #app
    .container
      router-view
      app-nav
</template>

<script>
import Navigation from './components/Navigation';
export default {
  name: 'app',
  components: {
    appNav: Navigation
  },
  data () {
    return {
      }
    }
  }
</script>

<style lang="sass">
@import "~bulma"
@import "~style"
html,body
    font-size: 100%
    margin: 0
    padding: 0
    height: 100%
#app 
    position: relative
    min-height: 100%
.title
    margin-top: 20px
</style>
