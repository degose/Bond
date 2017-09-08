<template lang="pug">
  .modal(v-if="visible" class="is-active")
    .modal-background(@click="closeModal")
    .modal-card
      header.modal-card-head
        p.modal-card-title 그룹 초대하기
      section.modal-card-body
        nav.level
          .level-item.has-text-centered
              p 복사한 링크를 공유하고 싶은 곳에 붙여넣기 하세요.
        nav.level
          .level-item.has-text-centered
            p.control
              input.input(type='text', placeholder='해당 그룹의 URL')

      footer.modal-card-foot
        button.button.is-primary(@click="closeModal") 확인
        button.button(@click="closeModal") 취소
      // level-right 요소로 우측정렬 가능.. 빈 요소라도 level-left는 언제나 필수! 
</template>

<script>
export default {
  props: {
    close_message: {
      type: String,
      default: 'Close Modal'
    },
    is_visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      visible: this.is_visible
    }
  },
  methods: {
    closeModal(){
      this.visible = false;
    }
  }
}
</script>
<style lang="sass" scoped>

</style>
