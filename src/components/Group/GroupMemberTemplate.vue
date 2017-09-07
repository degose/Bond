<template lang="pug">
    div
      td
        figure.image.is-48x48.img-user-48
          img.img-user-profile(:src='member.profile_img', alt='Image')
      td 
        p.namelist {{member.nickname}}
      
      td
        button.card-footer-item.btn-show-like
          span.icon-like
            button.tag.is-rounded.is-follow(v-if="!member.is_follow" type="submit" @click="addFollow(member.pk)" ) 팔로우
            button.tag.is-rounded.is-primary(v-else type="submit" @click="deleteFollow(member.pk)") 팔로잉
</template>

<script>
export default {
  data() {
    return{
      visible: false,
      group_data:[],
      pk:'',
      member_list:[],
      is_owner:{},
      page_num: '',
      pagination:{
        next: '', 
        prev: '',
        all: ''
      },
      memberFollow:[],
      is_follow: '',
      // hash: '#scrollpos',
    }
  },  
  props: ['member'],
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
        let pk = window.localStorage.getItem('this_group');
        let path = null;
        let page_num = this.$parent.page_num
        this.$http.get( 'https://api.thekym.com/member/?group=' + `${pk}` + '&page=' +`${page_num}`,
        { headers: {'Authorization' : `Token ${user_token}`}})
                  .then(response => {
                    let rp = response.data.results;
                    let owner = this.$parent.is_owner;
                    for(let i = 0; i < rp.length; i++){
                    if(rp[i].pk === owner.pk){
                      rp.splice(i,1);
                    }
                    this.$parent.member_list = rp;
                    this.pagination.next = this.$parent.pagination.next;
                    this.pagination.prev = this.$parent.pagination.prev;
                    }
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
        let pk = window.localStorage.getItem('this_group');
        let path = null;
        let page_num = this.$parent.page_num
        this.$http.get('https://api.thekym.com/member/?group=' + `${pk}` + '&page=' +`${page_num}`, 
        { headers: {'Authorization' : `Token ${user_token}`}})
                  .then(response => {
                    let rp = response.data.results;
                    let owner = this.$parent.is_owner;
                    for(let i = 0; i < rp.length; i++){
                    if(rp[i].pk === owner.pk){
                      rp.splice(i,1); 
                    }
                    this.$parent.member_list = rp;
                    this.pagination.next = this.$parent.pagination.next;
                    this.pagination.prev = this.$parent.pagination.prev;
                    }
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

.group_profile-wrapper
  height: 150px
  overflow: hidden
  position: relative

.group_profile_img
  width: auto
  min-height: 100%
  position: absolute
  top: 30%
  transform: translateY(-30%) 
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

.namelist,
  padding-top: 13px
.card-header-title
  font-size: 25px
  padding-left: 0
.pagination.is-centered
  padding-top: 15px
.pagination-btn
  color: $bond
.card-wrapper
  min-height: 80vh
.is-follow
  background: none
  border: 1px solid $bond
  color: $bond

</style>