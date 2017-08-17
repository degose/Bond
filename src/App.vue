<template lang="pug">
  #app
    div
      background(v-if='!!needs_to_login')
      //- Home
      //- main-page
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
}
</script>

<style lang="sass">
@import "~bulma"
@import "~style"

body
  // height: 110vh 


</style>

