<template lang="pug">
  div
    .container
        .grid(role='banner')
          header.header
            .col.col-m-1.col-t-2.col-t-offset-1.col-d-2.alpha
              .logo(aria-labelledby='bond-heading')
                h1.readable-hidden Bond
                //- img(src="./assets/logo-01.svg", :alt="vue.label")
                picture
                  source.logo-m(srcset='/src/assets/logo-03.svg', media='(max-width: 767px)')
                  source.logo-w(srcset='/src/assets/logo-02.svg', media='(min-width: 768px)')
                  img.logo-w(src='/src/assets/logo-02.svg', alt='')
            .col.col-m-1.col-m-offset-3.col-t-2.col-t-offset-5.col-d-2.col-d-offset-9
              .info-menu(role='group')
                ul
                  li
                    a(href='/') 그룹 새 글
            .col.col-m-1.col-m-offset-3.col-t-1.col-t-offset-7.col-d-1.col-d-offset-11.omega.alpha
              .user
                img.user-img(src="../assets/user-img.png", alt="")
            .col.col-m-4.col-t-8.col-d-4.col-d-push-2
              .search
                form#search-form(action="javascript:alert('검색이 완료되었습니다.')", role='search')
                  fieldset
                    legend.readable-hidden 검색 폼
                    input#search-keyword(type='search', aria-label='검색어 입력상자', required='', placeholder='검색어를 입력하세요')
                    button.btn-search(type='submit') 검색
</template>


<script>
export default {
  
}
</script>

<style lang="sass">
  @import "~sass"

  .logo
    height: $col-height
  .logo-w
    // line-height: $col-height
    width: 120px
  .logo-m
    width: 60px
  .user-img 
    width: 30px
    height: 30px
    background: yellow
    // border: none
    border-radius: 50%
</style>
