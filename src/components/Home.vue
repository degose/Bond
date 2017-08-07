<template lang="pug">
  .container
    header.header
      .title.has-text-centered
          img(src="../assets/logo-01.svg")
      .box.column.is-half.is-offset-one-quarter
        h1.is-size-4.has-text-centered.title 로그인
          .field
            p.control.column.is-half.is-offset-one-quarter.email-login
              router-link(to='/Login', active-class='current-page')
                button.column.btn-default.btn-login 이메일로 로그인
          .field
            p.control.column.is-half.is-offset-one-quarter.facebook-login
              router-link(to='/#', active-class='current-page')
                button.column.btn-default.btn-login 페이스북으로 로그인
          .field
            .control.column.is-half.is-offset-one-quarter
              label.checkbox
                input(type='checkbox')
                |       로그인 상태유지
            .control.column.is-half.is-offset-one-quarter
              a(href='#/SignUp')
                |       처음이신가요? 회원가입
</template>

<script>
export default {
  name: 'app',
}
</script>

<style lang="sass" scoped>
@import "~bulma"
@import "~style"
.title
  // margin: 20px 0
// .email-login
//   margin-top: 20px
// .field
//   margin-bottom: 0
// .box
//    background-color: hsla(0, 0%, 100%, .9)
</style>
