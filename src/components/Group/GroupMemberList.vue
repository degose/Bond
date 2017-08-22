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
                      span.tag.is-rounded.is-primary(v-if="is_owner[0].email === member.email") 그룹장

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
    fetchGroupMember(){
      let user_token = window.localStorage.getItem('token');
      let pk = window.localStorage.getItem('this_group');
      console.log(pk)
      this.$http.get('https://api.thekym.com/member/?group='+ `${pk}`, 
      { headers: {'Authorization' : `Token ${user_token}`}})
                .then(response => {
                  this.member_list = response.data.results;
                  // this.member_list.reverse()
                  // pk값 순서로 정렬되는중
                })
                // .catch(error => console.log(error.message))
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
</style>