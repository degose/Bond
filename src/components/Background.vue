<template lang="pug">
div
  //- 데스크탑, 테블릿 환경에서 동영상 배경
  .video-container.is-hidden-mobile
    video(autoplay, loop, muted)
      source(src="https://firebasestorage.googleapis.com/v0/b/bond-43bc3.appspot.com/o/722783965.mp4?alt=media&token=46cbc37a-ed19-47d8-ada4-aa5a7000bf75", type="video/mp4")
    //- 모바일 환경에서는 일반 사진 배경
  .img-container.is-hidden-desktop.is-hidden-tablet
    img.bg-img(src='../assets/m-bg.jpg')

</template>

<script>
export default {
  name: 'Video',
  data(){
    return {
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
  // absolute로 띄워서 화면요소 아래에 배경이 깔리도록
  z-index: -1
  

video 
  // 부모 요소 영역과 replaced image의 비율 관련 CSS
  object-fit: cover
  width: 100%
  height: 100%
  // opacity: 0.5

.img-container
  width: 100%
  height: 130vh
  overflow: hidden
  position: absolute
  z-index: -1

  
.bg-img
  object-fit: cover
  width: 100%
  height: 100%
  // min-height: 100%

 
</style>

