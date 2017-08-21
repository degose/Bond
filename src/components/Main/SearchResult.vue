<template lang="pug">  
  div(v-cloak)
    main-header
    my-search
    main-footer
</template>

<script>
import MainHeader from '../Header-Footer/MainHeader';
import MainFooter from '../Header-Footer/MainFooter';
import MySearch from './MySearch';

export default {
  components: {
    MainHeader,
    MainFooter,
    MySearch
  },
  // data(){
  //   return{
  //     search: '',
  //     group_list: []
  //   }
  // },
  // created(){ 
  //   this.fetch();
  // },
  // mounted(){
  //   this.fetch();
  // },
  // computed: {
  //   filtered_group_list(){
  //     let search = this.search.trim();
  //     if(search){
  //       this.group_list = group_list.filter(search => Object.values(search));
  //     }
  //   },
  // },
  // methods: {
  //   fetch(){
  //     let search = this.search.trim();
  //     let searchkeyword = window.localStorage.getItem('searchKeyword');
  //     this.$http.get('http://bond.ap-northeast-2.elasticbeanstalk.com/api/'+'group/?search='+`${searchkeyword}`)
  //               .then(response => {
  //                 this.group_list = response.data.results;
                  
  //                 console.log('searchKeyword:',searchkeyword);
  //                 console.log('response:',response);
  //                 console.log('search:',search);
  //                 this.$router.push({ path: '/SearchResult/group/', query: { search: `${search}` }});
  //                 console.log('search:',search);
  //               })
  //               .catch(error => console.error(error.message))
  //   },
  //   inputSearch(event){
  //     this.search = event.target.value;
  //   }
  // }
}


</script>

<style lang="sass" scoped>
@import "~bulma"
@import "~style"

// body
//   background: #eee
// .navbar-burger.burger
//   padding-top: 8px
//   padding-left: 10px
// .navhr
//   margin: 0 5px 30px 5px
//   // margin: 0
// .dropdownhr
//   margin: 5px

// .nav-fixed
//   position: fixed
// .nav-bg
//   background: #fff
// .btn-search
//   color: $primary
// .leader
//   margin-left: 8px
</style>
