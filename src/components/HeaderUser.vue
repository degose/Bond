<template lang="pug">
  div
    .container.header
        .grid(role='banner')
          .col.col-m-1.col-t-2.col-t-offset-1.col-d-2
            .logo(aria-labelledby='webcafe-heading')
              h1.readable-hidden#webcafe-heading 웹카페
              //- img(src="./assets/logo-01.svg", :alt="vue.label")
              picture
                source(srcset='/src/assets/logo-02.svg', media='(max-width: 767px)')
                source(srcset='/src/assets/logo-01.svg', media='(min-width: 768px)')
                img.responsive-svg(src='/src/assets/logo-02.svg', alt='')
          .col.col-m-2.col-m-offset-1.col-t-4.col-t-offset-1.col-d-4.col-d-offset-6
            .info-menu(role='group')
              ul
                li
                  a.signin(href='#') 로그인
                li
                  a.signup(href='#') 회원가입
                li
                  a.community(href='#') 커뮤니티
          .col.col-d-4.col-d-pull-2
            .search
              form#search-form(action="javascript:alert('검색이 완료되었습니다.')", role='search')
                fieldset
                  legend 검색 폼
                  input#search-keyword(type='search', aria-label='검색어 입력상자', required='', placeholder='검색어를 입력하세요')
                  button.btn-search(type='submit') 검색
</template>
