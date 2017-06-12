<template lang="pug">
.about
  Hero

  ul
    li(v-for='post in posts')
      Card(:post='post')

  Introduction(
    introductionText='Baigents offers quality and innovation, Consulting Engineering, <br />Project Management and Shop Detailing services.' 
    hasGreyBackground='true'
  )

  TitlePrimary(
    titleText='Our Services'
  )
  CardHolder

  TitlePrimary(
    titleText='Project Types'
    isAboveGrey='true'
  )
  CardHolder(hasGreyBackground='true')

  TitlePrimary(titleText='Recent Projects')
  CardHolder

  Foot
</template>

<script>
import { cdaClient } from '~plugins/contentful-client.js'
import Card from '~components/molecules/card.vue'
import CardHolder from '~components/organisms/card-holder.vue'
import Foot from '~components/organisms/foot.vue'
import Hero from '~components/organisms/hero.vue'
import Hamburger from '~components/atoms/hamburger.vue'
import Introduction from '~components/organisms/introduction.vue'
import Navigation from '~components/navigation.vue'
import TitlePrimary from '~components/atoms/title-primary.vue'

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
    Card,
    CardHolder,
    Foot,
    Hamburger,
    Hero,
    Introduction,
    Navigation,
    TitlePrimary
  }
}
</script>

<style>

</style>
