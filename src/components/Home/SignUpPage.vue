<template lang="pug">
  div(v-cloak)
    .container
      header.header
        .columns.is-centered.is-mobile
          .column.is-half.is-narrow.has-text-centered.logo
            router-link(to='/')
              picture
                img(src='../../assets/logo-01.svg', alt='큰본드', width=170, height=28)


      main.is-hidden-mobile
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
                input.input(type='text', v-model="signup.username" placeholder='이름을 입력해주세요.')
                span.icon.is-small.is-left
                  i.fa.fa-user
                span.icon.is-small.is-right
                  i.fa.fa-check
            .column.is-half.is-offset-one-quarter
              .control.has-icons-left.has-icons-right
                input.input(type='email', v-model="signup.email" placeholder='이메일을 입력해주세요.')
                span.icon.is-small.is-left
                  i.fa.fa-envelope
                span.icon.is-small.is-right
                  i.fa.fa-check
            .column.is-half.is-offset-one-quarter
              .control.has-icons-left.has-icons-right
                input.input(type='password', v-model="signup.password1" placeholder='비밀번호')
                span.icon.is-small.is-left
                  i.fa.fa-lock
                span.icon.is-small.is-right
                  i.fa.fa-check
            .column.is-half.is-offset-one-quarter
              .control.has-icons-left.has-icons-right
                input.input(type='password', v-model="signup.password2" placeholder='비밀번호 확인')
                span.icon.is-small.is-left
                  i.fa.fa-lock
                span.icon.is-small.is-right
                  i.fa.fa-check



            .field.column.is-grouped.is-grouped-centered
              .control
                button.button.is-primary(type="button" @click="signupSubmit") 가입하기
              .control
                router-link(to='/', active-class='current-page')
                  button.button.is-link.is-right Cancel



      main.is-hidden-tablet.is-hidden-desktop
        .mobile-wrapper
          .columns.is-mobile.home-box-wrapper
            .box.column.home-box
              h1.is-size-4.has-text-centered.title.home-heading 회원가입
              form
                fieldset.field
              .column.is-half.is-offset-one-quarter.nickname
                .control
                  input.input(type='text', v-model="signup.nickname" placeholder='닉네임을 설정해주세요.')
                p.help.is-dark 해당 닉네임은 사용가능합니다.
              .column.is-half.is-offset-one-quarter
                .control.has-icons-left.has-icons-right
                  input.input(type='text', v-model="signup.username" placeholder='이름을 입력해주세요.')
                  span.icon.is-small.is-left
                    i.fa.fa-user
                  span.icon.is-small.is-right
                    i.fa.fa-check
              .column.is-half.is-offset-one-quarter
                .control.has-icons-left.has-icons-right
                  input.input(type='email', v-model="signup.email" placeholder='이메일을 입력해주세요.')
                  span.icon.is-small.is-left
                    i.fa.fa-envelope
                  span.icon.is-small.is-right
                    i.fa.fa-check
              .column.is-half.is-offset-one-quarter
                .control.has-icons-left.has-icons-right
                  input.input(type='password', v-model="signup.password1" placeholder='비밀번호')
                  span.icon.is-small.is-left
                    i.fa.fa-lock
              .column.is-half.is-offset-one-quarter
                .control.has-icons-left.has-icons-right
                  input.input(type='password', v-model="signup.password2" placeholder='비밀번호 확인')
                  span.icon.is-small.is-left
                    i.fa.fa-lock



              .field.column.is-grouped.is-grouped-centered
                .control
                  button.button.is-primary(type="button" @click="signupSubmit") 가입하기
                .control
                  router-link(to='/', active-class='current-page')
                    button.button.is-link.is-right Cancel


</template>

<script>
import Background from '../Background';

export default {
  data(){
    return {
      signup: {
        nickname: '',
        username: '',
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
      this.$http.post(this.$store.state.api_signup, this.signup)
                .then(response => {
                  // console.log(response);
                  this.$router.push( {path: '/SignInPage'} );
                  })
                .catch(error => {
                  console.log(error.message);
                  console.log('실패');
                  });
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
  background-color: hsla(0, 0%, 100%, .9)
  padding: 40px 0

fieldset
  border: 0 none
  margin: 0

.container
  // min-height: 87vh
.mobile-wrapper
  padding: 0 40px


</style>
