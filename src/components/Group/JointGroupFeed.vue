<template lang="pug">
      //- 가입한 그룹의 feed
      div.container.page-wrapper
        .columns
          //- 그룹 정보 영역
          .column.is-3
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
                      |  · 
                      a(aria-label="open leave group modal" @click.prevent="openLeaveGroupModal") 
                        span.icon.is-small
                          i.fa.fa-cog(aria-hidden='true')
                        | 그룹 설정
                .content {{ group_data.description }}
                  
                  
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
                
            div.feed-box(v-show="post_data.length <= 0")
              .card
                .card-content
                  .content
                    | 그룹에 재미있는 이야기를 써보세요.

            //- div.feed-box(@add-post-data="addPostData" v-for="(post, i) in post_data")
            div.feed-box
              post-card

                            
        write-modal(close_message="close lightbox" ref='write_modal')
        leave-group-modal(close_message="close lightbox" ref='leave_group_modal')

        
</template>

<script>
import WriteModal from './WriteModal';
import LeaveGroupModal from './LeaveGroupModal';
// import PostTemplate from './PostTemplate';
import PostCard from './PostCard';

export default {
  created(){
    this.fetchGroupData();
    this.fetchPostData();
    // this.fetchCommentData();
  },

  props: {
  },
  data() {
    return {
      write_comment: '',
      visible: false,
      // dropdownpost: false,
      // dropdowncomment: false,
      // showcomment: false,
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
    // PostTemplate,
    PostCard
  },
  methods: {
    addPostData(o){
      console.log(this.post_data);
      this.post_data.unshift(o);
      console.log(this.post_data);
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
                  data.forEach(item => {
                    this.post_data.push(item);
                  });
                  // console.log('this.post_data:',this.post_data);
                })
                // .then(write => {const datalist = Object.values(write);
                // this.datalist = datalist;
                // })
                // 
                // .then(data => console.log(data))
                .catch(error => console.log(error.response));
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
