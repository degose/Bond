<template lang="pug">
  //- 가입하지 않은 그룹의 feed
  div.all-wrapper.page-wrapper(v-cloak)
    main-header
    .container.page-wrapper
      .columns
        //- 그룹 정보 영역
        .column.is-3.group-info
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

              //- 가입하기 버튼
              .columns.is-mobile
                button.column.btn-default.btn-fill(@click="jointgroup") 그룹 가입하기


        //- feed 영역
        .column.is-9
          div.feed-box(v-show="post_data.length <= 0")
            .card
              .card-content
                .content
                  | 그룹에 재미있는 이야기를 써보세요.

          div.feed-box
            div.card-wrapper(v-for="(post, i) in post_data")
              .card
                .card-content
                  article.media
                    .media-left
                      figure.image.is-64x64.img-user
                        img(:src='post.author.profile_img', alt='Image')
                    .media-content
                      p.title.is-4.user-name {{ post.author.nickname }}
                      p.subtitle.is-6 {{ post.created_date }}
                          
                  .content
                    | {{ post.content }}

                  .content(v-if="post.image")
                    figure.image
                      img(:src='post.image')
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
  created(){
    this.fetchGroupData();
    this.fetchPostData();
  },
  data() {
    return {
      write_comment: '',
      visible: false,
      group_data:[],
      post_data:[],
      pk:'',
    }
  },
  methods: {
    jointgroup(){
        let pk = window.localStorage.getItem('this_group')
        let user_token = window.localStorage.getItem('token')
        this.$http.post('https://api.thekym.com/member/membership/', {group: pk},
                  { headers: {'Authorization' : `Token ${user_token}`}})
                  .then(response => {
                    if(response.status === 201){
                      this.$router.push({path: '/JointGroup/'});
                    }
                  })
                  .catch(error =>{
                    if(error.response.status === 400)
                      alert(error.response.data.group[0])
                  })
    },
    fetchGroupData(){
      let user_token = window.localStorage.getItem('token');
      let pk = window.localStorage.getItem('this_group');
      this.$http.get('https://api.thekym.com/group/' + `${pk}`+ '/',
       { headers: {'Authorization' : `Token ${user_token}`}})
                .then(response=> {
                  this.group_data = response.data;
                })
                .catch(error => console.log(error.response));
    },
    fetchPostData(){
      let user_token = window.localStorage.getItem('token');
      let pk = window.localStorage.getItem('this_group');
      this.$http.get('https://api.thekym.com/post/?group=' + `${pk}`,
       { headers: {'Authorization' : `Token ${user_token}`} })
                .then(response=> {
                  let data = response.data.results;
                  data.forEach(item => {
                    this.post_data.push(item);
                  });
                })
                .catch(error => console.log(error.response));
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

.img-user
  background: #eee
  width: 64px
  height: 64px
  overflow: hidden
  border-radius: 50%

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

.all-wrapper
  background: #eee
  // min-height: 100vh

.group-info
  // position: fixed
</style>