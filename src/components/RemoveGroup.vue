<template lang="pug">
      //- 가입한 그룹의 feed
      #app.container
        .columns
          .column
            .tabs.is-centered
              ul
                li.is-active
                  a 전체글
                li
                  a 멤버
        .columns
          //- 그룹 정보 영역
          .column.is-3
            .card
              .card-image
                figure.image.is-16by9
                  img(src='http://bulma.io/images/placeholders/1280x960.png', alt='Image')
              .card-content
                article.media
                  .media-content
                    p.title.is-4 그룹 이름
                    div
                      span 멤버 5
                      |  · 
                      a 
                        span.icon.is-small
                          i.fa.fa-cog(aria-hidden='true')
                        | 그룹 설정
                .content
                  | Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  | Phasellus nec iaculis mauris. 
          .column.is-6
            .field.box 
                strong 그룹 설정
                hr
                .control
                    label.checkbox.group-remove
                        input(type='checkbox')
                        |       그룹 삭제하기
                    br
                    label.checkbox.group-leave
                        input(type='checkbox')
                        |       그룹 탈퇴
            .field.is-grouped.column.is-offset-7
                .control
                    button.button.is-primary 제출하기
                .control
                    button.button.is-link 취소하기

</template>

<script>
export default {
    data(){

    }
}
</script>


<style lang="sass" scoped>
@import "~bulma"
@import "~style"

.icon-more
  font-size: 1.5rem
  color: $grey
  &:hover
    color: $bond
  &:focus
    color: $bond
  &:active
    color: $bond

ul li
  list-style: none
  margin: 0
  padding: 0

hr
  border: 1px solid #eee
  margin: 0

.group-remove
  margin-top: 10px
.group-leave
  margin-top: 10px

</style>