<template lang="pug">
  div
    background
    .container
      header.header
        .columns.is-centered.is-mobile
          .column.is-half.is-narrow.has-text-centered.logo
            a(href="#")
              picture
                img(src='../../assets/logo-01.svg', alt='큰본드', width=170, height=28)

      main
        .columns.is-mobile.home-box-wrapper
          .box.column.is-half.is-offset-one-quarter.home-box
            h1.is-size-4.has-text-centered.title.title.home-heading 회원가입
            form
              fieldset.field
            .column.is-half.is-offset-one-quarter.nickname
              .control
                input.input(type='text', v-model="signup.nickname" placeholder='닉네임을 설정해주세요.')
              p.help.is-dark 해당 닉네임은 사용가능합니다.
            .column.is-half.is-offset-one-quarter
              .control.has-icons-left.has-icons-right
                input.input(type='text', v-model="signup.name" placeholder='이름을 입력해주세요.')
                span.icon.is-small.is-left
                  i.fa.fa-user
                span.icon.is-small.is-right
                  i.fa.fa-check
            .column.is-half.is-offset-one-quarter
              .control.has-icons-left.has-icons-right
                input.input(type='text', v-model="signup.email" placeholder='이메일을 입력해주세요.')
                span.icon.is-small.is-left
                  i.fa.fa-envelope
                span.icon.is-small.is-right
                  i.fa.fa-warning
            .column.is-half.is-offset-one-quarter
              .control.has-icons-left.has-icons-right
                input.input(type='text', v-model="signup.password1" placeholder='비밀번호')
                span.icon.is-small.is-left
                  i.fa.fa-envelope
                span.icon.is-small.is-right
                  i.fa.fa-warning
            .column.is-half.is-offset-one-quarter
              .control.has-icons-left.has-icons-right
                input.input(type='text', v-model="signup.password2" placeholder='비밀번호 확인')
                span.icon.is-small.is-left
                  i.fa.fa-envelope
                span.icon.is-small.is-right
                  i.fa.fa-warning


            .field.column.is-grouped.is-grouped-centered
              .control
                //- router-link(to='/#/Login', active-class='current-page')
                button.button.is-primary(type="button" @click="signupSubmit") 가입하기
              .control
                router-link(to='/#', active-class='current-page')
                  button.button.is-link.is-right Cancel
</template>

<script>
import Background from '../Background';
export default {
  name: 'app',
  data(){
    return {
      signup: {
        nickname: '',
        name: '',
        email: '',
        password1: '',
        password2: ''
      }
    }
  },
  components:{
    Background
  },
  methods: {
    signupSubmit(){
      this.$http.post('https://bond.ap-northeast-2.elasticbeanstalk.com/api/signup', this.signup)
                .then(response => console.log(response))
                .catch(error => console.log(error.message));
      // this.$http.post('https://bond-43bc3.firebaseio.com/signup.json', this.signup)
      //           .then(response => console.log(response))
      //           .catch(error => console.log(error.message));
    }
  }
}
</script>

<style lang="sass" scoped>
@import "~bulma"
@import "~style"

.logo
  padding: 60px 0 90px 0
  
.email-login
  margin: 0

.email-login
  margin-bottom: 0

.home-box
  background-color: hsla(0, 0%, 100%, .7)
  padding: 40px 0

fieldset
  border: 0 none
  margin: 0
.container
  min-height: 87vh


</style>
