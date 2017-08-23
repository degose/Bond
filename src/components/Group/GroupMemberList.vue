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
                  span 멤버 {{ group_data.num_of_members }}

            .content {{ group_data.description }}



      .column.is-9

        .feed-box
          .card
            header.card-header
              .card-header-title
                | &nbsp;  
                | &nbsp;  
                | {{group_data.name}}
                | &nbsp; 
                //- | &nbsp; 
                //- | &nbsp; 
                //- | &nbsp; 
                //- button.btn-default.column.is-offset-7.is-hidden-mobile(@click="openModal") + 멤버 초대
                //- button.btn-default.column.is-offset-4.is-hidden-desktop.is-hidden-tablet(@click="openModal") + 멤버 초대
              
            .card-content
              table.table.is-fullwidth
                //- col(width="20%")
                //- col(width="20%")
                //- col(width="60%")
                caption.a11y-hidden 그룹멤버
                thead
                    //- tr
                    th
                    th
                    

                    th 


                tbody(v-for='member in member_list')
                  tr
                    //- th 1
                    td
                      figure.image.is-48x48.img-user
                        img.user-img(:src='member.profile_img', alt='Image')
                    td 
                      p.namelist {{member.nickname}}
                    
                    td
                      span.tag.is-rounded.is-primary(v-if="is_owner[0].pk === member.pk") 그룹장
          .columns
            .column
              nav.pagination.is-centered
                button.pagination-previous.pagination-btn(@click="prevPage()" :disabled='pagination.prev === null') 이전 페이지
                button.pagination-next.pagination-btn(@click="nextPage()" :disabled='pagination.next === null') 다음 페이지  
          invitation-modal(
            ref="my_modal"
            close_message="close lightbox"
          )
</template>

<script>
import InvitationModal from './InvitationModal'
export default {
  components:{
    InvitationModal,
  },
  created(){
    this.fetchGroupData();
    this.fetchGroupMember();
  },
  data() {
    return{
      visible: false,
      group_data:[],
      pk:'',
      member_list:[],
      is_owner:[],
      page_num: '',
      pagination:{
        next: '', 
        prev: '',
        all: ''
      },
    }
  },  
  methods: {
    openModal(){
      this.$refs.my_modal.visible = true;
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
                  this.is_owner.push(response.data.owner)
                })
                // .catch(error => console.log(error.message));
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
                  this.member_list = response.data.results;
                  this.pagination.next = response.data.next;
                  this.pagination.prev = response.data.previous;
                  // this.member_list.reverse()
                  // pk값 순서로 정렬되는중
                  // http://api.thekym.com/member/?group=200&page=2"

                })
                // .catch(error => console.log(error.message))
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
  width: auto
  height: auto
  min-height: 100px
  max-height: 135px
  overflow: hidden
.group_profile_img
  background: url('http://bulma.io/images/placeholders/1280x960.png')
body
  background: #eee
.page-wrapper
  min-height: 87vh
.user-img
  background: #eee
.namelist,
  padding-top: 13px
.tag.is-rounded
  margin-top: 13px
.card-header-title
  font-size: 25px
  padding-left: 0
.pagination.is-centered
  padding-top: 15px
.pagination-btn
  color: $bond
</style>