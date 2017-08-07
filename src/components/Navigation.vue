<template lang="pug">
nav.gnb
  ul
    li
      router-link(to='/', exact='', active-class='current-page') Home
    li
      router-link(to='/Login', active-class='current-page') Login
    li
      router-link(to='/SignUp', active-class='current-page') SignUp
    li
      router-link(to='/Password', active-class='current-page') Password
    li
      router-link(to='/SearchPage', active-class='current-page') SearchPage
    li
      router-link(to='/RemoveGroup', active-class='current-page') RemoveGroup
      
</template>

<script>
export default {
  name: 'app',
}
</script>

<style lang="sass" scoped>

</style>