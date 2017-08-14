<template lang="pug">
  div
    .page-wrapper
      .container.grouplist
        .columns
          //- 그룹 정보 영역
          .column.is-3
            //- 그룹을 누르면 해당 그룹으로 이동하는 링크를 걸어야 한다.
            //- a(href="/JointGroup")
            router-link(to="/JointGroup")
              .card
                .card-image
                  figure.image.is-desktop-16by9.is-mobile-1by1.is-tablet-2by1
                    img(src='http://bulma.io/images/placeholders/640x320.png', alt='Image')
                .card-content
                  .media
                    .media-content.has-text-centered
                      p.title.is-4 그룹 이름

              
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
export default {
  name: 'MyGroup',
  components: {
    MakingGroupModal
  },
  data () {
    return {
      
    }
  },
  methods: {
    openModal(){
      this.$refs.my_modal.visible = true;
    },
  }
}
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
</style>