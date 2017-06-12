<template>
  <div>

    <!-- Homepage header -->
    <Navigation />

    <img :src="person.fields.image.fields.file.url + '?w=1200'">

    <h2>{{ person.fields.title }}</h2>
    <p>{{ person.fields.shortBio }}</p>

    <h2>Recent articles</h2>
    <ul class="items-list wrapper">
      <li class="item" v-for="post in posts">
        <article-preview :post="post"></article-preview>
      </li>
    </ul>

  </div>
</template>

<script>
import {cdaClient} from '../plugins/contentful-client.js'
import Navigation from '~components/navigation.vue'
import ArticlePreview from '~components/article-preview.vue'

export default {
  asyncData ({ params }) {
    return Promise.all([
      cdaClient.getEntries({
        'sys.id': process.env.CTF_PERSON_ID
      }),
      cdaClient.getEntries({
        'content_type': process.env.CTF_BLOG_POST_TYPE_ID,
        order: '-sys.createdAt'
      })
    ]).then(([entries, posts]) => {
      return {
        person: entries.items[0],
        posts: posts.items
      }
    }).catch(console.error)
  },
  components: {
    Navigation,
    ArticlePreview
  }
}
</script>

<style>

</style>
