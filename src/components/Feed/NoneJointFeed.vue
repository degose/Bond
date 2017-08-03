<template lang="pug">
  //- 가입하지 않은 그룹의 feed
  
  div.container
    .columns
      //- 그룹 정보 영역
      .column.is-3
        .card
          .card-image
            figure.image.is-desktop-16by9.is-mobile-2by1
              img(src='http://bulma.io/images/placeholders/640x320.png', alt='Image')
          .card-content
            .media
              .media-content
                p.title.is-4 그룹 이름
              icon
                span 멤버 5
            .content
              | Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              | Phasellus nec iaculis mauris. 
              //- a @bulmaio
              //- | .
              //- a #css
              //- a #responsive

            //- 가입하기 버튼
            .columns.is-mobile
              button.button.is-primary.btn-join-group.column 그룹 가입하기


      //- 글 영역
      .column.is-9
        div.feed-box
          .card
            .card-content
              .media
                .media-left
                  figure.image.is-64x64.img-user
                    img.user-img(src='http://bulma.io/images/placeholders/96x96.png', alt='Image')
                .media-content
                  p.title.is-4 John Smith
                  p.subtitle.is-6 11:09 PM - 1 Jan 2016
              .content
                | Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                | Phasellus nec iaculis mauris. 

                br

                //- 좋아요, 댓글 count
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

          
          .card
            .card-content
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

        div.feed-box
          .card
            .card-content
              .media
                .media-left
                  figure.image.is-64x64.img-user
                    img.user-img(src='http://bulma.io/images/placeholders/96x96.png', alt='Image')
                .media-content
                  p.title.is-4 John Smith
                  p.subtitle.is-6 11:09 PM - 1 Jan 2016
              .content
                | Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                | Phasellus nec iaculis mauris. 


                //- 좋아요, 댓글 count
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

          
          .card
            .card-content
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


<script>
export default {
  // name: 'app',
  // data () {
  //   return {
  //     switchState: true,
  //     checkboxState: true
  //   }
  // }
}
</script>

<style lang="sass">

.feed-box
  margin-bottom: 30px


</style>
