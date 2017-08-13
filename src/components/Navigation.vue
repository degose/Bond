<template lang="pug">
nav.gnb
  ul
    router-link(to='/JointGroupFeed', tag='li' exact='', active-class='current-page') JointGroupFeed
    router-link(to='/GroupMemberList', tag='li', active-class='current-page') GroupMemberList
    router-link(to='/MyGroupFeed', tag='li', active-class='current-page') MyGroupFeed
    router-link(to='/NoneJointGroupFeed', tag='li', active-class='current-page') NoneJointGroupFeed    
    router-link(to='/Home', tag='li', active-class='current-page') Home
    router-link(to='/SignUpPage', tag='li', active-class='current-page') SignUpPage
    router-link(to='/FindPassword', tag='li', active-class='current-page') FindPassword
    router-link(to='/SignInPage', tag='li', active-class='current-page') SignInPage
    router-link(to='/MyGroup', tag='li', active-class='current-page') MyGroup
    router-link(to='/SearchResult', tag='li', active-class='current-page') SearchResult
    router-link(to='/InvitationModal', tag='li', active-class='current-page') InvitationModal

</template>

<script>
export default {
  name: 'app',
}
</script>

<style lang="sass" scoped>

</style>