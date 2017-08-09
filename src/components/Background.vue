<template lang="pug">
  .video-container
    video(autoplay, loop, muted)
        source(src="https://firebasestorage.googleapis.com/v0/b/bond-accf7.appspot.com/o/Runner.mp4?alt=media&token=77484523-64ad-4f3e-aab8-3e5b190f1a40", type="video/mp4")

</template>

<script>
export default {
    name: 'Video',
}
</script>

<style lang="sass">
body
    // background: none
video 
     position: absolute
     top: 0px
     left: 0px
     min-width: 100%
     min-height: 100%
     width: auto
     height: auto
     z-index: -1
     overflow: hidden

</style>
