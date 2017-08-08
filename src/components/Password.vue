<template lang="pug">
    .container
      header.header
        .columns.is-centered.is-mobile
          .column.is-half.is-narrow.has-text-centered.logo
            a(href="#")
              picture
                img(src='../assets/logo-01.svg', alt='큰본드', width=150, height=28)

      main
        .columns.is-mobile.home-box-wrapper
          .box.column.is-half.is-offset-one-quarter.home-box
            h1.is-size-4.has-text-centered.title 비밀번호 찾기
              .field
                p.control.column.is-half.is-offset-one-quarter.email-id
                  input.input(type='email', placeholder='이메일을 입력해주세요.')
              .field
                p.control.column.is-half.is-offset-one-quarter
                  router-link(to='/#', active-class='current-page')
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
.logo
  padding: 50px 0
.home-box
  background-color: hsla(0, 0%, 100%, .9)
</style>