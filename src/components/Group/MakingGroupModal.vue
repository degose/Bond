<template lang="pug">
  .modal(v-if="visible" class="is-active")
    .modal-background(@click="closeModal")
    .modal-card
      header.modal-card-head
        figure.image.is-desktop-16by9.is-mobile-1by1.is-tablet-2by1
         a
          img(src='http://bulma.io/images/placeholders/640x320.png', alt='그룹 대표 사진')
      section.modal-card-body 
        .file.has-name.is-fullwidth.is-primary
          label.file-label
            input.file-input(type='file', name='resume')
            span.file-cta
              span.file-icon
                i.fa.fa-upload
              span.file-label
                | 사진을 선택해주세요
            span.file-name
              | Screen Shot 2017-07-29 at 15.54.25.png
        hr
        .field
          .control
            input.input.is-primary(type='text' v-model="group.name" placeholder='그룹 이름을 설정해주세요')
            textarea.input(type="text" v-model="group.description" placeholder="그룹에 소개글을 적어주세요" maxlength=40)
            //- columns 
            //- columns 
            //- textarea.is-12
          // Content ...
      footer.modal-card-foot
        button.button.is-primary(type="button" @click="createGroup") 그룹 만들기
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
      group: {
        name: '',
        description: ''
      }
    }
  },
  methods: {
    closeModal(){
      this.visible = false;
    },
    createGroup(){
      let user_token = window.localStorage.getItem('token');
      this.$http.post(this.$store.state.api_grouplist, this.group,{ headers: { 'Authorization' : `Token ${user_token}` }})
      .then(response => {
      console.log(response);
      this.$router.push('/MainPage');
    })
    .catch(error => {if(this.group.name === ''){alert('그룹이름 <- ' + error.response.data.name[0])}
    else alert("입력하신 그룹 이름은 이미 존재합니다.")
    console.log(error.response)});
    }
  }
}
</script>
<style lang="sass" scoped>

</style>
