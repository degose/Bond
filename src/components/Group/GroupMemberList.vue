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
                  | &nbsp; ·&nbsp;
                  a(aria-label="open leave group modal" @click.prevent="openLeaveGroupModal") 
                    span.icon.is-small
                      i.fa.fa-cog(aria-hidden='true')
                    | 그룹 탈퇴
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
            .card-content
              table.table.is-fullwidth
                caption.a11y-hidden 그룹멤버
                thead
                  tr
                    th 멤버
                    th
                    

                    th 
                   
                tbody(v-for='member in member_list')
                  tr
                    td
                      figure.image.is-48x48.img-user
                        img.user-img(:src='member.profile_img', alt='Image')
                    td 
                      p.namelist {{member.nickname}}
                    
                    td
                      span.tag.is-rounded.is-primary 리더
          invitation-modal(
            ref="my_modal"
            close_message="close lightbox"
          )
          leave-group-modal(close_message="close lightbox" ref='leave_group_modal')
</template>

<script>
import InvitationModal from './InvitationModal'
import LeaveGroupModal from './LeaveGroupModal'

export default {
  components:{
    InvitationModal,
    LeaveGroupModal
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
      member_list:[]
    }
  },  
  methods: {
    openLeaveGroupModal(){
      this.$refs.leave_group_modal.visible = true;
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
                .catch(error => console.log(error.message));
    },
    fetchGroupMember(){
      let user_token = window.localStorage.getItem('token');
      let pk = window.localStorage.getItem('this_group');
      console.log(pk)
      this.$http.get('https://api.thekym.com/member/?group='+ `${pk}`, 
      { headers: {'Authorization' : `Token ${user_token}`}})
                .then(response => {
                  console.log(response)
                  this.member_list = response.data.results;
                })
                .catch(error => console.log(error.message))
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

</style>
