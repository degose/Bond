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
  // padding-bottom: 56.25%
  // min-height: 100%
  // height: 100%
  // width: 100%
  // background: yellow

video 
  object-fit: cover
  width: 100%
  height: 100%
  // position: absolute
  // z-index: -1
//   max-width: 100%
//   height: auto
//   width: 100%
//   overflow: hidden


video 
  // position: absolute
  // top: 0px
  // left: 0px
  // min-width: 50%
  // min-height: 100%
  // max-width: 100%
  // width: auto
  // height: auto
  // z-index: -1
  // overflow: hidden

// video
//     // position: fixed
//     position: absolute
//     // top: 50%
//     // left: 50%
//     min-width: 100%
//     min-height: 100%
//     // width: auto
//     // height: auto
//     z-index: -1
//     overflow: hidden
//     // transform: translate(-50%, -50%)s
//     background-size: cover
//     background-position: center
body
</style>

