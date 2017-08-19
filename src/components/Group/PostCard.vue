<template lang="pug">

  div
    div.card-wrapper(v-for="post in post_data")
      .card
        .card-content
          article.media
            .media-left
              figure.image.is-64x64.img-user
                img.user-img(:src='post.author.profile_img', alt='Image')
            .media-content
              p.title.is-4.user-name {{ post.author.nickname }}
              p.subtitle.is-6 {{ post.created_date }}


            //- 드롭다운 버튼
            .dropdown.is-right.is-active
              .dropdown-trigger
                button(aria-haspopup='true', aria-controls='dropdown-menu3' @click="openDropdownPost(post.pk, $event)")
                  span.icon
                    i.icon-more.ion-android-more-vertical(aria-hidden='true')

              //- #dropdown-menu3.dropdown-menu(role='menu' :class="post.pk")
              #dropdown-menu3.dropdown-menu(role='menu' v-show="dropdownpost" :class='post.pk')
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
            | {{ post.content }}

            
          //- 이미지 - 1개일 때
          .content(v-if="post.image")
            figure.image
              img(:src='post.image')


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
          button(type="submit" @click="addLike(post.pk)").card-footer-item.btn-show-like
            span.icon-like
              i.fa.fa-heart-o(v-show="!like")
              i.fa.fa-heart(v-show="like")
            | &nbsp;  
            | {{ post.like_count }}
          button(@click="showComment").card-footer-item.btn-show-comment
            | 댓글
            | {{ post.comment_count }}
            | &nbsp; 
            span.icon.is-small(v-show="!showcomment")
              i.fa.fa-angle-down(aria-hidden='true')
            span.icon.is-small(v-show="showcomment")
              i.fa.fa-angle-up(aria-hidden='true')
              

      //- 댓글 영역
      .card
        .card-content
          //- 댓글 작성 영역
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
          article.media(v-show="showcomment" v-for="comment in comment_data")
            figure.media-left
              p.image.is-48x48
                img.user-img(:src='comment.author.profile_img')
            .media-content
              .content
                p
                  strong {{ comment.author.nickname }}
                  br
                  | {{ comment.content }}
                  br
                  small
                    | {{ comment.created_date }}
            
            //- 드롭다운 버튼
            .dropdown.is-right.is-active
              .dropdown-trigger
                button.btn-feed-dropdown(aria-haspopup='true', aria-controls='dropdown-menu3' @click="openDropdownComment(comment.pk)")
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
                    

        
</template>

<script>

export default {
  created(){
    this.fetchPostData();
    this.fetchCommentData();
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
      like_or_not: '',
      write: {
        // 텍스트 내용
        content:'',
        // 그룹 pk값..임의로 정해둠
        group: 29
      },
      group_data:[],
      post_data:[],
      comment_data:[],
      // target: ''
      pk:'',
    }
  },
  components: {
  
  },
  methods: {
    addPostData(o){
      console.log(this.post_data);
      this.post_data.unshift(o);
      console.log(this.post_data);
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
    openDropdownPost(pk, e, i) {
      console.log('postpk',pk);
      console.log('e.target',e.target);
      console.log('index',i);
      this.dropdownpost = !this.dropdownpost;
    },
    openDropdownComment(pk) {
      this.dropdowncomment = !this.dropdowncomment;
    },
    showComment(pk) {
      this.showcomment = !this.showcomment;
    },
    addLike(pk) {
      let user_token = window.localStorage.getItem('token');
      this.$http.post('http://bond.ap-northeast-2.elasticbeanstalk.com/api/post/' + `${pk}`+ '/post-like-toggle', this.like_or_not,
       { headers: {'Authorization' : `Token ${user_token}`}})
                .then(response=> {
                  // this.like_or_not = response.like_or_not;
                  // console.log('this.group_datalist:',this.group_data);
                  // this.like_or_not = response.data;
                  console.log('like.response:',response);
                })
                .catch(error => console.log(error.response));
      this.like = !this.like;
    },
    fetchPostData(){
      let user_token = window.localStorage.getItem('token');
      let pk = window.localStorage.getItem('this_group');
      this.$http.get('http://bond.ap-northeast-2.elasticbeanstalk.com/api/post/?group=' + `${pk}`,
       { headers: {'Authorization' : `Token ${user_token}`} })
                .then(response=> {
                  this.post_data = response.data.results;
                  let data = response.data.results;
                  // data.forEach(item => {
                  //   this.post_data.push(item);
                  // });
                  // console.log('this.post_data:',this.post_data);
                })
                // .then(write => {const datalist = Object.values(write);
                // this.datalist = datalist;
                // })
                // 
                // .then(data => console.log(data))
                .catch(error => console.log(error.response));
    },
    fetchCommentData(ppk){
      let user_token = window.localStorage.getItem('token');
      let pk = window.localStorage.getItem('this_group');
      // let ppk = this.post.pk;
      // this.$http.get('http://bond.ap-northeast-2.elasticbeanstalk.com/api/group=' + `${pk}` + '/post=' + `${ppk}`,
      //  { headers: {'Authorization' : `Token ${user_token}`} })
      //           .then(response=> {
      //             this.comment_data = response.data.results;
      //             console.log('this.comment_data:',this.comment_data);
      //           })
      //           // .then(write => {const datalist = Object.values(write);
      //           // this.datalist = datalist;
      //           // })
      //           // 
      //           // .then(data => console.log(data))
      //           .catch(error => console.log(error.response));
    },
    delData(){
      this.$http.delete(this.$store.state.api_write, this.write)
      .then(response => console.log(response)
      //  { return response.json()}
       ).catch(error => console.log(error.message));
    },
  }
}
</script>


<style lang="sass" scoped>
@import "~bulma"
@import "~style"
.user-img
  background: #eee

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
.card-wrapper
  margin-bottom: 20px



</style>
