<template lang="pug">
  div(v-cloak)
    .container
      header.header
      transition(
            appear
            enter-active-class="animated rubberBand"
            :duration="2000"
          )
        .columns.is-centered.is-mobile
          .column.is-half.is-narrow.has-text-centered.logo
            router-link(to='/')
              picture
                img(src='../../assets/logo-01.svg', alt='큰본드', width=170, height=28)

      main.is-hidden-mobile
        .columns.is-mobile.home-box-wrapper
          .box.column.is-half.is-offset-one-quarter.home-box
            h1.is-size-4.has-text-centered.title.home-heading 이메일로 로그인
            form
              fieldset.field
                .column.is-half.is-offset-one-quarter
                  .control.has-icons-left.has-icons-right
                    input.input(type='email', v-model="signin.email", placeholder='이메일을 입력해주세요.', aria-label="이메일 입력상자")
                    span.icon.is-small.is-left
                      i.fa.fa-envelope
                    span.icon.is-small.is-right
                      i.fa.fa-check
                .column.is-half.is-offset-one-quarter
                  .control.has-icons-left.has-icons-right
                    input.input(type='password', v-model="signin.password" placeholder='비밀번호를 입력해주세요.', aria-label="비밀번호 입력상자" @keyup.enter="signinSubmit")
                    span.icon.is-small.is-left
                      i.fa.fa-lock
                    span.icon.is-small.is-right
                      i.fa.fa-check
                .control.column.is-half.is-offset-one-quarter
                  button.column.btn-fill.btn-login(type="button" @click="signinSubmit") 로그인
            
            .field
              .control.column.is-half.is-offset-one-quarter.has-text-centered
                router-link(to='/FindPassword').is-link.home-link.column 비밀번호를 잊으셨나요?
                router-link(to='/SignUpPage').is-link.home-link.column 처음이신가요? 회원가입
      
      main.is-hidden-tablet.is-hidden-desktop
        .mobile-wrapper
          .columns.is-mobile.home-box-wrapper
            .box.column.home-box
              h1.is-size-4.has-text-centered.title.home-heading 이메일로 로그인
              form
                fieldset.field
                  .column.is-half.is-offset-one-quarter
                    .control.has-icons-left.has-icons-right
                      input.input(type='email', v-model="signin.email", placeholder='이메일을 입력해주세요.', aria-label="이메일 입력상자")
                      span.icon.is-small.is-left
                        i.fa.fa-envelope
                      span.icon.is-small.is-right
                        i.fa.fa-check
                  .column.is-half.is-offset-one-quarter
                    .control.has-icons-left.has-icons-right
                      input.input(type='password', v-model="signin.password" placeholder='비밀번호를 입력해주세요.', aria-label="비밀번호 입력상자" @keyup.enter="signinSubmit")
                      span.icon.is-small.is-left
                        i.fa.fa-lock
                      span.icon.is-small.is-right
                        i.fa.fa-check
                  .control.column.is-half.is-offset-one-quarter
                    button.column.btn-fill.btn-login(type="button" @click="signinSubmit" ) 로그인
              
              .field
                .control.column.is-half.is-offset-one-quarter.has-text-centered
                  router-link(to='/FindPassword').is-link.home-link.column 비밀번호를 잊으셨나요?
                  router-link(to='/SignUpPage').is-link.home-link.column 처음이신가요? 회원가입
                
</template>

<script>
import Background from '../Background';
export default {
  components: {
    Background
  },
  data(){
    return {
      signin: {
        email: '',
        password: ''
      },
    }
  },
  methods: {
    signinSubmit(){
      this.$http.post(this.$store.state.api_signin, this.signin)
      .then(response => {
      let token = response.data.token;
      let pk = response.data.user;
        if ( !window.localStorage.getItem('token') ) {
          window.localStorage.setItem('token', token);
          window.localStorage.setItem('pk', pk);
        }
        this.$router.push( {path: '/MainPage'} );
      })
      .catch(error => {
        // 이메일만 빈칸 일 때의 오류 메시지
        if (this.signin.email === '' && this.signin.password !== ''){alert('이메일 <- ' + error.response.data.email[0]);}
        // 패스워드만 빈칸 일 때의 오류 메시지
        else if(this.signin.password === '' && this.signin.email !== ''){alert('비밀번호 <- ' + error.response.data.password[0]);}
        // 틀린 정보를 시도했을 때의 오류 메시지
        else alert(error.response.data.non_field_errors[0]);
        console.log(error.response);
      })
      // const loadingComponent = this.$loading.open()
      // setTimeout(() => loadingComponent.close(), 4 * 1000)
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

.home-link
  padding: 5px 0 0 0
.container
  min-height: 87vh
  
.mobile-wrapper
  padding: 0 40px

</style>