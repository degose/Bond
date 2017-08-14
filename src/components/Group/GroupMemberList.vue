<template lang="pug">
  //- 가입한 그룹의 feed
  .container.page-wrapper
    .columns
      //- 그룹 정보 영역
      .column.is-3
        .card
          .card-image
            figure.image.is-16by9
              img(src='http://bulma.io/images/placeholders/1280x960.png', alt='Image')
          .card-content
            article.media
              .media-content
                p.title.is-4 그룹 이름
                div
                  span 멤버 5
                  |  · 
                  a(aria-label="open leave group modal" @click="openLeaveGroupModal") 
                    span.icon.is-small
                      i.fa.fa-cog(aria-hidden='true')
                    | 그룹 설정
            .content
              | Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              | Phasellus nec iaculis mauris. 



      .column.is-9

        .feed-box
          .card
            header.card-header
              .card-header-title
                | &nbsp;  
                | &nbsp;  
                | 그룹 이름
                | &nbsp; 
                //- | &nbsp; 
                //- | &nbsp; 
                //- | &nbsp; 
                button.btn-default.column.is-offset-7.is-hidden-mobile(@click="openModal") + 멤버 초대
                button.btn-default.column.is-offset-4.is-hidden-desktop.is-hidden-tablet(@click="openModal") + 멤버 초대
              
            .card-content
              table.table.is-fullwidth
                //- col(width="20%")
                //- col(width="20%")
                //- col(width="60%")
                caption.a11y-hidden 그룹멤버
                thead
                  tr
                    th 멤버
                    th
                    

                    th 정렬
                      a
                        span.icon
                          i.fa.fa-angle-down

                tbody
                  tr
                    //- th 1
                    td
                      figure.image.is-48x48.img-user
                        img.user-img(src='http://bulma.io/images/placeholders/96x96.png', alt='Image')
                    td 
                      p.namelist 만순이
                    
                    td
                      span.tag.is-rounded.is-primary 리더
                  tr
                    //- th 1
                    td
                      figure.image.is-48x48.img-user
                        img.user-img(src='http://bulma.io/images/placeholders/96x96.png', alt='Image')
                    td 
                      p.namelist 만순이
                    
                    td
                      span.tag.is-rounded.is-primary 리더
                  tr
                    //- th 1
                    td
                      figure.image.is-48x48.img-user
                        img.user-img(src='http://bulma.io/images/placeholders/96x96.png', alt='Image')
                    td 
                      p.namelist 만순이
                    
                    td
                      span.tag.is-rounded.is-primary 리더
                  tr
                    //- th 1
                    td
                      figure.image.is-48x48.img-user
                        img.user-img(src='http://bulma.io/images/placeholders/96x96.png', alt='Image')
                    td 
                      p.namelist 만순이
                    
                    td
                      span.tag.is-rounded.is-primary 리더
                  tr
                    //- th 1
                    td
                      figure.image.is-48x48.img-user
                        img.user-img(src='http://bulma.io/images/placeholders/96x96.png', alt='Image')
                    td 
                      p.namelist 만순이
                    
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
  data() {
    return{

    }
  },  
  methods: {
    openModal(){
      this.$refs.my_modal.visible = true;
    },
    openLeaveGroupModal(){
      this.$refs.leave_group_modal.visible = true;
    },
  }
}
</script>

<style lang="sass" scoped>
@import "~bulma"
@import "~style"

body
  background: #eee

.page-wrapper
  min-height: 87vh

.user-img
  border-radius: 50%
.namelist,
  padding-top: 13px
.tag.is-rounded
  margin-top: 13px

</style>
