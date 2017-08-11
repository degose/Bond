<template lang="pug">
  .modal(v-if="visible" class="is-active")
    .modal-background(@click="closeModal")
    .modal-card
      header.modal-card-head
        p.modal-card-title 글쓰기


      section.modal-card-body
        .card-content
          textarea.write-text-modal(placeholder='소식을 남겨주세요.', rows='10' v-model="write.task")
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
        button.button.is-primary.is-3(type="button" @click="writeTextSubmit") 글쓰기
        button.button.is-3(:aria-label="close_message" @click="closeModal") 취소

    button.modal-close(:aria-label="close_message" @click="closeModal")
</template>

<script>

export default {
  name: 'app',
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
      visible: this.is_visible,
      write: {
        done: false,
        task: ''
      }
    }
  },
  methods: {
    closeModal(){
      this.visible = false;
    },
    writeTextSubmit(){
      // console.log(this.write_text);
      // this.$http.post('https://bond-43bc3.firebaseio.com/write_text.json', this.write_text.task).then(response => {
      //   console.log(response);
      // }).catch((error) => {
      //   console.error(error.message);
      //   console.log('실패');
      // })
      this.$http.post(this.$store.state.api_write, this.write)
                .then(response => console.log(response))
                .catch(error => console.log(error.message));
    }
  }
}
</script>
<style lang="sass" scoped>
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

.file-cta
  // background: #fff

  
</style>


