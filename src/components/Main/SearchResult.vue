<template lang="pug">
div
  main-header
  .container
    .columns
      .column.is-10.is-offset-1
        div(v-for="data in datalist") {{data}}
        a(href).box
          article.media
            .media-left
              figure.image.is-64x64
                img(src='http://bulma.io/images/placeholders/128x128.png', alt='Image')
            .media-content
              .content
                p
                  strong 그룹 이름 
                  br
                  |           
                div
                  span.icon.is-small.member
                    i.fa.fa-users(aria-hidden='true')
                  small    멤버 수 
                  span.icon.is-small.leader
                    i.fa.fa-user-circle-o(aria-hidden='true')
                  small    대장 

    .columns
      .column
        nav.pagination.is-centered
          a.pagination-previous Previous
          a.pagination-next Next page
          ul.pagination-list
            li
              a.pagination-link 1
            li
              span.pagination-ellipsis …
            li
              a.pagination-link 45
            li
              a.pagination-link.is-current 46
            li
              a.pagination-link 47
            li
              span.pagination-ellipsis …
            li
              a.pagination-link 86
  main-footer

</template>

<script>
import MainHeader from '../Header-Footer/MainHeader';
import MainFooter from '../Header-Footer/MainFooter';
export default {
  name: 'app',
  components: {
    MainHeader,
    MainFooter
  },
  data(){
    return{
      group_input: {
        name: '',
        bio: '',
        wanted: '',
        nickname: '',
        image: ''
      },
      datalist: []
    }
  },
  methods: {
     submit(){
      //VueResource === this.$http
      this.$http.post('https://bond-accf7.firebaseio.com/', this.group_input)
                .then(function(response){
                  console.log(response);
                })
                .catch(function(error){
                  console.error(error.message);
                })
    },
    fetch(){
      this.$http.get('https://bond-accf7.firebaseio.com/')
                .then(response => {
                    return response.json();
                    })
                .then(data => {
                    const datalist = Object.values(data);
                    this.datalist = datalist;
                    })
                .catch(error => console.error(error.message));
    },
  }
}


</script>

<style lang="sass" scoped>
@import "~bulma"
@import "~style"
// html
//   font-size: 100%
//   background: #fff
// body
//   margin: 0
.leader
  margin-left: 8px
</style>
