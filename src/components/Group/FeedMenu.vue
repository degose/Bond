<template lang="pug">
div
  .container
    .columns
      .column
        .tabs.is-centered.is-medium
          ul
            router-link(tag="li" to="/JointGroup" active-class="is-active" exact)
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



</style>

