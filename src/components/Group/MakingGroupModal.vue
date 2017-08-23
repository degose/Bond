<template lang="pug">
  .modal(v-if="visible" class="is-active" v-cloak)
    .modal-background(@click="closeModal")
    .modal-card
      header.modal-card-head
        figure.image.is-desktop-16by9.is-mobile-1by1.is-tablet-2by1.img-group-wrapper
          img(v-if="group.profile_img" :src="uploadGroupImg", alt='그룹 대표 사진')
      section.modal-card-body
        .file.is-centered.is-boxed.is-primary.has-name
          form(id="uploadImg" name="uploadImg" method="POST" enctype="multipart/form-data" @submit.prevent="")
            label.file-label
              input.file-input(ref="file_input" @change="previewFile" type='file' name='resume' id="imgfileinput")
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
            input.input.group-name-input(type='text' v-model="group.name" placeholder='그룹 이름을 설정해주세요' maxlength=9)
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
      let user_token = window.localStorage.getItem('token');
      let formData = new FormData();

      formData.append('name', this.group.name);
      formData.append('description', this.group.description);
      if( !!this.$refs.file_input.files[0] ){
        formData.append('profile_img', this.$refs.file_input.files[0]);
      }
      // for (var pair of formData.entries()) {
      //   console.log(pair[0]+ ', ' + pair[1]); 
      // }
      this.$http.post(
        this.$store.state.api_grouplist, 
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
        let name = data.name;
        let description = data.description;
        let profile_img = data.profile_img;
        this.$parent.group_list.unshift({
          description: description,
          group_type: 'PUBLIC',
          name: name,
          num_of_members: 1,
          owner:{},
          // pk: '',
          profile_img: profile_img,
          tags: [],
        });
        // console.log(profile_img);
        this.visible = false;
        // getMyGroupList();
        console.log('부모', this.$parent);
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
  background: url('../../assets/no-group.png')
  // background-position: center

.group-name-input
  margin-bottom: 15px

</style>
