<template lang="pug">
  .modal(v-if="visible" class="is-active")
    .modal-background(@click="closeModal")
    .modal-card
      header.modal-card-head
        p.modal-card-title 글쓰기

      section.modal-card-body
        .card-content
          textarea.write-text-modal(type="text" placeholder='소식을 남겨주세요.', rows='10' @input="writePost('content', $event)" @value='write.content')
        //- .card-content
        //-   .file.file-cta.is-fullwidth
        //-     span.file-icon
        //-       i.fa.fa-upload
        //-     span.file-name(v-if="file_name.length == 0")
        //-       | 파일을 선택해주세요.
        //-     span.file-name(v-else)
        //-       | {{ file_name }}
        //- .card-content
        //-   figure.image.is-desktop-16by9.is-mobile-1by1.is-tablet-2by1.img-group-wrapper
        //-     img(:src="uploadImg", alt='Image')

      form(id="uploadFile" name="uploadFile" method="POST" enctype="multipart/form-data" @submit.prevent="")
        footer.card-footer
          a.file.card-footer-item
            label.file-label
              input.file-input(type='file', name='resume' ref="file_img_input" )
              span
                i.fa.fa-picture-o
          a.file.card-footer-item
            label.file-label
              input.file-input(type='file', name='resume' ref="file_video_input")
              span
                i.fa.fa-play-circle-o
          a.file.card-footer-item
            label.file-label
              input.file-input(type='file', name='resume' ref="file_file_input")
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
      // uploadImg,
      write: {
        // 텍스트 내용
        content:'',
        image: '',
        // video: '',
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
    checkImage(file){
      if(/.*\.(gif)|(jpeg)|(jpg)|(png)$/.test(file.name.toLowerCase())){
          return true;
      }
    },
    // previewFile(e) {
    //   let _this = this;
    //   let file = e.target.files[0];
    //   this.group.profile_img = file;
    //   let reader = new FileReader();
    //   if(this.checkImage(file)){
    //     this.file = file;
    //     reader.readAsDataURL(file);
    //     this.file_name = file.name;
    //     reader.onload = data => {
    //       this.uploadImg = data.srcElement.result;
    //       // this.group.proflie_img = data.srcElement.result;
    //       // _this.file_url = reader.result;
    //     }
    //   } else { alert('이미지 파일만 선택 가능합니다.')}
    //   console.log('file:',file);
    // },
    writeTextSubmit(){
      // 토큰 값으로 유저가 누구인지 인증
      let user_token = window.localStorage.getItem('token');
      let pk = window.localStorage.getItem('this_group');
      let formData = new FormData();

      formData.append('content', this.write.content);
      // formData.append('image', this.$refs.file_img_input.files[0]);
      formData.append('group', pk);
      
      // let write = {
      //   content: this.write.content,
      //   image: '',
      //   group: pk
      // }
      this.$http.post(this.$store.state.api_write, formData,
        { 
          headers: {
            'Authorization' : `Token ${user_token}`,
            'Content-Type': 'multipart/form-data'
          }
        }
      )
                .then(response => {
                  let data = response.data;
                  this.$parent.post_data.unshift({
                    author: {},
                    comment_count: 0,
                    is_like: false,
                    pk: data.pk,
                    image: data.image,
                    group: data.group,
                    video: data.video,
                    content: data.content
                  });
                  // this.$emit('add-post-data', {
                  //   author: {},
                  //   comment_count: 0,
                  //   is_like: false,
                  //   pk: data.pk,
                  //   image: data.image,
                  //   group: data.group,
                  //   video: data.video,
                  //   content: data.content
                  // });
                })
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


