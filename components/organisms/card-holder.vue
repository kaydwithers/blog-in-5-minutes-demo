
<template lang="pug">
.card-holder
  .page.pv-4(:class="{ 'bc-grey-subtle': hasGreyBackground }")
    .layout.d-f
      ul
        li(v-for='post in posts')
          Card(:post='post')
      p hello
</template>



<script>
import { cdaClient } from '~plugins/contentful-client.js'
import Card from '~components/molecules/card.vue'

export default {
  asyncData ({ params }) {
    return cdaClient.getEntries({
      'content_type': process.env.CTF_BLOG_POST_TYPE_ID,
      order: '-sys.createdAt'
    }).then(entries => {
      return {
        posts: entries.items
      }
    })
  },
  components: {
    Card
  },
  props: {
    hasGreyBackground: { default: false }
  }
}
</script>



<style>

</style>
