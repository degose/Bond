<template lang="pug">
nav.gnb
  ul
    router-link(to='/JoinedGroupFeed', tag='li' exact='', active-class='current-page') JoinedGroupFeed
    router-link(to='/MemberList', tag='li', active-class='current-page') MemberList
    router-link(to='/MyGroupFeed', tag='li', active-class='current-page') MyGroupFeed
    router-link(to='/NoneJointFeed', tag='li', active-class='current-page') NoneJointFeed    
    router-link(to='/RemoveGroup', tag='li', active-class='current-page') RemoveGroup
    router-link(to='/Home', tag='li', active-class='current-page') Home
    router-link(to='/Login', tag='li', active-class='current-page') Login
    router-link(to='/Password', tag='li', active-class='current-page') Password
    router-link(to='/SignUp', tag='li', active-class='current-page') SignUp
    router-link(to='/GroupList', tag='li', active-class='current-page') GroupList
    router-link(to='/SearchPage', tag='li', active-class='current-page') SearchPage
    router-link(to='/InviteGroupModal', tag='li', active-class='current-page') InviteGroupModal

</template>

<script>
export default {
  name: 'app',
}
</script>

<style lang="sass" scoped>

</style>