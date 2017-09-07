<template lang="pug">
      //- 가입한 그룹의 feed
      div.container.page-wrapper(v-cloak)
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
                      strong 멤버 
                      | ·
                      | &nbsp;
                      span {{ group_data.num_of_members }}
                    //- div
                    //-   strong 그룹장 
                    //-   //- | &nbsp;
                    //-   | ·
                    //-   | &nbsp;
                    //-   span {{ group_data.owner.nickname }}
                .content
                  p(style='white-space: pre-line')
                    | {{ group_data.description }}
                  a(aria-label="open delete group modal" @click.prevent="openDeleteGroupModal" v-if= "is_owner") 
                    span.icon.is-small
                      i.fa.fa-cog(aria-hidden='true') 
                    | 그룹 삭제
                  a(aria-label="open leave group modal" @click.prevent="openLeaveGroupModal" v-if= "!is_owner") 
                    span.icon.is-small
                      i.fa.fa-cog(aria-hidden='true') 
                    | 그룹 탈퇴
                  
                  
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
                        i.fa.fa-play-circle-o.disabled-ico
                    a(aria-label="open write modal" @click="openWriteModal").card-footer-item
                      span.icon
                        i.fa.fa-folder-open-o.disabled-ico
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

            div.feed-box(v-for="(post, i) in post_data")
              post-template(:post = "post")



            .columns.is-mobile.pagination-wrapper
              .column.is-offset-4.is-one-third.has-text-centered
                button.pagination-next.pagination-btn.is-centered(@click="nextPage()" :disabled='pagination.next === null') 더보기                     
        //- nav.pagination.is-centered
          //- button.pagination-previous.pagination-btn(@click="prevPage()" :disabled='pagination.prev === null') 이전 페이지
         
        //- to-the-top-btn
        ToTheTopBTN 
        write-modal(close_message="close lightbox" ref='write_modal')
        leave-group-modal(close_message="close lightbox" ref='leave_group_modal')
        delete-group-modal(close_message="close lightbox" ref='delete_group_modal')

        
</template>

<script>
import WriteModal from './WriteModal';
import PostTemplate from './PostTemplate';
import DeleteGroupModal from './DeleteGroupModal';
import LeaveGroupModal from './LeaveGroupModal';
import ToTheTopBTN from '../Header-Footer/ToTheTopBTN';

export default {
  created(){
    this.fetchGroupData();
    this.fetchPostData();
  },
  data() {
    return {
      visible: false,
      group_data:[],
      post_data:[],
      pk:'',
      page_num: '',
      pagination:{
        next: '', 
        prev: '',
        all: ''
      },
      is_owner: undefined
    }
  },
  components: {
    WriteModal,
    PostTemplate,
    DeleteGroupModal,
    LeaveGroupModal,
    ToTheTopBTN
  },
  methods: {
    
    openWriteModal(){
      this.$refs.write_modal.visible = true;
    },
    openLeaveGroupModal(){
      this.$refs.leave_group_modal.visible = true;
    },
    openDeleteGroupModal(){
      this.$refs.delete_group_modal.visible = true;
    },
    fetchGroupData(){
      let user_token = window.localStorage.getItem('token');
      let pk = window.localStorage.getItem('this_group');
      this.$http.get('https://api.thekym.com/group/' + `${pk}`+ '/',
       { headers: {'Authorization' : `Token ${user_token}`}})
                .then(response=> {
                  this.group_data = response.data;
                  this.is_owner = response.data.is_owner
                })
                .catch(error => console.log(error.response));
    },
    fetchPostData(direction){
      let user_token = window.localStorage.getItem('token');
      let pk = window.localStorage.getItem('this_group');
      let path = null;
      let page_num = 1;
      if (this.page_num.trim() === ''){
        path = 'https://api.thekym.com/post/?group=' + `${pk}` + '&page=' +`${page_num}`
      }
      else{
        path = this.pagination[direction];
        page_num = this.page_num;
      }
      this.$http.get(path,
       { headers: {'Authorization' : `Token ${user_token}`} })
                .then(response=> {
                  let data = response.data.results;
                  data.forEach(item => {
                    this.post_data.push(item);
                  });
                  this.pagination.next = response.data.next;
                  this.pagination.prev = response.data.previous;
                  this.$router.push({ path: '/JointGroup/', query: { page: `${page_num}` }});
                })
                .catch(error => console.log(error.response));
    },
    nextPage(){
      // "https://api.thekym.com/post/?group=210&page=2".slice(-1) => 2
      let api_path = this.pagination.next;
      if (api_path !== null) {
      let page_path = api_path.slice(-1);
      this.page_num = page_path
      this.fetchPostData('next');
      }
    },
    // prevPage(){
    //   let api_path = this.pagination.prev;
    //   // let last = api_path.indexOf('&');
    //   // let first = api_path.indexOf('?page=');
    //   let page_path = api_path.slice(-1);
    //   this.page_num = page_path

    //   if(this.page_num >= 3){
    //   let page_path = api_path.slice(-1);
    //   this.page_num = page_path;
    //   this.fetchPostData('prev');}
    //   else{
    //      let path = this.pagination.prev
    //      this.fetchPostData('prev');
    //   }
    // },    
  
  }
}
</script>


<style lang="sass" scoped>
@import "~bulma"
@import "~style"

.group_profile-wrapper
  // width: auto
  // height: auto
  height: 150px
  overflow: hidden
  // background: #eee
  position: relative

.group_profile_img
  width: auto
  min-height: 100%
  position: absolute
  top: 30%
  transform: translateY(-30%) 

.user-img
  background: #eee

body
  background: #eee

.page-wrapper
  min-height: 115vh

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

.pagination-btn
  color: $bond
.pagination-wrapper
  padding-bottom: 20px
.disabled-ico
  color: #666
.icon.is-small
  padding-bottom: 4px
</style>
