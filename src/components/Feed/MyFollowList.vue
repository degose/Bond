<template lang="pug">
    div.all-wrapper(v-cloak)
      main-header
      hr.hr.is-hidden-touch
      hr.hr.is-hidden-desktop
      div.tabmenu
        .container
          .columns
            .column
              .tabs.is-centered.is-medium
                ul
                  router-link(tag="li" to="/MyFollowList/" active-class="is-active" exact)
                    a  
                      strong 팔로잉
                  router-link(tag="li" to="/MyFollowList/MyFollowerList" active-class="is-active" )
                    a
                      strong 팔로워
          router-view
             
      ToTheTopBTN 
      main-footer
      //- MakingGroupModal(ref="my_modal" close_message="close lightbox")
                            

</template>

<script>
import MainHeader from '../Header-Footer/MainHeader';
// import MakingGroupModal from '../Group/MakingGroupModal';
import MainFooter from '../Header-Footer/MainFooter';
import ToTheTopBTN from '../Header-Footer/ToTheTopBTN';

export default {
  components: {
    MainHeader,
    // MakingGroupModal,
    MainFooter,
    ToTheTopBTN
  },
  data() {
    return {
      // dropdownpost: false,
      // dropdowncomment: false,
      // showcomment: false,
      // like: false,
      // data_list: [],
      // group_list: [],
      // page_num: '',
      // pagination:{
      //   next: '', 
      //   prev: '',
      //   all: ''
      // },
    }
  },
  created(){
  },
  methods: {
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
.feed-box-wrapper
  min-height: 80vh
.dropdownhr
  margin: 5px
.group-img-small-wrapper
  width: 32px
  height: 32px
  overflow: hidden
  border-radius: 10%
.group-img-small
  width: 100%
  min-height: 100%
.group-small-list-group
  line-height: 38px
.group-small-list
  margin-bottom: 8px
.group-small-name
  margin-top: -4px
.group-name
  color: $primary
.img-user-64
  background: #eee
  width: 64px
  height: 64px
  overflow: hidden
  border-radius: 50%
.img-user-profile
  width: 100%
  height: 100%
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
.pagination-wrapper
  padding-bottom: 20px
.hr.is-hidden-desktop
  margin-top: 112px
  opacity: 0
.hr.is-hidden-touch
  margin-top: 61px
  opacity: 0
</style>