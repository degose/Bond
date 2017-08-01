<template lang="pug">
  div
    .container.header
        .grid(role='banner')
          .col.col-m-1.col-t-2.col-t-offset-1.col-d-2
            .logo(aria-labelledby='bond-heading')
              h1.readable-hidden#webcafe-heading 
              //- img(src="./assets/logo-01.svg", :alt="vue.label")
              picture
                source(srcset='/src/assets/logo-02.svg', media='(max-width: 767px)')
                source(srcset='/src/assets/logo-01.svg', media='(min-width: 768px)')
                img.responsive-svg(src='/src/assets/logo-02.svg', alt='')
    login
</template>

<script>
import Login from './Login';

export default {
  name: 'app',
  components: {
    Login,
  },
}
</script>
