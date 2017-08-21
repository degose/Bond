<template lang="pug">
    div.all-wrapper
      main-header
      .container
        //- 가입한 그룹의 feed
        .columns
          //- 그룹 정보 영역
          .column.is-3
            .card-content
              //- 가입하기 버튼
              .columns.is-mobile
                button.column.btn-default.btn-fill(@click="openModal") 그룹 만들기
            hr
            .card-content
              .columns.is-mobile
                h3.title.is-5 내 그룹
                  |  · 
                  | {{this.group_list.length}}
            .card-content(v-for = 'group in group_list')
              a.columns.is-mobile.group-small-list-group(@click="goGroup")
                article.media.group-small-list
                  figure.media-left
                    p.image.is-32x32
                      img.group-img-small(:src='group.profile_img')
                p.group-small-name {{group.name}}

          //- feed 영역
          .column.is-9
            //- 컨텐츠가 들어간 글
            div.feed-box
              .card(v-for = "data in data_list")
                header.card-header
                  a.card-header-title.group-name(@click.prevent ="goGroup(data.group.pk)") 
                    | &nbsp;  
                    | &nbsp;  
                    span.icon.icon-bond
                      img(src="../../assets/btn-bond-normal.svg")
                    | &nbsp;  
                    | {{data.group.name}}
                .card-content
                  article.media
                    .media-left
                      figure.image.is-64x64.img-user
                        img.user-img(:src='data.author.profile_img', alt='Image')
                    .media-content
                      p.title.is-4.user-name {{data.author.nickname}}
                      p.subtitle.is-6 11:09 PM - 1 Jan 2016
                    button.delete(@click="deletePost(data.pk)")
                  //- 글 (최상위)
                  .content {{data.content}}
                  //- 이미지 - 1개일 때
                  .content
                    figure.image
                      img(:src='data.image')

      main-footer
      MakingGroupModal(ref="my_modal" close_message="close lightbox")
                            

</template>

<script>
import MainHeader from '../Header-Footer/MainHeader';
import MakingGroupModal from '../Group/MakingGroupModal';
import MainFooter from '../Header-Footer/MainFooter';

export default {
  name: 'MyWriteFeed',
  components: {
    MainHeader,
    MakingGroupModal,
    MainFooter
  },
  data() {
    return {
      dropdownpost: false,
      dropdowncomment: false,
      showcomment: false,
      like: false,
      data_list: [],
      group_list: []
    }
  },
  created(){
    this.openMywrite();
    this.getMyGroupList();
  },
  methods: {
    openModal(){
      this.$refs.my_modal.visible = true;
    },
    openDropdownPost() {
      this.dropdownpost = !this.dropdownpost;
    },
    openDropdownComment() {
      this.dropdowncomment = !this.dropdowncomment;
    },
    showComment() {
      this.showcomment = !this.showcomment;
    },
    addLike() {
      this.like = !this.like;
    },
    getMyGroupList(){
        let user_token = window.localStorage.getItem('token');
        
        this.$http.get('http://bond.ap-northeast-2.elasticbeanstalk.com/api/group/my-group/', 
          {headers: { 'Authorization' : `Token ${user_token}` }}
        )
        .then(response => {
          this.group_list = response.data.results;
          console.log(response)
        })
        .catch(error => {
          console.log(error.message);
        })
    },
    openMywrite(){
      let pk = window.localStorage.getItem('pk');
      console.log(pk)
      let path ='http://bond.ap-northeast-2.elasticbeanstalk.com/api/post/?author='+`${pk}`;
      this.$http.get(path)
                .then(response => {
                  console.log(response)
                  let data = response.data;
                  this.data_list = data.results;
                })
                .catch(error => console.error(error.response))
    },
    deletePost(pk){
      // this.$refs.delete_post_modal.visible = true;
      // window.localStorage.getItem(pk);
      console.log('pkstpk::',pk);
      // console.log('i', this.post_data[i]);
      // let post_num = this.post_data[i];
      // post_num.splice(0,1);
      // this.post_data.post[i].splice(i, 1);
      // console.log('i',post_num);
      let user_token = window.localStorage.getItem('token');
      this.$http.delete('http://bond.ap-northeast-2.elasticbeanstalk.com/api/post/' + `${pk}`+ '/',
       { headers: {'Authorization' : `Token ${user_token}`}})
                .then(response=> {
                  // post_num.splice(0,1);
                  // console.log('i',this.post_data);
                  // console.log('i',post_num);
                  // this.post_data.post[i].splice(i, 1);
                })
                .catch(error => console.log(error.response));
    },
    goGroup(pk){
      console.log(pk)
      window.localStorage.setItem('this_group', pk);
      this.$router.push({ path: '/JointGroup/', query: { group: `${pk}` }});
    },
  } 
}
</script>


<style lang="sass" scoped>
@import "~bulma"
@import "~style"

.all-wrapper
  background: #eee
body
  // background: #eee

.icon-more
  font-size: 1.5rem
  color: $grey
  &:hover
    color: $bond
  &:focus
    color: $bond
  &:active
    color: $bond

.card
  margin-bottom: 20px

.dropdownhr
  margin: 5px

.group-img-small
  border-radius: 10%

.group-small-list-group
  line-height: 38px
.group-small-list
  margin-bottom: 8px
.group-small-name
  margin-top: -4px

.group-name
  color: $primary

.btn-show-comment,
.btn-show-like
  font-size: 1rem
  color: $primary

.fa-heart,
.fa-heart-o
  font-size: 1rem
  margin-top: 1px

</style>
