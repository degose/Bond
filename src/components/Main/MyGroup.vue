<template lang="pug">
  div
    .container.grouplist
      .columns
        //- 그룹 정보 영역
        .column.is-3
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
            .card-image
              figure.image.is-desktop-16by9.is-mobile-1by1.is-tablet-2by1
                img(src='http://bulma.io/images/placeholders/640x320.png', alt='Image')
            .card-content
              .media
                .media-content.has-text-centered
                  p.title.is-4 그룹 이름

        .column.is-3
          .card
            .card-image
              figure.image.is-desktop-16by9.is-mobile-2by1.is-tablet-2by1
                img(src='http://bulma.io/images/placeholders/640x320.png', alt='Image')
            .card-content
              .media
                .media-content.has-text-centered
                  p.title.is-4 그룹 이름

        .column.is-3
          .card
            .card-image
              figure.image.is-desktop-16by9.is-mobile-2by1.is-tablet-2by1
                img(src='http://bulma.io/images/placeholders/640x320.png', alt='Image')
            .card-content
              .media
                .media-content.has-text-centered
                  p.title.is-4 그룹 이름

      .columns
        //- 그룹 정보 영역
        .column.is-3
          .card
            .card-image
              figure.image.is-desktop-16by9.is-mobile-2by1.is-tablet-2by1
                img(src='http://bulma.io/images/placeholders/640x320.png', alt='Image')
            .card-content
              .media
                .media-content.has-text-centered
                  p.title.is-4 그룹 이름

        .column.is-3
          .card
            .card-image
              figure.image.is-desktop-16by9.is-mobile-2by1.is-tablet-2by1
                img(src='http://bulma.io/images/placeholders/640x320.png', alt='Image')
            .card-content
              .media
                .media-content.has-text-centered
                  p.title.is-4 그룹 이름

        .column.is-3
          .card
            .card-image
              figure.image.is-desktop-16by9.is-mobile-2by1.is-tablet-2by1
                img(src='http://bulma.io/images/placeholders/640x320.png', alt='Image')
            .card-content
              .media
                .media-content.has-text-centered
                  p.title.is-4 그룹 이름

        .column.is-3
          .card
            .card-image
              figure.image.is-desktop-16by9.is-mobile-2by1
                img(src='http://bulma.io/images/placeholders/640x320.png', alt='Image')
            .card-content
              .media
                .media-content.has-text-centered
                  p.title.is-4 그룹 이름

      .columns
        .column.is-3
          .card
            .card-image
              figure.image.is-desktop-16by9.is-mobile-1by1.is-tablet-2by1
                img(src='http://bulma.io/images/placeholders/640x320.png', alt='Image')
            .card-content
              .media
                .media-content.has-text-centered
                  p.title.is-4 그룹 이름
                  // 도움 요청..
            
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
  name: 'app',
  components: {
    MakingGroupModal
  },
  data () {
    return {
      vue: {
        // 동적 속성 바인딩 시에는 src/ 디렉토리에서 찾아야 이미지 출력
        // file-loader를 사용하지 않고, 직접 속성 값을 설정하기 때문
        // path: './src/assets/logo.png',
        // label: 'Vue.js'
      }
    };
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
.grouplist

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