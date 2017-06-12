<template>
  <div>
    <!-- Blog header -->
    <Navigation></Navigation>
    <h2>Blog</h2>
    <h2>All articles ({{ posts.length }})</h2>
    <ul class="">
      <li class="" v-for="post in posts">
        <article-preview :post="post"></article-preview>
      </li>
    </ul>
  </div>
</template>

<script>
import {cdaClient} from '../../plugins/contentful-client.js'
import Navigation from '~components/navigation.vue'
import ArticlePreview from '~components/article-preview.vue'

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
    ArticlePreview,
    Navigation
  }
}
</script>

<style>

</style>
