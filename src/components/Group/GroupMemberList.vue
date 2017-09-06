<template lang="pug">
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
                  //- | &nbsp;
                  | ·
                  | &nbsp;
                  span {{ group_data.num_of_members }}
                  //- | &nbsp;
                  //- | &nbsp;
                div
                  strong 그룹장 
                  //- | &nbsp;
                  | ·
                  | &nbsp;
                  span {{ is_owner.nickname }}
            .content
              p(style='white-space: pre-line')
                | {{ group_data.description }}

      .column.is-9

        .feed-box
          .card-wrapper
            .card
              header.card-header
                .card-header-title
                  | &nbsp;  
                  | &nbsp;  
                  | {{group_data.name}}
                  | &nbsp; 
              .card-content
                table.table.is-fullwidth
                  caption.a11y-hidden 그룹멤버
                  thead
                      //- tr
                      th
                      th
                      

                      th 
                    
                  tbody
                    tr(v-if="this.pagination.prev === null")
                      td
                        figure.image.is-48x48.img-user-48
                          img.img-user-profile(:src='is_owner.profile_img', alt='Image')
                      td 
                        p.namelist.owner {{is_owner.nickname}}
                          | &nbsp;  
                          | &nbsp;  
                          span.tag.is-rounded.is-dark 그룹장
                      td
                        button.card-footer-item.btn-show-like
                          span.icon-like
                            button.tag.is-rounded.is-follow(type="submit" @click="addFollow(is_owner.pk)") 팔로우
                            button.tag.is-rounded.is-primary(type="submit" @click="deleteFollow(is_owner.pk)") 팔로잉                      
                    tr(v-for='member in member_list')
                      td
                        figure.image.is-48x48.img-user-48
                          img.img-user-profile(:src='member.profile_img', alt='Image')
                      td 
                        p.namelist {{member.nickname}}
                      
                      td
                        button.card-footer-item.btn-show-like
                          span.icon-like
                            button.tag.is-rounded.is-follow(type="submit" @click="addFollow(member.pk)") 팔로우
                            button.tag.is-rounded.is-primary(type="submit" @click="deleteFollow(member.pk)") 팔로잉
                          | &nbsp;  
                          //- | {{ post.like_count }}
          .columns
            .column
              nav.pagination.is-centered
                button.pagination-previous.pagination-btn(@click="prevPage()" :disabled='pagination.prev === null') 이전 페이지
                button.pagination-next.pagination-btn(@click="nextPage()" :disabled='pagination.next === null') 다음 페이지  

</template>

<script>
// import InvitationModal from './InvitationModal'
export default {
  components:{
    // InvitationModal,
  },
  beforeCreate(){
    this.hash = this.$route.hash;
  },
  created(){
    this.fetchGroupData();
    this.fetchGroupMember();
  },
  mounted(){
    this.fetchGroupData();
    this.fetchGroupMember();
  },
  // mounted(){
  //   let el = document.querySelector(this.$route.hash);
  //   console.log(el);
  //   el.scrollIntoView(true);
  //   // console.log(scrollIntoView);
  // },
  data() {
    return{
      visible: false,
      group_data:[],
      pk:'',
      member_list:[],
      is_owner:{},
      page_num: '',
      pagination:{
        next: '', 
        prev: '',
        all: ''
      },
      // hash: '#scrollpos',
    }
  },  
  methods: {
    addFollow(pk) {
      console.log(pk)
      let user_token = window.localStorage.getItem('token');
      this.$http.post('https://api.thekym.com/member/relation/',
       {to_user: pk},
       {headers: {'Authorization' : `Token ${user_token}`}}
      )
      .then(response=> {
        console.log(response)
        })
      .catch(error => console.log(error.response))
    },
    deleteFollow(pk) {
      let user_token = window.localStorage.getItem('token');
      this.$http.delete('https://api.thekym.com/member/relation/',{
        headers: {'Authorization' : `Token ${user_token}`},
        data:{"to_user":pk}
       }
      )
      .then(response=> {
        console.log(response)
      }
      )
      .catch(error => console.log(error.response));
    },
    openLeaveGroupModal(){
      this.$refs.leave_group_modal.visible = true;
    },
    fetchGroupData(){
      let user_token = window.localStorage.getItem('token');
      let pk = window.localStorage.getItem('this_group');
      this.$http.get('https://api.thekym.com/group/' + `${pk}`+ '/',
       { headers: {'Authorization' : `Token ${user_token}`}}
       )
        .then(response=> {
          this.group_data = response.data;
          this.is_owner = response.data.owner;
        })
        .catch(error => console.log(error.message));
    },
    fetchGroupMember(direction){
      let user_token = window.localStorage.getItem('token');
      let pk = window.localStorage.getItem('this_group');
      let path = null;
      let page_num = 1;
      if (this.page_num.trim() === ''){
        path = 'https://api.thekym.com/member/?group=' + `${pk}` + '&page=' +`${page_num}`
      }
      else{
        path = this.pagination[direction];
        page_num = this.page_num;
      }
      this.$http.get(path, 
      { headers: {'Authorization' : `Token ${user_token}`}})
                .then(response => {
                  
                  let members = response.data.results;
                  // this.member_list = members;
                  this.pagination.next = response.data.next;
                  this.pagination.prev = response.data.previous;
                  let owner = this.is_owner;
                  for(let i = 0; i < members.length; i++){
                    if(members[i].pk === owner.pk){
                      
                      // members.splice(i,1); 
                    }
                  }
                  this.member_list = members;
                  console.log(this.member_list[0].is_follow)
                })
                .catch(error => console.log(error.message))
    },
    nextPage(){
      let api_path = this.pagination.next;
      if (api_path !== null) {
      let page_path = api_path.slice(-1);
      this.page_num = page_path
      this.fetchGroupMember('next');
      }
    },
    prevPage(){
      let api_path = this.pagination.prev;
      if(this.page_num >= 3){
      let page_path = api_path.slice(-1);
      this.page_num = page_path;
      this.fetchGroupMember('prev');}
      else{
         let path = this.pagination.prev
         this.fetchGroupMember('prev');
      }
    },
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
body
  background: #eee
.page-wrapper
  min-height: 87vh

.img-user-48
  background: #eee
  width: 48px
  height: 48px
  overflow: hidden
  border-radius: 50%

.img-user-profile
  min-height: 100%
  width: 100%

.namelist,
  padding-top: 13px
// .tag.is-rounded
//   margin-top: 13px
.card-header-title
  font-size: 25px
  padding-left: 0
.pagination.is-centered
  padding-top: 15px
.pagination-btn
  color: $bond
.card-wrapper
  min-height: 80vh
// .namelist.owner 
//   padding-top: 0px
  // .fix
  // margin-top: 0px
.is-follow
  background: none
  border: 1px solid $bond
  color: $bond

</style>