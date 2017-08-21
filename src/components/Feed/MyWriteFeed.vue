<template lang="pug">
    div.all-wrapper(v-cloak)
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
                  //- | 5
                  | {{ group_count }}
            .card-content
              a.columns.is-mobile.group-small-list-group
                article.media.group-small-list
                  figure.media-left
                    p.image.is-32x32
                      img.group-img-small(src='http://bulma.io/images/placeholders/128x128.png')
                p.group-small-name 안녕


          
          
          //- feed 영역
          .column.is-9
            //- div.feed-box(v-show="post_data.length <= 0")
              .card
                .card-content
                  .content
                    | 그룹에 재미있는 이야기를 써보세요.


            //- 컨텐츠가 들어간 글
            div.feed-box
              .card(@add-post-data="addPostData" v-for="(post, i) in post_data")
                header.card-header
                  a.card-header-title.group-name()
                    | &nbsp;  
                    | &nbsp;  
                    span.icon.icon-bond
                      img(src="../../assets/btn-bond-normal.svg")
                    | &nbsp;  
                    | 해당 그룹 이름
                .card-content
                  article.media
                    .media-left
                      figure.image.is-64x64.img-user
                        img.user-img(:src='post.author.profile_img', alt='Image')
                    .media-content
                      p.title.is-4.user-name {{ post.author.nickname }}
                      p.subtitle.is-6 {{ post.created_date }}

                    button.delete(@click="deletePost(post.pk, i)")


                  //- 글 (최상위)
                  .content
                    | {{ post.content }}

                    
                  //- 이미지
                  .content(v-if="post.image")
                    figure.image
                      img(:src='post.image')


                
                //- 좋아요, 댓글 개수
                //- footer.card-footer
                  button(type="submit" @click="addLike(post.pk)").card-footer-item.btn-show-like
                    span.icon-like
                      i.fa.fa-heart-o(v-show="!like")
                      i.fa.fa-heart(v-show="like")
                    | &nbsp;  
                    | {{ post.like_count }}
                  button(@click="showComment($event)").card-footer-item.btn-show-comment
                    | 댓글
                    | {{ post.comment_count }}
                    | &nbsp; 
                    span.icon.is-small(v-show="!showcomment")
                      i.fa.fa-angle-down(aria-hidden='true')
                    span.icon.is-small(v-show="showcomment")
                      i.fa.fa-angle-up(aria-hidden='true')
                      

              //- .card
                .card-content
                  //- 댓글 리스트 영역
                  article.media(v-show="showcomment" v-for="comment in comment_data" ref="togglecomment")
                    figure.media-left
                      p.image.is-48x48
                        img.user-img(:src='comment.author.profile_img')
                    .media-content
                      .content
                        p
                          strong {{ comment.author.nickname }}
                          br
                          | {{ comment.content }}
                          br
                          small
                            | {{ comment.created_date }}


                    
      main-footer
      MakingGroupModal(ref="my_modal" close_message="close lightbox")
                            

        
</template>

<script>
import MainHeader from '../Header-Footer/MainHeader';
import MakingGroupModal from '../Group/MakingGroupModal';
import MainFooter from '../Header-Footer/MainFooter';

export default {
  components: {
    MainHeader,
    MakingGroupModal,
    MainFooter
  },
  created(){
    this.fetchGroupData();
    this.fetchPostData();
    // this.deletePost();
  },
  watch: {
    deletePost(){}
  },
  data() {
    return {
      write_comment: '',
      visible: false,
      group_data:[],
      post_data:[],
      group_count: '',
      pk:'',
    }
  },
  methods: {
    addPostData(o){
      console.log(this.post_data);
      this.post_data.unshift(o);
      console.log(this.post_data);
    },
    openModal(){
      this.$refs.my_modal.visible = true;
    },
    deletePost(pk, i){
      // console.log('pkstpk::',pk);
      // console.log('i', this.post_data[i]);
      // let post_num = this.post_data[i];
      // post_num.splice(0,1);
      // this.post_data.post[i].splice(i, 1);
      console.log('i',this.post_data);
      // console.log('i',post_num);
      let user_token = window.localStorage.getItem('token');
      this.$http.delete('http://bond.ap-northeast-2.elasticbeanstalk.com/api/post/' + `${pk}`+ '/',
       { headers: {'Authorization' : `Token ${user_token}`}})
                .then(response=> {
                  // post_num.splice(0,1);
                  // console.log('i',this.post_data);
                  // console.log('i',post_num);
                  this.post_data.post[i].splice(i, 1);
                })
                .catch(error => console.log(error.response));
    },
    fetchGroupData(){
      let user_token = window.localStorage.getItem('token');
      let pk = window.localStorage.getItem('this_group');
      this.$http.get('http://bond.ap-northeast-2.elasticbeanstalk.com/api/group/' + `${pk}`+ '/',
       { headers: {'Authorization' : `Token ${user_token}`}})
                .then(response=> {
                  this.group_data = response.data;
                  console.log('this.group_datalist:',this.group_data);
                  // console.log('response:',response);
                })
                .catch(error => console.log(error.response));
    },
    fetchPostData(){
      let user_token = window.localStorage.getItem('token');
      let pk = window.localStorage.getItem('this_group');
      this.$http.get('http://bond.ap-northeast-2.elasticbeanstalk.com/api/post/?group=' + `${pk}`,
       { headers: {'Authorization' : `Token ${user_token}`} })
                .then(response=> {
                  // let group_count = response.data.count;
                  // this.group_count = group_count;
                  console.log('ddd',response);
                  let data = response.data;
                  data.results.forEach(item => {
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
