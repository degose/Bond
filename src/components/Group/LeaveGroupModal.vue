<template lang="pug">
  .modal(v-if="visible" class="is-active")
    .modal-background(@click="closeModal")
    .modal-card
      header.modal-card-head
        p.modal-card-title 그룹 탈퇴하기
      section.modal-card-body
        nav.level
          .level-item.has-text-centered
              p 
              strong 회원님, 정말 그룹을 탈퇴하시겠습니까?
      footer.modal-card-foot
        button.button.is-primary(@click="deletegroup") 확인
        button.button(@click="closeModal") 취소
      // level-right 요소로 우측정렬 가능.. 빈 요소라도 level-left는 언제나 필수! 
</template>

<script>
export default {
  props: {
    close_message: {
      type: String,
      default: 'Close Modal'
    },
    is_visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      visible: this.is_visible
    }
  },
  methods: {
    closeModal(){
      this.visible = false;
    },
    deletegroup(){
          let pk = window.localStorage.getItem('this_group');
          console.log(pk)
          let user_token = window.localStorage.getItem('token');
          console.log(user_token)
          this.$http.delete('http://bond.ap-northeast-2.elasticbeanstalk.com/api/member/membership/',{group: pk},{ headers: {'Authorization' : `Token ${user_token}`} })
                    .then(response => {
                      console.log(response)
                      // if(response.status === 204){
                      //   this.$router.push({path: '/NoneJointGroupFeed/', query: {group: response.data.group}});
                      // }
                      
                    })
                    .catch(error =>{
                      console.error(error.response)
                      if(error.response.status === 403)
                        alert(error.response.data.detail)
                    })
        }         
  }
}
</script>
<style lang="sass" scoped>
</style>