<template lang="pug">
  .modal(v-if="visible" class="is-active")
    .modal-background(@click="closeModal")
    .modal-card
      header.modal-card-head
        figure.image.is-desktop-16by9.is-mobile-1by1.is-tablet-2by1.img-group-wrapper
          img(v-if="group.profile_img" :src="uploadGroupImg", alt='그룹 대표 사진')
      section.modal-card-body 
        .file.has-name.is-fullwidth.is-primary
          form(id="uploadImg" name="uploadImg" method="POST" enctype="multipart/form-data")
            label.file-label
              input.file-input(@change="previewFile" type='file' name='resume' id="imgfileinput")
              span.file-cta
                span.file-icon
                  i.fa.fa-upload
                span.file-label
                  | 사진을 선택해주세요
              span.file-name(v-if="file_name.length == 0")
                | 이미지 파일만 선택 가능합니다.
              span.file-name(v-else)
                | {{ file_name }}
        hr
        .field
          .control
            input.input.group-name-input(type='text' v-model="group.name" placeholder='그룹 이름을 설정해주세요')
            textarea.textarea(rows='3' type="text" v-model="group.description" placeholder="그룹에 소개글을 적어주세요" maxlength=40)

      footer.modal-card-foot
        button.button.is-primary(type="submit" @click="createGroup") 그룹 만들기
        button.button(@click="closeModal") 취소

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
      visible: this.is_visible,
      uploadGroupImg: '',
      file_url: '',
      file_name: '',
      flie: null,
      group: {
        name: '',
        description: '',
        proflie_img: 'null'
      }
    }
  },
  watch: {

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
    previewFile(e) {
      let _this = this;
      let file = e.target.files[0];
      this.group.profile_img = file;
      let reader = new FileReader();
      if(this.checkImage(file)){
        this.file = file;
        reader.readAsDataURL(file);
        this.file_name = file.name;
        reader.onload = data => {
          this.uploadGroupImg = data.srcElement.result;
          this.group.proflie_img = data.srcElement.result;
          _this.file_url = reader.result;
        }
      } else { alert('이미지 파일만 선택 가능합니다.')}
      console.log('file:',file);
    },
    createGroup(){

      let imgfileinput = document.getElementById('imgfileinput').files[0];
      let formData = new FormData();
      let reader = new FileReader();
      reader.readAsDataURL(imgfileinput);
      formData.append('profile_img', imgfileinput);
      reader.onload = data => {
          this.group.proflie_img = data.srcElement.result;
      }
      console.log('img',this.formData);
      this.group.proflie_img = formData;

      let groupinfo = {
        name: this.group.name,
        description: this.group.description,
        proflie_img: this.group.proflie_img
      }

      let user_token = window.localStorage.getItem('token');
      this.$http.post(
        this.$store.state.api_grouplist, 
        groupinfo, 
        { 
          headers: {
            'Authorization' : `Token ${user_token}`,
            // 'Content-Type': 'multipart/form-data'
          }
          
        }
        )
        .then(response => {
          console.log(response);
          console.log('groupinfo.proflie_img:',groupinfo.proflie_img);
          console.log('formData:',formData);
          console.log('imgfileinput:',imgfileinput);
          this.visible = false;
        })
        .catch(error => {
          if(this.group.name === ''){
            alert('그룹이름 <- ' + error.response.data.name[0])
          }
          // else alert("입력하신 그룹 이름은 이미 존재합니다.")
          console.log(error.response)});
    },

  }
}
</script>
<style lang="sass" scoped>


.img-group-wrapper
  width: 100%
  height: 320px
  overflow: hidden
  background: url('http://bulma.io/images/placeholders/640x320.png')
  // background-position: center

.group-name-input
  margin-bottom: 15px

</style>
