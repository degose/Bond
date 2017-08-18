<template lang="pug">
  //- 가입하지 않은 그룹의 feed
  div.all-wrapper
    main-header
    .container
      .columns
      
        //- 그룹 정보 영역
        .column.is-3.group-info
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
              .content
                | Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                | Phasellus nec iaculis mauris. 

              //- 가입하기 버튼
              .columns.is-mobile
                button.column.btn-default.btn-fill(@click.prevent = "jointgroup") 그룹 가입하기


        //- feed 영역
        .column.is-9

          div.feed-box
            .card
              .card-content
                article.media
                  .media-left
                    figure.image.is-64x64.img-user
                      img.user-img(src='http://bulma.io/images/placeholders/96x96.png', alt='Image')
                  .media-content
                    p.title.is-4.user-name John Smith
                    p.subtitle.is-6 11:09 PM - 1 Jan 2016
                        
                .content
                  | Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  | Phasellus nec iaculis mauris. 
                  | Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  | Phasellus nec iaculis mauris. 
                  | Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  | Phasellus nec iaculis mauris. 

              
              //- 좋아요, 댓글 개수
              footer.card-footer
                a(href='#').card-footer-item
                  span
                    i.fa.fa-heart
                      | &nbsp;  
                      | 5
                a(href='#').card-footer-item
                  | 댓글
                  | 5
                  | &nbsp; 
                  span.icon.is-small
                    i.fa.fa-angle-down(aria-hidden='true')
                    

            //- 댓글 영역
            .card
              .card-content
                //- 댓글 리스트 영역
                article.media
                  figure.media-left
                    p.image.is-48x48
                      img.user-img(src='http://bulma.io/images/placeholders/128x128.png')
                  .media-content
                    .content
                      p
                        strong Barbara Middleton
                        br
                        |         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta eros lacus, nec ultricies elit blandit non. Suspendisse pellentesque mauris sit amet dolor blandit rutrum. Nunc in tempus turpis.
                        br
                        small
                          | 3 hrs
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
  methods: {
    jointgroup(){
        let pk = window.localStorage.getItem('this_group')
        let user_token = window.localStorage.getItem('token')
        this.$http.post('http://bond.ap-northeast-2.elasticbeanstalk.com/api/member/membership/', {group: pk},
                  { headers: {'Authorization' : `Token ${user_token}`}})
                  .then(response => {
                    console.log(response)
                    if(response.status === 201){
                      this.$router.push({path: '/JointGroup/', query: {group: response.data.group}});
                    }
                  })
                  .catch(error =>{
                    if(error.response.status === 400)
                      alert(error.response.data.group[0])
                  })
      }           
  }
}
</script>

<style lang="sass" scoped>
@import "~bulma"
@import "~style"
.all-wrapper
  background: #eee
  height: 100vh


.group-info
  // position: fixed


</style>
