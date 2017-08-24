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
          h1.is-size-4.has-text-centered.title.home-heading 로그인
          .control.column.is-half.is-offset-one-quarter.email-login
            router-link(to='/SignInPage', active-class='current-page')
              button.column.btn-default.btn-login 이메일로 로그인
          .control.column.is-half.is-offset-one-quarter.facebook-login
            router-link(to='/#', active-class='current-page')
              button.column.btn-default.btn-login 페이스북으로 로그인
          .control.column.is-half.is-offset-one-quarter.has-text-centered
            router-link(to="/SignUpPage")
              |       처음이신가요? 회원가입


    main.is-hidden-tablet.is-hidden-desktop
      .mobile-wrapper
        .columns.is-mobile.home-box-wrapper
          .box.column.home-box
            h1.is-size-4.has-text-centered.title.home-heading 로그인
            .control.column.is-half.is-offset-one-quarter.email-login
              router-link(to='/SignInPage', active-class='current-page')
                button.column.btn-default.btn-login 이메일로 로그인
            .control.column.is-half.is-offset-one-quarter.facebook-login
              router-link(to='/#', active-class='current-page')
                button.column.btn-default.btn-login 페이스북으로 로그인
            .control.column.is-half.is-offset-one-quarter.has-text-centered
              router-link(to="/SignUpPage")
                |       처음이신가요? 회원가입
</template>

<script>
import Background from '../Background';
export default {
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
  background-color: hsla(0, 0%, 100%, .9)
  padding: 40px 0
.container
  min-height: 87vh
.mobile-wrapper
  padding: 0 40px

</style>