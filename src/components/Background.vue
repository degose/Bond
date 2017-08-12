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

.video-container
  width: 100%
  height: 100vh
  overflow: hidden
  position: absolute
  z-index: -1

video 
  object-fit: cover
  width: 100%
  height: 100%

</style>

