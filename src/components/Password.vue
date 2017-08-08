<template lang="pug">
    .container
      .title.has-text-centered
          img(src="../assets/logo-01.svg")
      .box.column.is-half.is-offset-one-quarter
        h1.is-size-4.has-text-centered.title 비밀번호 찾기
          .field
            p.control.column.is-half.is-offset-one-quarter.email-id
              input.input(type='email', placeholder='이메일을 입력해주세요.')
          .field
            p.control.column.is-half.is-offset-one-quarter
                button.column.btn-fill.btn-login 보내기
          .field
            p.control.column.is-half.is-offset-one-quarter
              a(href='#').is-link.column 비밀번호가 생각나셨나요? 로그인
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