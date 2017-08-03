<template lang="pug">
  //- 가입된 그룹의 feed
  
  div.container
    .columns
      //- 그룹 정보 영역
      .column.is-3
        .card
          .card-image
            figure.image.is-16by9
              img(src='http://bulma.io/images/placeholders/1280x960.png', alt='Image')
          .card-content
            .media
              .media-content
                p.title.is-4 그룹 이름
                span 멤버 5
            .content
              | Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              | Phasellus nec iaculis mauris. 

            //- 가입하기 버튼
            .columns.is-mobile
              button.column.btn-default.btn-fill 그룹 가입하기


      //- 글 영역
      .column.is-9
        div
          .card
            .card-content
              .media
                .media-left
                  figure.image.is-64x64.img-user
                    img.user-img(src='http://bulma.io/images/placeholders/96x96.png', alt='Image')
                .media-content
                  p.title.is-4 John Smith
                  p.subtitle.is-6 11:09 PM - 1 Jan 2016


                .dropdown.is-right.is-active
                  .dropdown-trigger
                    button.button.is-info(aria-haspopup='true', aria-controls='dropdown-menu6s')
                      span.icon
                        i.fa.fa-ellipsis-v(aria-hidden='true')
                  #dropdown-menu6.dropdown-menu(role='menu')
                    .dropdown-content
                      .dropdown-item
                        ul
                          li
                            a 
                              | 글 수정
                          li
                            a 
                              | 글 삭제


              .content
                | Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                | Phasellus nec iaculis mauris. 
                | Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                | Phasellus nec iaculis mauris. 
                | Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                | Phasellus nec iaculis mauris. 

                //- 좋아요, 댓글 개수
                .level.is-mobile 
                  .level-left
                    a.level-item
                      span.icon.is-small
                        i.fa.fa-comment
                      |  · 
                      span 5
                    a.level-item
                      span.icon.is-small
                        i.fa.fa-heart
                      |  · 
                      span 5

          //- 댓글 작성 영역
          .card
            .card-content
              article.media
                .media-content.columns.is-mobile
                  .field.column.is-10.is-3-mobile
                    p.control
                      textarea.textarea.textarea-comment(placeholder='댓글을 달아주세요.')
                  .field.column.is-2.is-1-mobile
                    p.control
                      button.btn-comment.btn-default.is-hidden-mobile 댓글 달기
                      button.btn-comment.btn-default.is-hidden-desktop.is-hidden-tablet
                        span.icon.is-small
                          i.fa.fa-comment
              
              //- 댓글 리스트 영역
              article.media
                figure.media-left
                  p.image.is-48x48
                    img.user-img(src='http://bulma.io/images/placeholders/128x128.png')
                .media-content
                  .content
                    p
                      strong Barbara Middleton
                      br
                      |         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta eros lacus, nec ultricies elit blandit non. Suspendisse pellentesque mauris sit amet dolor blandit rutrum. Nunc in tempus turpis.
                      br
                      small
                        | 3 hrs

</template>

<style lang="sass">
.textarea-comment
  min-height: 50px
.btn-comment
  height: 50px
  
</style>
