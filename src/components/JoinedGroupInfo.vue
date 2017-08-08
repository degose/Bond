<template lang="pug">
  div
    .column.is-3
      .card
        .card-image
          figure.image.is-16by9
            img(src='http://bulma.io/images/placeholders/1280x960.png', alt='Image')
        .card-content
          article.media
            .media-content
              p.title.is-4 그룹 이름
              div
                span 멤버 5
                |  · 
                a 
                  span.icon.is-small
                    i.fa.fa-cog(aria-hidden='true')
                  | 그룹 설정
          .content
            | Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            | Phasellus nec iaculis mauris. 
</template>
