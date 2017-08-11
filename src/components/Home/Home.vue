<template lang="pug">
div
  background
  .container
    header.header
      .columns.is-centered.is-mobile
        .column.is-half.is-narrow.has-text-centered.logo
          router-link(to='/')
            picture
              img(src='../../assets/logo-01.svg', alt='큰본드', width=170, height=28)
    main
      .columns.is-mobile.home-box-wrapper
        .box.column.is-half.is-offset-one-quarter.home-box
          h1.is-size-4.has-text-centered.title.home-heading 로그인
          .control.column.is-half.is-offset-one-quarter.email-login
            router-link(to='/SignInPage', active-class='current-page')
              button.column.btn-default.btn-login 이메일로 로그인
          .control.column.is-half.is-offset-one-quarter.facebook-login
            router-link(to='/#', active-class='current-page')
              button.column.btn-default.btn-login 페이스북으로 로그인
          //- .control.column.is-half.is-offset-one-quarter
          //-   label.checkbox
          //-     input(type='checkbox')
          //-     |       로그인 상태유지
          .control.column.is-half.is-offset-one-quarter.has-text-centered
            //- a(href='/SignUpPage')
            router-link(to="/SignUpPage")
              |       처음이신가요? 회원가입
      //- main-footer
</template>

<script>
import Background from '../Background';
export default {
  name: 'app',
  components: {
    Background
  },
}
</script>

<style lang="sass" scoped>
@import "~bulma"
@import "~style"

.logo
  padding: 60px 0 90px 0

.home-box
  background-color: hsla(0, 0%, 100%, .7)
  padding: 40px 0
.container
  min-height: 87vh

</style>