<template lang="pug">
  div(v-cloak)
    footer.footer
      .container
        .content.has-text-centered
          //- 로고 버튼을 누르면 Mygroup 페이지로 이동하고 싶은데 FeedMenu 밑으로 그룹 컴포넌트가 들어가버린다.
          a(@click="gotoHomeComponent")
            picture
              img(src='../../assets/logo-01.svg', alt='큰본드', width=70, height=28)
                //- p
                //-   strong Bond
          | &nbsp;
          | by 
          p
          p.is-hidden-mobile
            strong FrontEndSchool
            | &nbsp; 
            a(href='https://github.com/realkth' target="_blank") 김태훈
            |  · 
            a(href='https://github.com/chamsinnim' target="_blank") 한성욱
            |  · 
            a(href='https://github.com/degose' target="_blank") 고세민
            | &nbsp; 
            | /
            | &nbsp; 
            strong BackEndSchool
            | &nbsp; 
            a(href='https://github.com/Gyong1211' target="_blank") 김기홍
            |  · 
            a(href='https://github.com/ym4199' target="_blank") 김영민
            |  · 
            a(href='https://github.com/dahamlee' target="_blank") 이다함
          p.is-hidden-tablet.is-hidden-desktop
            a(href='http://jgthms.com') 패스트캠퍼스

</template>

<script>
export default {
  methods: {
    gotoHomeComponent(){
      this.$router.push('/MainPage');
    }
  } 
}
</script>


<style lang="sass" scoped>
@import "~bulma"
@import "~style"


.footer
  // position: absolute
  // bottom: 0
  // width: 100%
  background-color: hsla(0, 0%, 100%, .3)
  width: 100%
</style>
