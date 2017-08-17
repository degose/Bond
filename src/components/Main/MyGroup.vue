<template lang="pug">
  div
    .page-wrapper
      .container.grouplist
        .columns.grouplist-wrapper
          //- 그룹 정보 영역
          .column.is-3(v-for="group in group_list")
            //- router-link(to="/JointGroup")
            a(@click.prevent="goGroup(group.pk, $event)")
              .card
                .card-image
                  figure.image.is-desktop-16by9.is-mobile-1by1.is-tablet-2by1.img-grouplist-wrapper
                    img(:src="group.profile_img" alt='Image')
                .card-content
                  .media
                    .media-content.has-text-centered
                      p.title.is-4 {{ group.name }}

              
          .column.is-3
            .card
              .card-image.makegroup
                figure.image.is-desktop-16by9.is-mobile-1by1.is-tablet-2by1
                  a(@click="openModal")
                    img(src='../../assets/group-add-hoverx2.png', alt='Image')
              .card-content
                .media
                  .media-content.has-text-centered
                    p.title.is-4 그룹 만들기
        nav.pagination.is-hidden-mobile.is-centered.grouplist-nav
          a.pagination-previous(title='This is the first page', disabled='') Previous
          a.pagination-next Next page
          ul.pagination-list
            li
              a.pagination-link.is-current.is-dark 1
            li
              a.pagination-link.is-dark 2
            li
              a.pagination-link.is-dark 3
      
      MakingGroupModal(
        ref="my_modal"
        close_message="close lightbox"
      )

</template>

<script>
import MakingGroupModal from '../Group/MakingGroupModal';

// let group_list_url = 'https://bond-43bc3.firebaseio.com/group.json';
// let group_list_url = 'http://bond.ap-northeast-2.elasticbeanstalk.com/api/group/';


export default {
  name: 'MyGroup',
  components: {
    MakingGroupModal
  },
  created() {
    this.getMyGroupList();


  },
  mounted(){
    // this.getMyGroupList();
  },
  updated(){
    // this.getMyGroupList();
  },
  data () {
    return {
      uploadGroupImg: '',
      group_list: [],
      group_pk: '',
      group: {}
    };
  },
  watch: {
    
  },
  methods: {
    openModal(){
      this.$refs.my_modal.visible = true;
    },

    getMyGroupList(){
      let user_token = window.localStorage.getItem('token');
      
      this.$http.get('http://bond.ap-northeast-2.elasticbeanstalk.com/api/group/my-group/', 
        {headers: { 'Authorization' : `Token ${user_token}` }}
      )
      .then(response => {
        // const datalist = Object.values(response);
        // this.datalist = datalist;
        this.group_list = response.data.results;
       console.log(response);
      //  console.log('pk:', response.data.results[2].pk);
      //  for(i){
      //    g
      //  }
      //  this.group_pk = response.data.results[i].pk;
      //  console.log(this.group_pk);
      //  this.group_list.index.reverse();
      })
      .catch(error => {
        console.log(error.message);
      })
    },
    goGroup(pk, e){
      // this.$router.push({ path: 'JointGroup', query: { plan: 'private' }});
      // http://bond.ap-northeast-2.elasticbeanstalk.com/api/group/my-group/?group=1
      // let group_pk = 'http://bond.ap-northeast-2.elasticbeanstalk.com/api/group/' + `${pk}`;
      // this.$router.push('/JointGroup/?group=${}');
      // this.$router.push({path: '/JointGroup', params: {id: pk}});
      this.$router.push({ path: '/JointGroup/', query: { group: `${pk}` }});
      window.localStorage.setItem('this_group',pk);
      // this.$http.get('http://bond.ap-northeast-2.elasticbeanstalk.com/api/group/')
      console.log(pk);
    }
}}
</script>

<style lang="sass" scoped>
@import "~bulma"
@import "~style"

.page-wrapper
  min-height: 87vh

.dropdownhr
  margin: 5px

.column.is-3.is-hidden-mobile
  width: 238px
  height: 194px
.fa.fa-plus-circle.fa-5x
  font-size: 119px
  margin: 0 63px 0 63px
  color: #E91E63
.grouplist-nav
  margin-top: 100px
  // margin-bottom: 200px
.plusgroup
  background: yellow
.img-grouplist-wrapper
  width: auto
  height: auto
  min-height: 100px
  max-height: 135px
  overflow: hidden
.grouplist-wrapper
  flex-wrap: wrap

</style>