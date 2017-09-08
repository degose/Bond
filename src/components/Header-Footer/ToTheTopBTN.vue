<template lang="pug">
  transition(name="fade")
    .container
      button(aria-label="페이지 최상단으로 이동" v-if="is_show" @click="goToTop").topbutton
        span.icon.is-medium
          i.fa.fa-angle-up

</template>

<script>
export default {
  mounted () {
    window.addEventListener('scroll', this.scrollPosition);
  },
  destroyed () {
    window.addEventListener('scroll', this.scrollPosition);
  },
  data () {
    return {
      scroll: window.scrollY,
      is_show: false
    }
  },
  methods: {
    scrollPosition(){
      this.scroll = window.scrollY;
      if (this.scroll > 1000){
        this.is_show = true;
      } else {
        this.is_show = false;
      }
    },
    goToTop(){
      window.document.body.scrollTop = 0;
      window.document.documentElement.scrollTop = 0;
    }
  }
}
</script>

<style lang="sass" scoped>
  @import "~bulma"
  @import "~style"

  .topbutton
    z-index: 1
    background: transparent
    position: fixed
    bottom: 20px
    right: 20px
    width: 46px
    height: 40px
    .icon.is-medium
      color: $bond
   
  .topbutton:hover
    background: $bond
    .icon.is-medium
      color: white
 
  .fade-enter
  .fade-leave-to
    opacity: 0
  
  .fade-enter-active
  .fade-leave-active
    transition: opacity 0.4s
  
</style>