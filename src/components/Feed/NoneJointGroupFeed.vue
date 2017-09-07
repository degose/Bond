<template lang="pug">
  //- 가입하지 않은 그룹의 feed
  div.all-wrapper(v-cloak)
    main-header
    hr.hr.is-hidden-touch
    hr.hr.is-hidden-desktop
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
              .content
                p(style='white-space: pre-line')
                  | {{ group_data.description }}

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
                      figure.image.is-64x64.is-1by1.img-user
                        img.img-user-profile(:src='post.author.profile_img', alt='Image')
                    .media-content
                      p.title.is-4.user-name {{ post.author.nickname }}
                      p.subtitle.is-6 {{ calcDate (post.created_date) }}
                          
                  .content
                    p(style='white-space: pre-line')
                      | {{ post.content }}

                  .content(v-if="post.image")
                    figure.image
                      img(:src='post.image')

            .columns.is-mobile.pagination-wrapper
              .column.is-offset-4.is-one-third.has-text-centered
                button.pagination-next.pagination-btn.is-centered(@click="nextPage()" :disabled='pagination.next === null') 더보기                   
    ToTheTopBTN
    main-footer
</template>


<script>
import MainHeader from '../Header-Footer/MainHeader';
import MainFooter from '../Header-Footer/MainFooter';
import ToTheTopBTN from '../Header-Footer/ToTheTopBTN';

export default {
  components: {
    MainHeader,
    MainFooter,
    ToTheTopBTN
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
      page_num: '',
      pagination:{
        next: '', 
        prev: '',
        all: ''
      },
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
                  this.$router.push({ path: '/NoneJointGroupFeed', query: { page: `${page_num}` }});
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
      // console.log('작동된다')
      }
    },

    addLike(pk) {
      let user_token = window.localStorage.getItem('token');
      console.log('pk:',pk);
      console.log('token:',user_token);
      this.$http.post('https://api.thekym.com/post/' + `${pk}`+ '/post-like-toggle/',
       { headers: {'Authorization' : `Token ${user_token}`}})
                .then(response=> {
                  console.log('like.response:',response);
                })
                .catch(error => console.log(error.response));
    },
    calcDate(content){
      return content.slice(0,19).split("T").toString().replace(',', ' ').slice(0,-3)
    }
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

.img-user
  background: #eee
  width: 64px
  height: 64px
  overflow: hidden
  border-radius: 50%

.img-user-profile
  height: 100%
  width: 100%


.all-wrapper
  background: #eee

.page-wrapper
  min-height: 115vh
  // background: #eee

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
.group-info
  // position: fixed
.hr.is-hidden-desktop
  margin-top: 112px
  opacity: 0
.hr.is-hidden-touch
  margin-top: 61px
  opacity: 0
</style>