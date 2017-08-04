<template lang="pug">
  .modal(v-if="visible" class="is-active")
    .modal-background(@click="closeModal")
    .modal-card
      header.modal-card-head
        figure.image.is-desktop-16by9.is-mobile-1by1.is-tablet-2by1
         a
          img(src='http://bulma.io/images/placeholders/640x320.png', alt='그룹 대표 사진')
          hr
          .field
            .control
              input.input.is-primary(type='text', placeholder='그룹 이름을 설정해주세요')
          textarea.input(type="text" rows="50" placeholder="그룹에 소개글을 적어주세요")
            //- columns 
            //- columns 
            //- textarea.is-12
          // Content ...
      footer.modal-card-foot
        a.button.is-primary 그룹 만들기
        a.button(@click="closeModal") 취소

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
