<template lang="pug">
  .modal(v-if="visible" class="is-active" v-cloak)
    .modal-background(@click="closeModal")
    .modal-card
      header.modal-card-head
        p.modal-card-title 내 정보
      section.modal-card-body
        nav.level
          .level-item.has-text-centered
            figure.image.is-128x128.profilepic
              img(v-if='userinput.profile_img' :src='uploadMyImg' alt='my profile image' width=128 height=128)
        nav.level
          .level-item.has-text-centered
            .file.is-primary.is-small
              form(id="uploadImg" name="uploadImg" method="PATCH" enctype="multipart/form-data" @submit.prevent="")
                label.file-label
                  input.file-input(ref="file_input" @change="previewFile" type='file', name='resume')
                  span.file-cta
                    span.file-icon
                      i.fa.fa-upload
                    span.file-label
                      | Choose a file…
        nav.level
          .level-item.has-text-centered
            .field.has-addons
              p.control
                input.input(type='text', :placeholder="user.username" disabled) 

        nav.level
          .level-item.has-text-centered
            .field.has-addons
              p.control
                input.input(type='email', :placeholder='user.email' disabled)

        nav.level
          .level-item.has-text-centered
            .field.has-addons
              p.control
                input.input(type='text', :placeholder='user.nickname', v-model="userinput.nickname" )
              p.control
      footer.modal-card-foot
        button.button.is-primary(type="submit" @click="submitSetting") 설정 변경
        button.button(@click="closeModal") 취소
      //- level-right 요소로 우측정렬 가능.. 빈 요소라도 level-left는 언제나 필수! 
</template>

<script>
export default {
  created(){
   this.getUserInfo();
  },
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
      uploadMyImg: '',
      user:{},
      userinput: {
        profile_img: '',
        nickname:''
      }
    }
  },
  methods: {
    closeModal(){
      this.userinput = '';
      this.$refs.file_input = '';
      this.visible = false;
    },
    checkImage(file){
      if(/.*\.(gif)|(jpeg)|(jpg)|(png)$/.test(file.name.toLowerCase())){
          return true;
      }
    },
    previewFile(e){
      let _this = this;
      let file = e.target.files[0];
      this.userinput.profile_img = file;
      let reader = new FileReader();
      if(this.checkImage(file)){
        this.file = file;
        reader.readAsDataURL(file);
        this.file_name = file.name;
        reader.onload = data => {
          this.uploadMyImg = data.srcElement.result;
          this.userinput.proflie_img = data.srcElement.result;
          _this.file_url = reader.result;
        }
      } else { alert('이미지 파일만 선택 가능합니다.')}
    },
    submitSetting(){

      let user_token = window.localStorage.getItem('token');
      let pk = window.sessionStorage.getItem('pk');
      let formData = new FormData();

      if(!!this.userinput.nickname){
        formData.append('nickname', this.userinput.nickname);
      }
      if(!!this.$refs.file_input.files[0]){
        formData.append('profile_img', this.$refs.file_input.files[0]);
      }
      this.$http.patch(
        'https://api.thekym.com/member/' + `${pk}` + '/', 
        formData,
        { 
          headers: {
            'Authorization' : `Token ${user_token}`,
            'Content-Type': 'multipart/form-data'
          }
        }
      )
      .then(response => {
        let data = response.data;
        let nickname = data.nickname;
        let profile_img = data.profile_img;
        this.$parent.user = data;
        this.visible = false;
        
      })
      .catch(error => {
        if(this.userinput.nickname === ''){
          alert('닉네임 <- ' + error.response.data.nickname[0])
        }
        // else alert('')
        console.error(error.response)
      });
      this.userinput = '';
      this.$refs.file_input = '';

    },
    getUserInfo(){
      let user_token = window.localStorage.getItem('token');
      let pk = window.sessionStorage.getItem('pk');
      this.$http.get('https://api.thekym.com/member/' + `${pk}` + '/',
      { headers: {'Authorization' : `Token ${user_token}`}})
                .then(response => {
                  this.user = response.data;
                  })
                .catch(error => console.log(error.response));
    }
  }
}
</script>
<style lang="sass" scoped>
@import "~bulma"
@import "~style"

.profilepic
  background: #eee
  width: 128px
  height: 128px
  overflow: hidden
  border-radius: 50%

</style>