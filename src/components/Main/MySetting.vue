<template lang="pug">
  .modal(v-if="visible" class="is-active")
    .modal-background(@click="closeModal")
    .modal-card
      header.modal-card-head
        p.modal-card-title 내 정보
      section.modal-card-body
        nav.level
          .level-item.has-text-centered
            figure.image.is-128x128
              img.profilepic(src='http://bulma.io/images/placeholders/128x128.png')
        nav.level
          .level-item.has-text-centered
            .file.is-primary.is-small
              label.file-label
                input.file-input(type='file', name='resume')
                span.file-cta
                  span.file-icon
                    i.fa.fa-upload
                  span.file-label
                    | Choose a file…
        nav.level
          .level-item.has-text-centered
            .field.has-addons
              p.control
                input.input(type='text', placeholder='현재 내이름' disabled)           
        nav.level
          .level-item.has-text-centered
            .field.has-addons
              p.control
                input.input(type='email', placeholder='현재 내 이메일' disabled)
        nav.level
          .level-item.has-text-centered
            .field.has-addons
              p.control
                input.input(type='text', placeholder='닉네임 변경')
              p.control
                button.button
                  | 변경
      footer.modal-card-foot
        button.button.is-primary 설정 변경
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
.profilepic
  border-radius: 50%
</style>
