<template lang="pug">
  //- template#post
  div.container.page-wrapper
    .columns
      //- feed 영역
      .column.is-9
        //- 글쓰기 영역
        div.feed-box
          .card
            a(aria-label="open write modal" @click="openWriteModal")
              .card-content
                p 소식을 남겨주세요.
                | &nbsp; 
              footer.card-footer
                a(aria-label="open write modal" @click="openWriteModal").card-footer-item
                  span.icon
                    i.fa.fa-picture-o
                a(aria-label="open write modal" @click="openWriteModal").card-footer-item
                  span.icon
                    i.fa.fa-play-circle-o
                a(aria-label="open write modal" @click="openWriteModal").card-footer-item
                  span.icon
                    i.fa.fa-folder-open-o
                a(aria-label="open write modal" @click="openWriteModal").card-footer-item
                  span.icon
                    i.fa.fa-pencil
                  p.is-hidden-mobile 
                    | &nbsp; 
                    |글쓰기
            


        div.feed-box
          .card
            .card-content
              article.media
                .media-left
                  figure.image.is-64x64.img-user
                    img.user-img(src='http://bulma.io/images/placeholders/96x96.png', alt='Image')
                .media-content
                  //- p.title.is-4.user-name(v-for='data in datalist') 작성자
                  //- p.subtitle.is-6(v-for='data in datalist') 작성시간


                //- 드롭다운 버튼
                .dropdown.is-right.is-active
                  .dropdown-trigger
                    button(aria-haspopup='true', aria-controls='dropdown-menu3' @click="openDropdownPost")
                      span.icon
                        i.icon-more.ion-android-more-vertical(aria-hidden='true')

                  #dropdown-menu3.dropdown-menu(role='menu' v-show="dropdownpost")
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
                .get-http 
                  button(type='button', @click='fetchData') fetch
                .del-http 
                  button(type='button', @click='delData') delete
                  p.fetched-data
                    p.fetched-data-item(v-for='data in datalist') {{ data.text }}

                
              //- 이미지 - 1개일 때
              .content(v-if=' -1 > 0')
                figure.image
                  img(src='http://bulma.io/images/placeholders/480x320.png')


              //- 동영상
              .content(v-if=' -1 > 0')
                figure
                  video.responsive-svg(controls='', poster='http://bulma.io/images/placeholders/480x320.png', preload='none', width='640', height='360')
                    source(src='../../assets/KakaoTalk_2017-08-02-19-43-12_Video_36.mp4', type='video/webm; codecs="vp8, vorbis"')
                    track(src='', kind='captions', srclang='en', label='English captions', default='')




              //- 첨부파일
              .content(v-if=' -1 > 0')
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
              button(type="submit" @click="addLike").card-footer-item.btn-show-like
                span.icon-like
                  i.fa.fa-heart-o(v-show="!like")
                  i.fa.fa-heart(v-show="like")
                | &nbsp;  
                | 5
              button(@click="showComment").card-footer-item.btn-show-comment
                | 댓글
                | 5
                | &nbsp; 
                span.icon.is-small(v-show="!showcomment")
                  i.fa.fa-angle-down(aria-hidden='true')
                span.icon.is-small(v-show="showcomment")
                  i.fa.fa-angle-up(aria-hidden='true')
                  

          //- 댓글 작성 영역
          .card
            .card-content
              article.media
                .media-content.columns.is-mobile
                  .field.column.is-10.is-3-mobile
                    .control
                      textarea.textarea.textarea-comment(placeholder='댓글을 달아주세요.' v-model="write_comment")
                  .field.column.is-2.is-1-mobile
                    .control
                      button.btn-comment.btn-default.is-hidden-mobile(type="button" @click="writeCommentSubmit") 댓글 달기
                      button.btn-comment.btn-default.is-hidden-desktop.is-hidden-tablet(type="button" @click="writeCommentSubmit")
                        span.icon
                          i.fa.fa-pencil
              
              //- 댓글 리스트 영역
              article.media(v-show="showcomment")
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
                    button.btn-feed-dropdown(aria-haspopup='true', aria-controls='dropdown-menu3' @click="openDropdownComment")
                      span.icon.is-small
                        i.icon-more.ion-android-more-vertical(aria-hidden='true')
                  #dropdown-menu3.dropdown-menu(role='menu' v-show="dropdowncomment")
                    .dropdown-content
                      ul
                        li
                          a.dropdown-item(href='#')
                            | 댓글 수정
                        li
                          a.dropdown-item(href='#')
                            | 댓글 삭제
                        
    write-modal(close_message="close lightbox" ref='write_modal')
    leave-group-modal(close_message="close lightbox" ref='leave_group_modal')

        
</template>

<script>
import WriteModal from './WriteModal';
import LeaveGroupModal from './LeaveGroupModal';

export default {
  name: 'PostTemplate',
  mounted(){
    this.fetchData()
  },
  beforeUpdate(){
    // this.fetchData()
  },
  props: {
  },
  data() {
    return {
      write_comment: '',
      visible: false,
      dropdownpost: false,
      dropdowncomment: false,
      showcomment: false,
      like: false,
      write:'',
      datalist:[]
      // target: ''
    }
  },
  components: {
    WriteModal,
    LeaveGroupModal
  },
  methods: {
    openWriteModal(){
      this.$refs.write_modal.visible = true;
    },
    openLeaveGroupModal(){
      this.$refs.leave_group_modal.visible = true;
    },
    writeCommentSubmit(){
      // console.log(this.$http);
      // console.log(this.write_comment);
      this.$http.post('', this.write_comment).then(function (response) {
        console.log(response);
      }).catch(function (error) {
        console.error(error.message);
      });
    },
    openDropdownPost() {
      this.dropdownpost = !this.dropdownpost;
    },
    openDropdownComment() {
      this.dropdowncomment = !this.dropdowncomment;
    },
    showComment() {
      this.showcomment = !this.showcomment;
    },
    addLike() {
      
      this.like = !this.like;
    },
    fetchData(){
      // event.preventDefault()
      this.$http.get(this.$store.state.api_write, this.write)
                .then(response=> {
                  this.datalist = response.data
                })
                .then(write => {const datalist = Object.values(write);
                this.datalist = datalist;
                }
                )
                // .then(data => console.log(data))
                .catch(error => console.log(error.message));
    },
    delData(){
      this.$http.delete(this.$store.state.api_write, this.write)
      .then(response => console.log(response)
      //  { return response.json()}
       ).catch(error => console.log(error.message));
    }
  }
}
</script>


<style lang="sass" scoped>
@import "~bulma"
@import "~style"



body
  background: #eee

.page-wrapper
  min-height: 87vh


.icon-more
  font-size: 1.5rem
  color: $grey
  &:hover
    color: $bond
  &:focus
    color: $bond
  &:active
    color: $bond




.navbar-burger.burger
  padding-top: 8px
  padding-left: 10px

.dropdownhr
  margin: 5px

.btn-show-comment,
.btn-show-like
  font-size: 1rem
  color: $primary

.fa-heart,
.fa-heart-o
  font-size: 1rem
  margin-top: 1px



</style>
