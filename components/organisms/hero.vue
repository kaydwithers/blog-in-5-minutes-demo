
<template lang="pug">
.hero.p-r.z-1
  .hero__overlay.p-r.z-1

  .hero__video
    iframe( 
      class="z-1"
      id="ytplayer" 
      src="https://www.youtube.com/embed/c5rWB_fS5ao?controls=0&enablejsapi=1&modestbranding=0&cc_load_policy=1&showinfo=0&rel=0&loop=1&iv_load_policy=3&playlist=euewP7Sp9co" 
      frameborder="0"
    )

  .hero__header.p-r.z-4
    .page
      .layout
        .layout__item
          HeroHead

  .hero__content.p-r.z-3.tt-u.ls-8
    h1.mb-2.fw-6(v-html='heading')
    h2.tt-u(v-html='headingSub')

  .hero__footer.p-r.z-3.pv-2
    .page
      .layout
        .layout__item
          HeroFoot
</template>



<script>
import HeroHead from '~components/atoms/hero-head.vue'
import HeroFoot from '~components/atoms/hero-foot.vue'

export default {
  name: 'hero',
  data () {
    return {
      heading: 'Baigents',
      headingSub: 'Consulting Engineers &amp; Shop Detailers'
    }
  },
  components: {
    HeroHead,
    HeroFoot
  }
}
</script>



<style>

.hero__header {
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
}

.hero__footer {
  bottom: 0;
  left: 0;
  position: absolute;
  width: 100%;
}

  /* is-active */
  #ytplayer {
    opacity: 0;
  }

  #ytplayer.is-active {
    opacity: 1;
  }



  /* Hero */
  .hero {
    background-color: var(--black);
    height: 670px;
    overflow: hidden;
    user-select: none;
  }

  .hero__overlay {
    background: rgba(0, 0, 0, .1);
    background-size: cover;
    height: 100%;
    left: 0;
    position: absolute; 
    top: 0; 
    width: 100%;
  }

  .hero__video {
    pointer-events: none;
  }

    .hero__video iframe {
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      transition: opacity .5s;
      width: 100%;
    }

      @media (min-aspect-ratio: 16/9) {

        .hero__video iframe {
          height: 300%;
          top: -100%;
        }

      }

      @media (max-aspect-ratio: 16/9) {

        .hero__video iframe {
          left: -100%;
          width: 300%;
        }

      }

  .hero__content {
    cursor: default;
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    width: 100%;
    text-align: center;
  }

</style>
