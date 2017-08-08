<template lang="pug">
  div
    footer.footer
      .container
        .content.has-text-centered
          a(href="#")
            picture
              img(src='../assets/logo-01.svg', alt='큰본드', width=70, height=28)
                //- p
                //-   strong Bond
          | &nbsp;
          | by 
          p
          p.is-hidden-mobile
            strong FrontEndSchool
            | &nbsp; 
            a(href='https://github.com/realkth') 김태훈
            |  · 
            a(href='https://github.com/chamsinnim') 한성욱
            |  · 
            a(href='https://github.com/degose') 고세민
            | &nbsp; 
            | /
            | &nbsp; 
            strong BackEndSchool
            | &nbsp; 
            a(href='https://github.com/Gyong1211') 김기홍
            |  · 
            a(href='https://github.com/ym4199') 김영민
            |  · 
            a(href='https://github.com/dahamlee') 이다함
          p.is-hidden-tablet.is-hidden-desktop
            a(href='http://jgthms.com') 패스트캠퍼스

</template>

<style lang="sass" scoped>
@import "~bulma"
@import "~style"


.footer
  position: absolute
  bottom: 0
  // width: 100%
  background-color: hsla(0, 0%, 100%, .3)
  width: 100%
</style>
