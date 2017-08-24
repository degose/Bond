<template lang="pug">
div
  .video-container.is-hidden-mobile
    video(autoplay, loop, muted)
      source(src="https://firebasestorage.googleapis.com/v0/b/bond-43bc3.appspot.com/o/722783965.mp4?alt=media&token=46cbc37a-ed19-47d8-ada4-aa5a7000bf75", type="video/mp4")
      
  .img-container.is-hidden-desktop.is-hidden-tablet
    img.bg-img(src='../assets/m-bg.jpg')

</template>

<script>
export default {
  name: 'Video',
  data(){
    return {
      // video_visible: true
      // this.$store.state.video_visible
    }
  },

}
</script>

<style lang="sass">

.video-container
  width: 100%
  height: 130vh
  overflow: hidden
  position: absolute
  z-index: -1

video 
  object-fit: cover
  width: 100%
  height: 100%
  background-size: cover
  background-position: center
  // opacity: 0.5

.img-container
  width: 100%
  height: 140vh
  overflow: hidden
  position: absolute
  z-index: -1

  
.bg-img
  object-fit: cover
  width: 100%
  height: 100%
  background-size: cover
  background-position: center
  // min-height: 100%

 
</style>

