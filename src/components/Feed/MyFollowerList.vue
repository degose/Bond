<template lang="pug">
  div.container.page-wrapper(v-cloak)
    .columns
      //- 그룹 정보 영역
      .column.is-3.is-hidden-mobile
        .card-content
          //- 가입하기 버튼
          .columns.is-mobile
            button.column.btn-default.btn-fill(@click="openModal") 그룹 만들기
        hr
        .card-content
          .columns.is-mobile
            h3.title.is-5 내 그룹
        .card-content(v-for = 'group in group_list')
          a.columns.is-mobile.group-small-list-group(@click="goGroup(group.pk)")
            article.media.group-small-list
              figure.media-left
                p.image.is-32x32.group-img-small-wrapper
                  img.group-img-small(:src='group.profile_img')
            p.group-small-name {{group.name}}
        .card-content
          .columns.is-mobile
            router-link(to='/MainPage')
                span.icon.is-small
                  i.fa.fa-plus-circle(aira-hidden='true')
                |
                | 더보기

      .column.is-9

        .feed-box
          .card-wrapper
            .card
              header.card-header
                .card-header-title
                  | &nbsp;  
                  | &nbsp;  
                  | 팔로워
                  | &nbsp; 
                  | {{ follower_list.length }}
              .card-content
                ul
                  li(v-for='follower in follower_list')
                    //- hr.li-hr
                    follower-template(:follower="follower")
          //- .columns
            //- .column
            //-   nav.pagination.is-centered
            //-     button.pagination-previous.pagination-btn(@click="prevPage()" :disabled='pagination.prev === null') 이전 페이지
            //-     button.pagination-next.pagination-btn(@click="nextPage()" :disabled='pagination.next === null') 다음 페이지  
      //- ToTheTopBTN 
      //- main-footer
      MakingGroupModal(ref="my_modal" close_message="close lightbox")

</template>

<script>
// import MainHeader from '../Header-Footer/MainHeader';
import MakingGroupModal from '../Group/MakingGroupModal';
// import MainFooter from '../Header-Footer/MainFooter';
import ToTheTopBTN from '../Header-Footer/ToTheTopBTN';
import FollowerTemplate from './FollowerTemplate';
export default {
  components:{
    // MainHeader,
    MakingGroupModal,
    // MainFooter,
    ToTheTopBTN,
    FollowerTemplate
  },
  created(){
    this.getMyGroupList();
    this.fetchFollower();
    this.fetchFollowing();
  },
  data() {
    return{
      group_list: [],
      follower_list:[],
      following_list:[],
      page_num: '',
      pagination:{
        next: '', 
        prev: '',
        all: ''
      },
    }
  },  
  methods: {
    getMyGroupList(){
        let user_token = window.localStorage.getItem('token');
        this.$http.get('https://api.thekym.com/group/my-group/', 
          {headers: { 'Authorization' : `Token ${user_token}` }}
        )
        .then(response => {
          this.group_list = response.data.results;
        })
        .catch(error => {
          console.log(error.message);
        })
    },
    fetchFollower(direction){
      let user_token = window.localStorage.getItem('token');
      let pk = window.sessionStorage.getItem('pk');
      this.$http.get('https://api.thekym.com/member/' + `${pk}` + '/follower/', 
      { headers: {'Authorization' : `Token ${user_token}`}})
                .then(response => {
                  let followers = response.data;
                  this.follower_list = followers;
                })
                .catch(error => console.log(error.response))
    },  
    fetchFollowing(direction){
      let user_token = window.localStorage.getItem('token');
      let pk = window.sessionStorage.getItem('pk');
      this.$http.get('https://api.thekym.com/member/' + `${pk}` + '/following/', 
      { headers: {'Authorization' : `Token ${user_token}`}})
                .then(response => {
                  let followings = response.data;
                  this.following_list = followings;
                })
                .catch(error => console.log(error.response))
    },
    openModal(){
      this.$refs.my_modal.visible = true;
    },
    goGroup(pk){
      window.sessionStorage.setItem('this_group', pk);
      this.$router.push({ path: '/JointGroup/', query: { group: `${pk}` }});
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
  min-height: 115vh
.img-user-48
  background: #eee
  width: 48px
  height: 48px
  overflow: hidden
  border-radius: 50%
.img-user-profile
  min-height: 100%
  width: 100%
.group-img-small-wrapper
  width: 32px
  height: 32px
  overflow: hidden
  border-radius: 10%
.group-img-small
  width: 100%
  min-height: 100%
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
.li-hr
  // padding: 0
  margin: 10px 0
</style>