<template lang="pug">
  //- 가입하지 않은 그룹의 feed
  div.all-wrapper(v-cloak)
    main-header
    .container
      .columns
        //- 그룹 정보 영역
        .column.is-3.group-info
          .card
            .card-image
              figure.image.group_profile-wrapper.is-desktop-16by9.is-mobile-1by1.is-tablet-2by1
                  img.group_profile_img(:src='group_data.profile_img', alt='Image')
            .card-content
              article.media
                .media-content
                  p.title.is-4 {{ group_data.name }}
                  div
                    span 멤버 {{ group_data.num_of_members }}
              .content {{ group_data.description }}

              //- 가입하기 버튼
              .columns.is-mobile
                button.column.btn-default.btn-fill(@click="jointgroup") 그룹 가입하기


        //- feed 영역
        .column.is-9
          div.feed-box(v-show="post_data.length <= 0")
            .card
              .card-content
                .content
                  | 그룹에 재미있는 이야기를 써보세요.

          div.feed-box
            div.card-wrapper(@add-post-data="addPostData" v-for="(post, i) in post_data")
              .card
                .card-content
                  article.media
                    .media-left
                      figure.image.is-64x64.img-user
                        img.user-img(:src='post.author.profile_img', alt='Image')
                    .media-content
                      p.title.is-4.user-name {{ post.author.nickname }}
                      p.subtitle.is-6 {{ post.created_date }}
                          
                  .content
                    | {{ post.content }}

                  .content(v-if="post.image")
                    figure.image
                      img(:src='post.image')

                
                //- 좋아요, 댓글 개수
                //- footer.card-footer
                //-   button(type="submit" @click="addLike(post.pk)").card-footer-item.btn-show-like
                //-     span.icon-like
                //-       i.fa.fa-heart-o(v-show="!like")
                //-       i.fa.fa-heart(v-show="like")
                //-     | &nbsp;  
                //-     | {{ post.like_count }}
                //-   button(@click="showComment($event)").card-footer-item.btn-show-comment
                //-     | 댓글
                //-     | {{ post.comment_count }}
                //-     | &nbsp; 
                //-     span.icon.is-small(v-show="!showcomment")
                //-       i.fa.fa-angle-down(aria-hidden='true')
                //-     span.icon.is-small(v-show="showcomment")
                //-       i.fa.fa-angle-up(aria-hidden='true')
                      

              //- 댓글 영역
              //- .card(v-if="comment")
              //-   .card-content
              //-     //- 댓글 리스트 영역
              //-     article.media(v-show="showcomment" v-for="comment in comment_data" ref="togglecomment")
              //-       figure.media-left
              //-         p.image.is-48x48
              //-           img.user-img(:src='comment.author.profile_img')
              //-       .media-content
              //-         .content
              //-           p
              //-             strong {{ comment.author.nickname }}
              //-             br
              //-             | {{ comment.content }}
              //-             br
              //-             small
              //-               | {{ comment.created_date }}
    main-footer
                


                
</template>


<script>
import MainHeader from '../Header-Footer/MainHeader';
import MainFooter from '../Header-Footer/MainFooter';
export default {
  components: {
    MainHeader,
    MainFooter
  },
  created(){
    this.fetchGroupData();
    this.fetchPostData();
    this.fetchCommentData();
    // bus.$on('add-post-data')
    // this.deletePost();
  },
  watch: {
    deletePost(){}
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
      group_data:[],
      post_data:[],
      comment_data:[],
      pk:'',
    }
  },
  methods: {
    jointgroup(){
        let pk = window.localStorage.getItem('this_group')
        let user_token = window.localStorage.getItem('token')
        this.$http.post('https://api.thekym.com/member/membership/', {group: pk},
                  { headers: {'Authorization' : `Token ${user_token}`}})
                  .then(response => {
                    console.log(response)
                    if(response.status === 201){
                      this.$router.push({path: '/JointGroup/'});
                      // this.$router.push({path: '/JointGroup/', query: {group: response.data.group}});
                    }
                  })
                  .catch(error =>{
                    if(error.response.status === 400)
                      alert(error.response.data.group[0])
                  })
    },
    addPostData(o){
      console.log(this.post_data);
      this.post_data.unshift(o);
      console.log(this.post_data);
    },
    fetchGroupData(){
      let user_token = window.localStorage.getItem('token');
      let pk = window.localStorage.getItem('this_group');
      this.$http.get('https://api.thekym.com/group/' + `${pk}`+ '/',
       { headers: {'Authorization' : `Token ${user_token}`}})
                .then(response=> {
                  this.group_data = response.data;
                  // console.log('this.group_datalist:',this.group_data);
                  // console.log('response:',response);
                })
                .catch(error => console.log(error.response));
    },
    fetchPostData(){
      let user_token = window.localStorage.getItem('token');
      let pk = window.localStorage.getItem('this_group');
      this.$http.get('https://api.thekym.com/post/?group=' + `${pk}`,
       { headers: {'Authorization' : `Token ${user_token}`} })
                .then(response=> {
                  // this.post_data = response.data.results;
                  let data = response.data.results;
                  data.forEach(item => {
                    this.post_data.push(item);
                  });
                  console.log(data);
                  // console.log('this.post_data:',this.post_data);
                })
                // .then(write => {const datalist = Object.values(write);
                // this.datalist = datalist;
                // })
                // 
                // .then(data => console.log(data))
                .catch(error => console.log(error.response));
    },
    fetchCommentData(post_pk){
      // let user_token = window.localStorage.getItem('token');
      // let pk = window.localStorage.getItem('this_group');
      // // let ppk = this.post.pk;
      // this.$http.get('https://api.thekym.com/group=' + `${pk}` + '/post=' + `${ppk}`,
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
    showComment(e) {
      let el = this.$refs.togglecomment
      let target = e.target
      // console.log(el);
      // console.log(target);
      // if(el !== target && !el.includes(target)){
      //   // this.visible = false;
      // this.showcomment = !this.showcomment;
      // }
    },
    addLike(pk) {
      let user_token = window.localStorage.getItem('token');
      console.log('pk:',pk);
      console.log('token:',user_token);
      // /api/post/<pk>/post-like-toggle
      this.$http.post('https://api.thekym.com/post/' + `${pk}`+ '/post-like-toggle/',
       { headers: {'Authorization' : `Token ${user_token}`}})
                .then(response=> {
                  // this.like_or_not = response.like_or_not;
                  // console.log('this.group_datalist:',this.group_data);
                  // this.like_or_not = response.data;
                  console.log('like.response:',response);
                })
                .catch(error => console.log(error.response));
      // this.like = !this.like;
    },

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
.user-img
  background: #eee

body
  background: #eee

.page-wrapper
  // min-height: 87vh

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

.all-wrapper
  background: #eee
  height: 100vh
.group-info
  // position: fixed
</style>