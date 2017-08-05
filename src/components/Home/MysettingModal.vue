<template lang="pug">
  .modal(v-if="visible" class="is-active")
    .modal-background(@click="closeModal")
    .modal-card
      header.modal-card-head
        p.modal-card-title 내 정보
      section.modal-card-body
        nav.level
          .level-left
            .level-item
              p.subtitle.is-5
                strong 내이름
            .level-item
              .field.has-addons
                p.control
                  input.input(type='text', placeholder='이름 변경')
                p.control
                  button.button
                    | 변경           
        nav.level
          .level-left
            .level-item
              p.subtitle.is-5
                strong 닉네임
            .level-item
              .field.has-addons
                p.control
                  input.input(type='text', placeholder='닉네임 변경')
                p.control
                  button.button
                    | 변경
        nav.level          
          .level-left
            .level-item
              p.subtitle.is-5
                strong 이메일
            .level-item
              .field.has-addons
                p.control
                  input.input(type='email', placeholder='이메일 변경')
                p.control
                  button.button
                    | 변경



      footer.modal-card-foot
        button.button.is-primary 설정 변경
        button.button(@click="closeModal") 취소
  
      //-   columns
      //-     div.content
      //-       figure.image.is-128x128
      //-         img(src='http://bulma.io/images/placeholders/128x128.png')
      //-     .file.is-primary.is-small
      //-       label.file-label
      //-         input.file-input(type='file', name='resume')
      //-         span.file-cta
      //-           span.file-icon
      //-             i.fa.fa-upload
      //-           span.file-label
      //-             | Choose a file…
      //-     //- hr
      //-   .field
      //-     .control
      //-     p 이름
      //-       input.input.is-primary(type='text', placeholder='그룹11 이름을 설정해주세요')
      //-       input.input.is-primary(type="text" rows="50" placeholder="그룹에 소개글을 적어주세요")


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
      default: true
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
    }
  }
}
</script>
<style lang="sass" scoped>

</style>
