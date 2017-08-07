<template lang="pug">
  #app
    .container
      .title.has-text-centered
          img(src="../assets/logo-01.svg")
      .box.column.is-half.is-offset-one-quarter
        h1.is-size-4.has-text-centered.title 회원가입
          .field.column.is-half.is-offset-one-quarter.nickname
            label.label 닉네임
            .control
              input.input(type='text', placeholder='닉네임을 설정해주세요.')
            p.help.is-dark 해당 닉네임은 사용가능합니다.
          .field.column.is-half.is-offset-one-quarter
            label.label 이름
            .control.has-icons-left.has-icons-right
              input.input.is-primary(type='text', placeholder='이름을 입력해주세요.')
              span.icon.is-small.is-left
                i.fa.fa-user
              span.icon.is-small.is-right
                i.fa.fa-check
          .field.column.is-half.is-offset-one-quarter
            label.label 이메일
            .control.has-icons-left.has-icons-right
              input.input.is-primary(type='text', placeholder='이메일을 입력해주세요.')
              span.icon.is-small.is-left
                i.fa.fa-envelope
              span.icon.is-small.is-right
                i.fa.fa-warning
          .field.is-grouped.is-grouped-centered
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
  .title
    margin: 20px 0
  .field
    margin-top: 0
    margin-bottom: 0
    padding-bottom: 0
  .nickname
    margin-top: 20px
  .is-grouped
    margin-top: 20px
  .label
    overflow: hidden
    position: absolute
    clip: rect(0 0 0 0)
    clip: rect(0, 0, 0, 0)
    width: 1px
    height: 1px
    margin: -1px
    border: 0
    padding: 0
  .button
    margin-top: 20px
  .box
    background-color: hsla(0, 0%, 100%, .9)
</style>
