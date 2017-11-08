<template lang="pug">
  #app(v-cloak)
    div
      background
      router-view

</template>

<script>
import Background from "./components/Background";

export default {
  name: "app",
  components: {
    Background
  },
  data() {
    return {};
  }
};
</script>

<style lang="sass">
@import "~bulma"
@import "~style"

[v-cloak] 
  display: none

</style>