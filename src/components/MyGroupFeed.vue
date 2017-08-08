<template lang="pug">
      div
        //- 가입한 그룹의 feed
        .columns
          //- 그룹 정보 영역
          .column.is-3
            .card-content
              //- 가입하기 버튼
              .columns.is-mobile
                button.column.btn-default.btn-fill 그룹 만들기
            hr
            .card-content
              .columns.is-mobile
                h3.title.is-5 내 그룹
                  |  · 
                  | 5
            .card-content
              a.columns.is-mobile.group-small-list-group
                article.media.group-small-list
                  figure.media-left
                    p.image.is-32x32
                      img.group-img-small(src='http://bulma.io/images/placeholders/128x128.png')
                p 안녕
              a.columns.is-mobile
                article.media.group-small-list
                  figure.media-left
                    p.image.is-32x32
                      img.group-img-small(src='http://bulma.io/images/placeholders/128x128.png')
                p 안녕


          
          
          //- feed 영역
          .column.is-9

            .feed-box
              .card
                header.card-header
                  a.card-header-title
                    | &nbsp;  
                    | &nbsp;  
                    span.icon
                      img(src="../assets/bond-img.svg")
                    | &nbsp;  
                    | 해당 그룹 이름

                .card-content
                  article.media
                    .media-left
                      figure.image.is-64x64.img-user
                        img.user-img(src='http://bulma.io/images/placeholders/96x96.png', alt='Image')
                    .media-content
                      p.title.is-4.user-name 만순이
                      p.subtitle.is-6 11:09 PM - 1 Jan 2016


                    //- 드롭다운 버튼
                    .dropdown.is-right
                      .dropdown-trigger
                        button(aria-haspopup='true', aria-controls='dropdown-menu3')
                          span.icon
                            i.icon-more.ion-android-more-vertical(aria-hidden='true')
                      #dropdown-menu3.dropdown-menu(role='menu')
                        .dropdown-content
                          ul
                            li
                              a.dropdown-item(href='#')
                                | 글 수정
                            li
                              a.dropdown-item(href='#')
                                | 글 삭제
                          
                  .content
                    | Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    | Phasellus nec iaculis mauris. 
                    | Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    | Phasellus nec iaculis mauris. 
                    | Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    | Phasellus nec iaculis mauris. 

                
                //- 좋아요, 댓글 개수
                footer.card-footer
                  a(href='#').card-footer-item
                    span
                      i.fa.fa-heart
                        | &nbsp;  
                        | 5
                  a(href='#').card-footer-item
                    | 댓글
                    | 5
                    | &nbsp; 
                    span.icon.is-small
                      i.fa.fa-angle-down(aria-hidden='true')
                      

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
                            span.icon
                              //- i.ion-chatbox-working
                              i.fa.fa-pencil
                  
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
                    
                    //- 드롭다운 버튼
                    .dropdown.is-right.is-active
                      .dropdown-trigger
                        button.btn-feed-dropdown(aria-haspopup='true', aria-controls='dropdown-menu3')
                          span.icon.is-small
                            i.icon-more.ion-android-more-vertical(aria-hidden='true')
                      #dropdown-menu3.dropdown-menu(role='menu')
                        .dropdown-content
                          ul
                            li
                              a.dropdown-item(href='#')
                                | 댓글 수정
                            li
                              a.dropdown-item(href='#')
                                | 댓글 삭제

            //- 컨텐츠가 들어간 글
            div.feed-box
              .card
                header.card-header
                  a.card-header-title
                    | &nbsp;  
                    | &nbsp;  
                    span.icon
                      img(src="../assets/bond-img.svg")
                    | &nbsp;  
                    | 해당 그룹 이름
                .card-content
                  article.media
                    .media-left
                      figure.image.is-64x64.img-user
                        img.user-img(src='http://bulma.io/images/placeholders/96x96.png', alt='Image')
                    .media-content
                      p.title.is-4.user-name John Smith
                      p.subtitle.is-6 11:09 PM - 1 Jan 2016


                    //- 드롭다운 버튼
                    .dropdown.is-right.is-active
                      .dropdown-trigger
                        button(aria-haspopup='true', aria-controls='dropdown-menu3')
                          span.icon
                            i.icon-more.ion-android-more-vertical(aria-hidden='true')
                      #dropdown-menu3.dropdown-menu(role='menu')
                        .dropdown-content
                          ul
                            li
                              a.dropdown-item(href='#')
                                | 글 수정
                            li
                              a.dropdown-item(href='#')
                                | 글 삭제

                  //- 글 (최상위)
                  .content
                    | Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    | Phasellus nec iaculis mauris. 
                    | Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    | Phasellus nec iaculis mauris. 
                    | Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    | Phasellus nec iaculis mauris. 

                    
                  //- 이미지 - 1개일 때
                  .content
                    figure.image
                      img(src='http://bulma.io/images/placeholders/480x320.png')


                  //- 이미지 - 여러 개일 때
                  //- .content
                  //-   div.callage
                  //-     ul
                  //-       li(data-mediaindex="0")
                  //-         figure.image.is-128x128
                  //-           img(src='http://bulma.io/images/placeholders/128x128.png')
                  //-       li(data-mediaindex="1")
                  //-         figure.image.is-128x128
                  //-           img(src='http://bulma.io/images/placeholders/128x128.png')


                  //- 동영상
                  .content
                    figure
                      video.responsive-svg(controls='', poster='http://bulma.io/images/placeholders/480x320.png', preload='none', width='640', height='360')
                        source(src='', type='video/webm; codecs="vp8, vorbis"')
                        track(src='', kind='captions', srclang='en', label='English captions', default='')
                  //- .content
                  //-   figure
                  //-     video.responsive-svg(controls='', poster='media/poster.jpg', preload='none', width='640', height='360')
                  //-       source(src='../../assets/KakaoTalk_2017-08-02-19-43-12_Video_36.mp4', type='video/webm; codecs="vp8, vorbis"')
                  //-       track(src='media/video-subtitles-en.vtt', kind='captions', srclang='en', label='English captions', default='')




                  //- 첨부파일
                  .content
                    .file-box
                      a(href='#')
                        .columns.is-mobile
                          .column.is-1
                            span
                              i.fa.fa-folder-open-o
                          .column 
                            span
                              p README.md
                          .column.is-1
                            span
                              i.fa.fa-arrow-down
                
                //- 좋아요, 댓글 개수
                footer.card-footer
                  a(href='#').card-footer-item
                    span
                      i.fa.fa-heart-o
                        | &nbsp;  
                        | 5
                  a(href='#').card-footer-item
                    | 댓글
                    | 5
                    | &nbsp; 
                    span.icon.is-small
                      i.fa.fa-angle-down(aria-hidden='true')
                      

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
                            span.icon
                              i.fa.fa-pencil
                  
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
                    
                    //- 드롭다운 버튼
                    .dropdown.is-right.is-active
                      .dropdown-trigger
                        button.btn-feed-dropdown(aria-haspopup='true', aria-controls='dropdown-menu3')
                          span.icon.is-small
                            i.icon-more.ion-android-more-vertical(aria-hidden='true')
                      #dropdown-menu3.dropdown-menu(role='menu')
                        .dropdown-content
                          ul
                            li
                              a.dropdown-item(href='#')
                                | 댓글 수정
                            li
                              a.dropdown-item(href='#')
                                | 댓글 삭제
                            
        write-modal(close_message="close lightbox" ref='write_modal')

        
</template>

<script>
import WriteModal from './WriteModal';
export default {
  a: function name(params) {
    console.log('ㅇㅋ')
    
  },
  components: {
    WriteModal
  },
  methods: {
    openWriteModal(){
      this.$refs.write_modal.visible = true;
    }
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



.dropdownhr
  margin: 5px

.group-img-small
  border-radius: 10%

.group-small-list-group
  line-height: 38px
.group-small-list
  margin-bottom: 8px



</style>
