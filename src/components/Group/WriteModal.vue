<template lang="pug">
  .modal(v-if="visible" class="is-active")
    .modal-background(@click="closeModal")
    .modal-card
      header.modal-card-head
        p.modal-card-title 글쓰기


      section.modal-card-body
        .card-content
          textarea.write-text-modal(type="text" placeholder='소식을 남겨주세요.', rows='10' @input="writePost('content', $event)" @value='write.content')
        //- footer.card-footer
      footer.card-footer
        a.file.card-footer-item
          label.file-label
            input.file-input(type='file', name='resume')
            span
              i.fa.fa-picture-o
        a.file.card-footer-item
          label.file-label
            input.file-input(type='file', name='resume')
            span
              i.fa.fa-play-circle-o
        a.file.card-footer-item
          label.file-label
            input.file-input(type='file', name='resume')
            span
              i.fa.fa-folder-open-o
      footer.modal-card-foot
        //- button.button.is-primary.is-3(type="button" @click="writeTextSubmit") 글쓰기
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
        // 텍스트 내용
        content:'',
        // 그룹 pk값..임의로 정해둠
        group: ''
      },
      datalist:[],
      file_url: '',
      file_name: '',
      flie: null,
    }
  },
  methods: {
    closeModal(){
      this.visible = false;
    },
    writeTextSubmit(){
      // 토큰 값으로 유저가 누구인지 인증
      let user_token = window.localStorage.getItem('token');
      this.$http.post(this.$store.state.api_write, this.write,
      { headers: {'Authorization' : `Token ${user_token}`}})
                .then(response => console.log(response))
                .catch(error => console.log(error.response));
      this.visible = false;
    },
    // 한글 양방향 데이터 바인딩 메서드
    writePost(target, e){
      let input = e.target.value;
      this.write[target] = input;
    },
    // 이미지가 있나 체크해서 v-if활용해 사진 없으면 사진틀 안보이게 하고 싶음..ㅠ
    checkImage(file){
      if(/.*\.(gif)|(jpeg)|(jpg)|(png)$/.test(file.name.toLowerCase())){
          return true;
      }
    },
  }
}
</script>
<style lang="sass" scoped>
@import "~bulma"
@import "~style"

.card-footer-item
  background: #fff
.ca
  cursor: pointer

.write-text-modal
  border: none
  width: 100%
  font-size: 1rem

.file-cta
  // background: #fff
// label,
// input
// span,
// i
//   cursur: pointer

  
</style>


