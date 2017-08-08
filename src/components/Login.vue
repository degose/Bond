<template lang="pug">
    .container
      .title.has-text-centered
          img(src="../assets/logo-01.svg")
      .box.column.is-half.is-offset-one-quarter
        h1.is-size-4.has-text-centered.title 이메일로 로그인
          .field
            p.control.column.is-half.is-offset-one-quarter.email-id
              input.input(type='email', placeholder='이메일을 입력해주세요.')
          .field
            p.control.column.is-half.is-offset-one-quarter.email-password
              input.input(type='password', placeholder='비밀번호를 입력해주세요.')
          .field
            p.control.column.is-half.is-offset-one-quarter
                button.column.btn-fill.btn-login 로그인
          .field
            p.control.column.is-half.is-offset-one-quarter
              a(href='#/Password').is-link.column 비밀번호를 잊으셨나요?
              a(href='#/SignUp').is-link.column 처음이신가요? 회원가입
</template>

<script>
export default {
  name: 'app',
}
</script>

<style lang="sass" scoped>
  .title
    margin: 20px 0
  .email-id
    margin-top: 20px
  .field
    margin-bottom: 0
  .box
    background-color: hsla(0, 0%, 100%, .9)
</style>