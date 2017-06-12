<template lang="pug">
// Introduction.vue
.introduction
  .pv-4.ta-c(:class="{ 'bc-grey-subtle': hasGreyBackground }")
    h4(v-html='introductionText')
</template>

<script>
export default {
  name: 'introduction',
  props: {
    introductionText: { default: 'Introduction Placeholder Content' },
    hasGreyBackground: { default: false }
  }
}
</script>

<style>

</style>
