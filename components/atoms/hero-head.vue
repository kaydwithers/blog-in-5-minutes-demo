
<template lang="pug">
.hero-head
  img(src="~assets/logo.jpg" alt="Logo")
  hamburger

  transition(name='fade')
    div(v-show='$store.state.menuActive')
      .navigation__overlay

      .navigation__overlay-content
        p(class='h1  fw-6  ph-3  d-ib-m+')
          a.c-grey.hover-white About

        p(class='h1  fw-6  ph-3  d-ib-m+')
          a.grey.hover-white Contact
</template>



<script>
import Hamburger from '~/components/atoms/hamburger'

export default {
  name: 'hero-head',
  components: {
    Hamburger
  }
}
</script>



<style>

  .navigation {
    color: #fff;
  }

  .navigation__overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
  }

  .navigation__overlay-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    width: 100%;
    text-align: center;
  }

</style>
