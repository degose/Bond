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
            h1.is-size-4.has-text-centered.title.title.home-heading 회원가입
            form
              fieldset.field
            .column.is-half.is-offset-one-quarter.nickname
              .control
                input.input(type='text', placeholder='닉네임을 설정해주세요.')
              p.help.is-dark 해당 닉네임은 사용가능합니다.
            .column.is-half.is-offset-one-quarter
              .control.has-icons-left.has-icons-right
                input.input.is-primary(type='text', placeholder='이름을 입력해주세요.')
                span.icon.is-small.is-left
                  i.fa.fa-user
                span.icon.is-small.is-right
                  i.fa.fa-check
            .column.is-half.is-offset-one-quarter
              .control.has-icons-left.has-icons-right
                input.input.is-primary(type='text', placeholder='이메일을 입력해주세요.')
                span.icon.is-small.is-left
                  i.fa.fa-envelope
                span.icon.is-small.is-right
                  i.fa.fa-warning
            .field.column.is-grouped.is-grouped-centered
              .control
                router-link(to='/#/Login', active-class='current-page')
                  button.button.is-primary 가입하기
              .control
                router-link(to='/#', active-class='current-page')
                  button.button.is-link.is-right Cancel
</template>

<script>
export default {
  name: 'app',
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



</style>
