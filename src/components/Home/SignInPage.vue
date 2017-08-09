<template lang="pug">
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
            h1.is-size-4.has-text-centered.title.home-heading 이메일로 로그인
            form
              fieldset.field
                .column.is-half.is-offset-one-quarter
                  .control.has-icons-left.has-icons-right
                    input.input(type='email', placeholder='이메일을 입력해주세요.', aria-label="이메일 입력상자")
                    span.icon.is-small.is-left
                      i.fa.fa-envelope
                    span.icon.is-small.is-right
                      i.fa.fa-check
                .column.is-half.is-offset-one-quarter
                  .control.has-icons-left.has-icons-right
                    input.input(type='password', placeholder='비밀번호를 입력해주세요.', aria-label="비밀번호 입력상자")
                    span.icon.is-small.is-left
                      i.fa.fa-lock
                    span.icon.is-small.is-right
                      i.fa.fa-check
                .control.column.is-half.is-offset-one-quarter
                  router-link(to='/MainPage', active-class='current-page')
                    button.column.btn-fill.btn-login 로그인
            .field
              .control.column.is-half.is-offset-one-quarter.has-text-centered
                a(href='#/FindPassword').is-link.home-link.column 비밀번호를 잊으셨나요?
                a(href='#/SignUp').is-link.home-link.column 처음이신가요? 회원가입
</template>

<script>
export default {
  name: 'app',
  components: {
  },
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
  

</style>