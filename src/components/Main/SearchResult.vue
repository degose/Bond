<template lang="pug">
div
  main-header
  .container
    .columns
      .column
        .box
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
          .level        
          .level        
          .level        
          nav.pagination.is-centered.is-small
            a.pagination-previous Previous
            a.pagination-next Next page
            ul.pagination-list
              li
                a.pagination-link 1
              li
                span.pagination-ellipsis …
              li
                a.pagination-link 45
              li
                a.pagination-link.is-current 46
              li
                a.pagination-link 47
              li
                span.pagination-ellipsis …
              li
                a.pagination-link 86
        
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

    .columns
      .column
        nav.pagination.is-centered
          a.pagination-previous Previous
          a.pagination-next Next page
          ul.pagination-list
            li
              a.pagination-link 1
            li
              span.pagination-ellipsis …
            li
              a.pagination-link 45
            li
              a.pagination-link.is-current 46
            li
              a.pagination-link 47
            li
              span.pagination-ellipsis …
            li
              a.pagination-link 86
  main-footer


</template>

<script>
import MainHeader from '../Header-Footer/MainHeader';
import MainFooter from '../Header-Footer/MainFooter';
export default {
  name: 'app',
  components: {
    MainHeader,
    MainFooter
  },
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
