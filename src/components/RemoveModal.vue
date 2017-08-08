<template lang="pug">
  .modal(v-if="visible" class="is-active")
    .modal-background(@click="closeModal")
    .modal-card
      header.modal-card-head
        p.modal-card-title 그룹 삭제하기
      section.modal-card-body
        nav.level
          .level-item.has-text-centered
              p 
              strong 리더님, 정말 그룹을 삭제하시겠습니까?
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
      default: true
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
