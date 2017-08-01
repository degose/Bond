<template lang="pug">
  div.container
    .columns
      .column.is-2
        .box
          p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore ullam itaque voluptatibus ducimus delectus sequi quidem id molestiae velit dolore quas, error optio quasi voluptatum corporis laudantium, similique, exercitationem facere.
      .column.is-10
        .card
          .card-content
            .media
              .media-left
                figure.image.is-48x48
                  img(src='http://bulma.io/images/placeholders/96x96.png', alt='Image')
              .media-content
                p.title.is-3 John Smith
                p.subtitle.is-2 @johnsmith
            .content
              | Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              | Phasellus nec iaculis mauris. 
              a @bulmaio
              | .
              a #css
              a #responsive
              br
              small 11:09 PM - 1 Jan 2016
            article.media
              .media-content
                .field
                  p.control.colunm
                    textarea.colunm.textarea(placeholder='Add a comment...')
                  button.btn Submit
        

</template>

<style lang="sass">
.btn


</style>
