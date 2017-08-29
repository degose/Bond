<template lang="pug">
              div()
                .card
                  .card-content
                    article.media
                      .media-left
                        figure.image.is-64x64.is-1by1.img-user
                          img.img-user-profile(:src='post.author.profile_img', alt='Image')
                      .media-content
                        p.title.is-4.user-name {{ post.author.nickname }}
                        p.subtitle.is-6 {{ calcDate (post.created_date) }}
                      //- post삭제
                      button.delete(@click="deletePost(post.pk)")




                    //- 글 (최상위)
                    .content
                      p(style='white-space: pre-line') 
                        | {{ post.content }}

                      
                    //- 이미지
                    .content(v-if="post.image")
                      figure.image
                        img(:src='post.image')


                  
                  
                  //- 좋아요, 댓글 개수
                  footer.card-footer
                    button(type="submit" @click="addLike(post.pk)").card-footer-item.btn-show-like
                      span.icon-like
                        i.fa.fa-heart-o(v-if="!post.is_like")
                        i.fa.fa-heart(v-else)
                      | &nbsp;  
                      | {{ post.like_count }}
                    button(@click="fetchCommentData(post.pk)" v-if="comment_count <= 0").card-footer-item.btn-show-comment
                      | 댓글
                      | {{ post.comment_count }}
                      | &nbsp; 
                      span.icon.is-small(v-show="!showcomment")
                        i.fa.fa-angle-down(aria-hidden='true')
                      span.icon.is-small(v-show="showcomment")
                        i.fa.fa-angle-up(aria-hidden='true')
                    button(@click="fetchCommentData(post.pk)" v-else).card-footer-item.btn-show-comment
                      | 댓글
                      | {{ this.comment_count }}
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
                            textarea.textarea.textarea-comment(placeholder='댓글을 달아주세요.' v-model="write_comment" ref="comment_area")
                        .field.column.is-2.is-1-mobile
                          .control
                            button.btn-comment.btn-default.is-hidden-mobile(type="button" @click="writeCommentSubmit(post.pk)" ) 댓글 달기
                            button.btn-comment.btn-default.is-hidden-desktop.is-hidden-tablet(type="button" @click="writeCommentSubmit(post.pk)")
                              span.icon
                                i.fa.fa-pencil
                    //- 댓글 리스트 영역
                    article.media(v-for="comment in comment_data" v-show="showcomment")
                      figure.media-left
                        p.image.is-48x48.img-user-48.is-1by1
                          img.img-user-profile(:src='comment.author.profile_img')
                      .media-content
                        .content
                          p
                            strong {{ comment.author.nickname }}
                            br
                            p(style='white-space: pre-line')
                              | {{ comment.content }}
                            br
                            small
                              | {{  calcDate (comment.created_date) }}
                      button.delete(@click="deleteComment(comment.pk, post.pk)")


</template>

<script>
export default {
  created(){
  },
  props:['post'],
  data() {
    return {
      write_comment: '',
      visible: false,
      showcomment: false,
      author: {},
      post_data:[],
      comment_count: null,
      comment_data:[],
      page_num: '',
      pagination:{
        next: '', 
        prev: '',
        all: ''
      },
    }
  },
  components: {
  },
  methods: {
    deletePost(pk){
      let user_token = window.localStorage.getItem('token');
      let user_nickname = window.localStorage.getItem('user_nickname');
      let confirmPostDelete = confirm(`${user_nickname}` + '님, 정말 이 글을 삭제하시겠습니까?');
      if ( confirmPostDelete === true ){
        this.$http.delete('https://api.thekym.com/post/' + `${pk}`+ '/',
          { headers: {'Authorization' : `Token ${user_token}`}})
          .then(response=> {
            let group_pk = window.localStorage.getItem('this_group');
            this.$http.get('https://api.thekym.com/post/?group=' + `${group_pk}`,
              { headers: {'Authorization' : `Token ${user_token}`} })
              .then(response=> {
                let data = response.data.results;
                let post_data = []
                data.forEach(item => {
                  post_data.push(item);
                });
                this.$parent.post_data = post_data;
              })
          })
          .catch(error => {
            if (error.response.status === 403){
              alert('작성자만 요청할 수 있는 작업입니다.');
            }
            console.log(error.response);
          });
      }
    },
    writeCommentSubmit(pk){
      let user_token = window.localStorage.getItem('token');
      let user_img = window.localStorage.getItem('user_img');
      let user_nickname = window.localStorage.getItem('user_nickname');
      let comment_submit_data = {
        post: pk,
        content: this.write_comment
      }
      this.$http.post('https://api.thekym.com/post/comment/', 
        comment_submit_data,
        { headers: {'Authorization' : `Token ${user_token}`,}})
        .then(response => {
          this.fetchCommentData(pk);
          this.showcomment = !this.showcomment;
        }).catch(function (error) {
        console.error(error.message);
      });
      this.write_comment = '';
    },
    fetchCommentData(post_pk){
      let user_token = window.localStorage.getItem('token');
      let pk = window.localStorage.getItem('this_group');
      this.$http.get('https://api.thekym.com/post/comment/?post=' + `${post_pk}`,
       { headers: {'Authorization' : `Token ${user_token}`} })
                .then(response=> {
                  this.comment_count = response.data.count;
                  this.comment_data = response.data.results;
                  this.showcomment = !this.showcomment;
                })
                .catch(error => console.log(error.response));
    },
    addLike(pk) {
      let user_token = window.localStorage.getItem('token');
      this.$http.post('https://api.thekym.com/post/' + `${pk}`+ '/post-like-toggle/', true,
       { headers: {'Authorization' : `Token ${user_token}`}})
          .then(response=> {
            let data = response.data;
            let user_token = window.localStorage.getItem('token');
            let group_pk = window.localStorage.getItem('this_group');
            this.$http.get('https://api.thekym.com/post/?group=' + `${group_pk}`,
              { headers: {'Authorization' : `Token ${user_token}`} })
              .then(response=> {
                let data = response.data.results;
                let post_data = []
                data.forEach(item => {
                  post_data.push(item);
                });
                this.$parent.post_data = post_data;
              })
          })
          .catch(error => console.log(error.response));
    },
    deleteComment(pk,ppk){
      let post = {
        post: ppk
      }
      let user_token = window.localStorage.getItem('token');
      let user_nickname = window.localStorage.getItem('user_nickname');
      let confirmCommentDelete = confirm(`${user_nickname}` + '님, 정말 이 댓글을 삭제하시겠습니까?');
      if ( confirmCommentDelete === true ){
        this.$http.delete('https://api.thekym.com/post/comment/' + `${pk}` + '/',
          { headers: {'Authorization' : `Token ${user_token}`}})
          .then(response => {
            this.$http.get('https://api.thekym.com/post/comment/?post=' + `${ppk}`,
            { headers: {'Authorization' : `Token ${user_token}`}})
            .then(response=> {
              this.comment_count = response.data.count;
              this.comment_data = response.data.results;
            })
            })
          .catch(error => {
            if (error.response.status === 403){
              alert('작성자만 요청할 수 있는 작업입니다.');
            }
            console.log('delete-error:',error.response);
          });
      }
    },
    calcDate(content){
      return content.slice(0,19).split("T").toString().replace(',', ' ').slice(0,-3)
    }
  }
}
</script>


<style lang="sass" scoped>
@import "~bulma"
@import "~style"

.group_profile-wrapper
  width: auto
  height: auto
  min-height: 100px
  max-height: 135px
  overflow: hidden

.group_profile_img
  background: url('http://bulma.io/images/placeholders/1280x960.png')
  // overflow: hidden

.img-user
  background: #eee
  width: 64px
  height: 64px
  overflow: hidden
  border-radius: 50%

.img-user-48
  background: #eee
  width: 48px
  height: 48px
  overflow: hidden
  border-radius: 50%

.img-user-profile
  height: 100%
  width: 100%

.user-img
  background: #eee

body
  background: #eee

.page-wrapper
  min-height: 87vh

.card-wrapper
  margin-bottom: 20px


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
.card-footer-item
  display: inline-block


</style>
