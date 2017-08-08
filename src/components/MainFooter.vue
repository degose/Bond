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
            a(href='http://jgthms.com') 김태훈
            |  · 
            a(href='http://opensource.org/licenses/mit-license.php') 한성욱
            |  · 
            a(href='http://opensource.org/licenses/mit-license.php') 고세민
            | &nbsp; 
            | /
            | &nbsp; 
            strong BackEndSchool
            | &nbsp; 
            a(href='http://jgthms.com') 김기홍
            |  · 
            a(href='http://opensource.org/licenses/mit-license.php') 김영민
            |  · 
            a(href='http://opensource.org/licenses/mit-license.php') 이다함
            //- a.icon(href='https://github.com/jgthms/bulma')
            //-   i.fa.fa-github
          p.is-hidden-tablet.is-hidden-desktop
            a(href='http://jgthms.com') 패스트캠퍼스

</template>

<style lang="sass" scoped>
@import "~bulma"
@import "~style"
.footer
  // position: absolute
  // bottom: 0
  // width: 100%
  background-color: hsla(0, 0%, 100%, .3)
</style>
