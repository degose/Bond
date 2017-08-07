<template lang="pug">
  #app
    .container
      .columns
        .column
          .a(href="#").box
            article.media
              .media-left
                figure.image.is-64x64
                  img(src='http://bulma.io/images/placeholders/128x128.png', alt='Image')
              .media-content
                .content
                  p
                    strong 글 제목
                    br
                    |           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                  div
                    span.icon.is-small.user
                      i.fa.fa-user(aria-hidden='true')
                    small    닉네임
                    span.icon.is-small.leader
                      i.fa.fa-heart(aria-hidden='true')
                    small    좋아요 수
          
      .columns
        .column.is-10.is-offset-1
          a(href="#").box
            article.media
              .media-left
                figure.image.is-64x64
                  img(src='http://bulma.io/images/placeholders/128x128.png', alt='Image')
              .media-content
                .content
                  p
                    strong 그룹 이름
                    br
                    |           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                  div
                    span.icon.is-small.member
                      i.fa.fa-users(aria-hidden='true')
                    small    멤버 수
                    span.icon.is-small.leader
                      i.fa.fa-user-circle-o(aria-hidden='true')
                    small    대장
          a(href="#").box
            article.media
              .media-left
                figure.image.is-64x64
                  img(src='http://bulma.io/images/placeholders/128x128.png', alt='Image')
              .media-content
                .content
                  p
                    strong 그룹 이름
                    br
                    |           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                  div
                    span.icon.is-small.member
                      i.fa.fa-users(aria-hidden='true')
                    small    멤버 수
                    span.icon.is-small.leader
                      i.fa.fa-user-circle-o(aria-hidden='true')
                    small    대장


</template>

<script>

export default {
  name: 'app',

}
</script>

<style lang="sass" scoped>
@import "~bulma"
@import "~style"
// html
//   font-size: 100%
//   background: #fff
// body
//   margin: 0
.leader
  margin-left: 8px
</style>
