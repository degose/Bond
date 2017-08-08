<template lang="pug">
      .modal(v-if="visible" class="is-active")
        .modal-background(@click="closeModal")
        .modal-card
          header.modal-card-head
            p.modal-card-title 글쓰기


          section.modal-card-body
            .card-content
              textarea.write-text-modal(placeholder='소식을 남겨주세요.', rows='10')
            //- footer.card-footer
          footer.card-footer
            .file.card-footer-item
              label.file-label
                input.file-input(type='file', name='resume')
                span
                  i.fa.fa-picture-o
            .file.card-footer-item
              label.file-label
                input.file-input(type='file', name='resume')
                span
                  i.fa.fa-play-circle-o
            .file.card-footer-item
              label.file-label
                input.file-input(type='file', name='resume')
                span
                  i.fa.fa-folder-open-o
          footer.modal-card-foot
            button.button.is-primary.is-3 글쓰기
            button.button.is-3(:aria-label="close_message" @click="closeModal") 취소

        button.modal-close(:aria-label="close_message" @click="closeModal")
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
<style lang="sass">
@import "~bulma"
@import "~style"

.card-footer-item
  background: #fff
.ca
  cursur: pointer

.write-text-modal
  border: none
  width: 100%
  font-size: 1rem

// .file-cta
//   background: #fff

  
</style>


