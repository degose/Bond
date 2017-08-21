<template lang="pug">


        
</template>

<script>
// import {bus} from './bus'
import WriteModal from './WriteModal';
import LeaveGroupModal from './LeaveGroupModal';
import PostTemplate from './PostTemplate';
import DeletePostModal from './DeletePostModal';

export default {
  created(){
    this.fetchGroupData();
    this.fetchPostData();
    // this.fetchCommentData();
    // bus.$on('add-post-data')
    // this.deletePost();
  },
  watch: {
    // deletePost(){}
  },
  data() {
    return {
      write_comment: '',
      visible: false,
      dropdownpost: false,
      dropdowncomment: false,
      showcomment: false,
      // like: false,
      // like_or_not: '',
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
    WriteModal,
    LeaveGroupModal,
    PostTemplate,
    DeletePostModal
  },
  methods: {
    addPostData(o){
      console.log(this.post_data);
      this.post_data.unshift(o);
      console.log(this.post_data);
    },
    deletePost(pk, i){
      // console.log('i',this.post_data);
      let user_token = window.localStorage.getItem('token');
      this.$http.delete('http://bond.ap-northeast-2.elasticbeanstalk.com/api/post/' + `${pk}`+ '/',
       { headers: {'Authorization' : `Token ${user_token}`}})
                .then(response=> {
                })
                .catch(error => console.log(error.response));
    },
    openWriteModal(){
      this.$refs.write_modal.visible = true;
    },
    openLeaveGroupModal(){
      this.$refs.leave_group_modal.visible = true;
    },
    fetchGroupData(){
      let user_token = window.localStorage.getItem('token');
      let pk = window.localStorage.getItem('this_group');
      this.$http.get('http://bond.ap-northeast-2.elasticbeanstalk.com/api/group/' + `${pk}`+ '/',
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
      this.$http.get('http://bond.ap-northeast-2.elasticbeanstalk.com/api/post/?group=' + `${pk}`,
       { headers: {'Authorization' : `Token ${user_token}`} })
                .then(response=> {
                  // this.post_data = response.data.results;
                  let data = response.data.results;
                  console.log('like',data);
                  data.forEach(item => {
                    this.post_data.push(item);
                  });
                  // console.log('postdata',data);
                  // console.log('this.post_data:',this.post_data);
                })
                // .then(write => {const datalist = Object.values(write);
                // this.datalist = datalist;
                // })
                // 
                // .then(data => console.log(data))
                .catch(error => console.log(error.response));
    },
    deletegroup(){
      let pk = window.localStorage.getItem('this_group');
      console.log(pk)
      let user_token = window.localStorage.getItem('token');
      console.log(user_token)
      this.$http.delete('http://bond.ap-northeast-2.elasticbeanstalk.com/api/group/' + `${pk}` + '/',
                { headers: {'Authorization' : `Token ${user_token}`}})
                .then(response => {
                  // console.log(response)
                  this.$router.push({ path: '/MainPage'});
                })
                .catch(error =>{
                  console.error(error.response)
                  if(error.response.status === 401)
                    alert(error.response.data.detail)
                })
    },
    deletemembership(){
          let pk = window.localStorage.getItem('this_group');
          console.log(pk)
          let user_token = window.localStorage.getItem('token');
          console.log(user_token)
          this.$http.delete('http://bond.ap-northeast-2.elasticbeanstalk.com/api/member/membership/',
                  {group: pk},
                  { headers: {'Authorization' : `Token ${user_token}`}})
                  .then(response => {
                    console.log(response)
                    // this.$router.push({ path: '/NoneJointGroupFeed/', query: { group: `${pk}` }});
                  })
                  .catch(error =>{
                    console.error(error.response)
                    if(error.response.status === 401)
                    alert(error.response.data.detail)
                  })
    },
    writeCommentSubmit(pk){
      let user_token = window.localStorage.getItem('token');
      let user_img = window.localStorage.getItem('user_img');
      let user_nickname = window.localStorage.getItem('user_nickname');
      let comment_submit_data = {
        post: pk,
        content: this.write_comment
      }
      this.$http.post('http://bond.ap-northeast-2.elasticbeanstalk.com/api/post/comment/', 
        comment_submit_data,
        { 
          headers: {
            'Authorization' : `Token ${user_token}`,
            // 'Content-Type': 'multipart/form-data'
          }
        })
        .then(function (response) {
            let data = response.data;
            // console.log('comment:',data);
            // this.comment_data.unshift({
            //   author: {
            //     // email: author.email,
            //     nickname: user_nickname,
            //     // pk: author.pk,
            //     profile_img: user_img,
            //     // username: author.nickname
            //   },
            //   content: data.content,
            //   created_date: data.created_date,
            //   pk: data.pk,
            //   post: data.post,
            // })
        }).catch(function (error) {
        console.error(error.message);
      });
    },
    fetchCommentData(post_pk){
      let user_token = window.localStorage.getItem('token');
      let pk = window.localStorage.getItem('this_group');
      let ppk = post_pk;
      console.log('postpk', ppk);
      let post = {
        post: ppk
      }
      this.$http.get('http://bond.ap-northeast-2.elasticbeanstalk.com/api/post/comment/', post,
      // this.$http.get('http://bond.ap-northeast-2.elasticbeanstalk.com/api/group=' + `${pk}` + '/post=' + `${ppk}`,
       { headers: {'Authorization' : `Token ${user_token}`} })
                .then(response=> {
                  this.comment_data = response.data.results;
                  // console.log('this.comment_data:',this.comment_data);
                  console.log('comment::',response);
                })
                .catch(error => console.log(error.response));
    },
    openDropdownPost(e) {
      // this.e.target
      // let el = this.$refs.dropdownpostref
      // let target = e.target
      // console.log(el);
      // console.log(target);
      // if(el !== target && !el.contains(target)){
      //   this.visible = false;
      // }
      // this.dropdownpost = !this.dropdownpost;
    },
    openDropdownComment(e) {
      
      this.dropdowncomment = !this.dropdowncomment;
    },
    showComment(e) {
      let el = this.$refs.togglecomment
      let target = e.target
      console.log(el);
      console.log(target);
      if(el !== target && !el.includes(target)){
        // this.visible = false;
      this.showcomment = !this.showcomment;
      }
    },
    addLike(pk) {
      let user_token = window.localStorage.getItem('token');
      console.log('pk:',pk);
      console.log('token:',user_token);
      // /api/post/<pk>/post-like-toggle
      this.$http.post('http://bond.ap-northeast-2.elasticbeanstalk.com/api/post/' + `${pk}`+ '/post-like-toggle/', true,
       { headers: {'Authorization' : `Token ${user_token}`}})
                .then(response=> {
                  console.log('like.response:',response);
                  let data = response.data;
                  // this.post.like_count
                })
                .catch(error => console.log(error.response));
      // this.like = !this.like;
    },
    deleteComment(pk,ppk){
      console.log(pk);
      console.log(ppk);
      let post = {
        post: ppk
      }
      let user_token = window.localStorage.getItem('token');
      this.$http.delete('http://bond.ap-northeast-2.elasticbeanstalk.com/api/post/comment/' + `${pk}` + '/',
      { headers: {'Authorization' : `Token ${user_token}`}})
      .then(response => {
        this.$http.get('http://bond.ap-northeast-2.elasticbeanstalk.com/api/post/comment/', post,
        { headers: {'Authorization' : `Token ${user_token}`}})
        .then(response=> {
          this.comment_data = response.data.results;
            // console.log('this.comment_data:',this.comment_data);
            console.log('comment::',response);
          })
          .catch(error => console.log('get-error:',error.response));
        console.log(response);
        })
      .catch(error => console.log('delete-error:',error.response));
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



</style>
