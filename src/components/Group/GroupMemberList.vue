<template lang="pug">
  //- 가입한 그룹의 feed
  .container
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
                  a 
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
          InviteGroupModal(
            ref="my_modal"
            close_message="close lightbox"
          )
</template>

<script>
import InviteGroupModal from './InviteGroupModal'

export default {
  components:{
    InviteGroupModal
  },
  data() {
    return{

    }
  },  
  methods: {
    openModal(){
      this.$refs.my_modal.visible = true;
    },
  }
}
</script>

<style lang="sass" scoped>
.user-img
  border-radius: 50%
.namelist,
  padding-top: 13px
.tag.is-rounded
  margin-top: 13px

</style>
