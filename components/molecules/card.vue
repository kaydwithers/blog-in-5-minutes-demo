
<template lang="pug">
.card.layout__item
  img.thumb.mb-2(
    :src="post.fields.heroImage.fields.file.url + '?fit=scale&w=350&h=196'"
    :srcset="`${post.fields.heroImage.fields.file.url}?w=350&h=196&fit=fill 350w, ${post.fields.heroImage.fields.file.url}?w=1000&h=562&fit=fill 1000w, ${post.fields.heroImage.fields.file.url}?w=2000&h=1125&fit=fill 2000w`"
    sizes='(min-width: 1024px) 400px, 100vw'
    :alt='post.fields.heroImage.fields.description'
  )
  h5.c-black {{ post.fields.title }}
  VueMarkdown {{ post.fields.body }}
  ButtonText(
    buttonHref="" 
    buttonText="Learn more"
  )
  p Hello
</template>



<script>
import ButtonText from '~components/atoms/button-text.vue'
import VueMarkdown from 'vue-markdown'

export default {
  name: 'card',
  components: {
    ButtonText,
    VueMarkdown
  },
  props: ['post']
}
</script>



<style>

</style>
