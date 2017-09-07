<template lang="pug">
  article.media
    figure.media-left
      p.image.is-48x48.img-user-48
        img.img-user-profile(:src='follower.profile_img', alt='Image')
    .media-content
      .content
        p.namelist.name {{follower.nickname}}
    
    .media-right
      button(type="submit" ).card-footer-item.btn-show-like
        span.icon-like
          button.tag.is-rounded.is-follow(v-if="!follower.is_follow" type="submit" @click="addFollow(follower.pk)") 팔로우
          button.tag.is-rounded.is-primary(v-else type="submit" @click="deleteFollow(follower.pk)") 팔로잉
</template>

<script>
export default {
  props: ['follower'],
  methods: {
    addFollow(pk) {
      let user_token = window.localStorage.getItem('token');
      this.$http.post('https://api.thekym.com/member/relation/',
       {to_user: pk},
       {headers: {'Authorization' : `Token ${user_token}`}}
      )
      .then(response=> {
        console.log(response);
        let user_token = window.localStorage.getItem('token');
        let pk = window.localStorage.getItem('pk');
        // let path = null;
        // let page_num = this.$parent.page_num
        this.$http.get( 'https://api.thekym.com/member/' + `${pk}` + '/following/',
        { headers: {'Authorization' : `Token ${user_token}`}})
                  .then(response => {
                    let followings = response.data;
                    this.$parent.following_list = followings;
                    })
                  .catch(error => console.log(error.message))
      }
      )
      // .catch(error => console.log(error.response))
      .catch(error => alert(error.response.data.to_user))
    },
    deleteFollow(pk) {
      let user_token = window.localStorage.getItem('token');
      this.$http.delete('https://api.thekym.com/member/relation/',{
        headers: {'Authorization' : `Token ${user_token}`},
        data:{"to_user":pk}
       }
      )
      .then(response=> {
        console.log(response);
        let user_token = window.localStorage.getItem('token');
        let pk = window.localStorage.getItem('pk');
        // let path = null;
        // let page_num = this.$parent.page_num
        this.$http.get('https://api.thekym.com/member/' + `${pk}` + '/following/',
        { headers: {'Authorization' : `Token ${user_token}`}})
                  .then(response => {
                    let followings = response.data;
                    this.$parent.following_list = followings;
                    })
                  .catch(error => console.log(error.message))
      }
      )
      .catch(error => alert(error.response.data.to_user))
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
.name
  margin-left: 20%
.card-header-title
  font-size: 25px
  padding-left: 0
.pagination.is-centered
  padding-top: 15px
.pagination-btn
  color: $bond
.card-wrapper
  min-height: 80vh

</style>