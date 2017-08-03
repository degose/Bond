<template lang="pug">
  .modal(v-if="visible" class="is-active")
    .modal-background(@click="closeModal")
    .modal-card
      header.modal-card-head
        p 그룹 만들기
      input.groupname(type="text" placeholder="그룹 이름?")
      
      section.input.modal-card-body
        input.groupsummary(type="text" placeholder="그룹 간략 설명")
        // Content ...
      footer.modal-card-foot
        a.button.is-primary Save changes
        a.button(@click="closeModal") Cancel

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
.groupname
  // width: 200px

</style>
