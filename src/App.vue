<template lang="pug">
  #app(v-cloak)
    div
      background(v-if='!!needs_to_login')
      router-view

</template>

<script>
import Background from './components/Background';

export default {
  name: 'app',
  components: {
    Background
  },
  data () {
    return {
      needs_to_login : !window.localStorage.getItem('token')
      }
    }
  }

</script>

<style lang="sass">
@import "~bulma"
@import "~style"

body
  // margin: 0
  // padding: 0
  // background-image: url('./assets/basic_bg.jpg') 
  // background-size: cover

[v-cloak] 
  display: none

</style>