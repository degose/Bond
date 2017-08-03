<template lang="pug">
  #app
    group-list
    MakingGroupModal
</template>

<script>
import Vue from 'Vue';
// import Home from './components/Home/Home';
// // import HeaderUser from './components/HeaderUser';
// import Feed from './components/Feed/Feed';
import GroupList from './components/Grouplist/GroupList';
import MakingGroupModal from './components/Grouplist/MakingGroupModal';

export default {
  name: 'app',
  components: {
    // HeaderMain,
    // Home,
    // Feed,
    GroupList,
    MakingGroupModal
  },
  data () {
    return {
      vue: {
        // 동적 속성 바인딩 시에는 src/ 디렉토리에서 찾아야 이미지 출력
        // file-loader를 사용하지 않고, 직접 속성 값을 설정하기 때문
        path: './src/assets/logo.png',
        label: 'Vue.js'
      }
    }
  },
  methods: {
    openModal(){
      this.$refs.my_modal.visible = true;
    },
    openMessage(){
      this.$refs.slide_anim.is_visible = true;
    }
  }
}
</script>

<style lang="sass">
@import "~bulma"
.open-modal
  margin-bottom: 20px

.fade-enter
.fade-leave-to
  opacity: 0
.fade-enter-active
.fade-leave-active
  transition: all 0.8s ease-out

.slide-enter,
.slide-leave-to
  opacity: 0
  transform: translateX(-100vw)

.slide-enter-active,
.slide-leave-active
  transition: all 0.45s ease-in-out

// .slide-in-enter
.slide-anim-enter-active
  animation: slide-in 0.6s ease-in-out
// .slide-in-enter-to
// .slide-in-leave
.slide-anim-leave-active
  animation: slide-out 0.6s ease-in-out
.slide-anim-leave-to

// .slide-out-enter
// .slide-out-enter-active
// .slide-out-enter-to
// .slide-out-leave
// .slide-out-leave-active
// .slide-out-leave-to

// 애니매이션 정의
// 슬라이드 인
@keyframes slide-in
  from
    opacity: 0
    transform: translateX(-100vw)
  to
    opacity: 1
    transform: translateX(0)

@keyframes slide-out
  from
    opacity: 1
    transform: translateX(0)
  to
    opacity: 0
    transform: translateX(-100vw)

</style>
