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
                input.input(type='text', v-model="user.username" disabled) 
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
      user:{
        pk:'',
        email:'',
        nickname:'',
        username:'',

      }
    }
  },
  methods: {
    closeModal(){
      this.visible = false;
    },
    getUserInfo(){
      let user_token = window.localStorage.getItem('token');
      let userinfo = {
        pk: this.user.pk,
        email: this.user.email,
        nickname: this.user.nickname,
        username: this.user.username
      }
      this.$http.get('http://bond.ap-northeast-2.elasticbeanstalk.com/api/member/',
      { headers: {'Authorization' : `Token ${user_token}`}})
                .then(response => {
                  console.log(response);
                  let data = response.data.results;
                  // data.contains('email')
                  let my_email = window.localStorage.getItem('email');
                  if (data.includes(my_email)) {
                    return data;
                  }
                  console.log('data:',data);

                  // if(window.localStorage.getItem('email')){
                  //   return 
                  // }
                  // this.user = response.data.results; 
                  console.log('user:',this.user);
                  }
                  )
    
                // .then(response => {          
                //   console.log(response);
                //   console.log('userinfo.pk:',userinfo.pk);
                //   console.log('userinfo.email:',userinfo.email);
                //   console.log('userinfo.nickname:',userinfo.nickname)
                //   console.log('userinfo.username:',userinfo.username)})
                .catch(error => console.log(error.response));
    }
  }
}
</script>
<style lang="sass" scoped>
.profilepic
  border-radius: 50%
</style>
