<template lang="pug">
  .modal(v-if="visible" class="is-active")
    .modal-background(@click="closeModal")
    .modal-card
      header.modal-card-head
        p.modal-card-title 내 정보
        hr
      section.modal-card-body
        div.content
          figure.image.is-128x128
            img(src='http://bulma.io/images/placeholders/128x128.png')
        .field
          .control
          input.input.is-primary(type='text', placeholder='그룹11 이름을 설정해주세요')
          textarea.input.is-primary(type="text" rows="50" placeholder="그룹에 소개글을 적어주세요")
            //- columns 
            //- columns 
            //- textarea.is-12
          // Content ...
      footer.modal-card-foot
        a.button.is-primary 설정 변경
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
