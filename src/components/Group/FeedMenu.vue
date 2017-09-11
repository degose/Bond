<template lang="pug">
div
  hr.hr.is-hidden-touch
  hr.hr.is-hidden-desktop
  div.tabmenu
    .container
      .columns
        .column
          .tabs.is-centered.is-medium
            ul
              router-link(tag="li" to="/JointGroup/?page=1" autofocus active-class="is-active" exact)
                a
                  strong 전체글
              router-link(tag="li" to="/JointGroup/GroupMemberList" active-class="is-active")
                a  
                  strong 멤버
      router-view


</template>

<script>
export default {
  
}
</script>

<style lang="sass">

.hr.is-hidden-desktop
  margin-top: 112px
  opacity: 0
.hr.is-hidden-touch
  margin-top: 61px
  opacity: 0
</style>

