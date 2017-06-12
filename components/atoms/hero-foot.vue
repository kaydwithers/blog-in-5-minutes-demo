
<template>
  <div class="navigation-sub  ta-r">

    <p class="h6">
      <a 
        class="pt-3  pl-3"
        href="#" 
        v-scroll-to="{
          el: '#portfolio',
          duration: 500,
          easing: 'ease',
        }"
      >

        <svg id="arrow-down" class="arrow-down  pr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 84.8 84.4"><title>Arrow down</title><g><polygon fill="#fff" points="1.4,42 9.7,33.7 36.4,60.4 36.4,1 48.3,1 48.3,60.4 75.1,33.6 83.4,42 42.4,83"/><path fill="#fff" d="M47.3,2v60.8L75.1,35l6.9,7L42.4,81.6L2.8,42l6.9-6.9l27.7,27.7V2H47.3 M49.3,0h-2h-9.9h-2v2v56L11.1,33.7 l-1.4-1.4l-1.4,1.4l-6.9,6.9L0,42l1.4,1.4L41,83l1.4,1.4l1.4-1.4l39.6-39.6l1.4-1.4l-1.4-1.4l-6.9-7l-1.4-1.4l-1.4,1.4L49.3,58V2V0 L49.3,0z"/></g></svg>

          Scroll <span>to view portfolio</span>
      </a>
    </p>

  </div>
</template>



<script>

</script>



<style scoped>

  .navigation-sub {
    color: white;
  }

  .navigation-sub a span {
    color: var(--grey);
    transition: color var(--transition)
  }

  .navigation-sub a:hover span {
    color: white;
  }

  .navigation-sub__content {

  }

  .arrow-down {
    width: .7rem;
  }

</style>
