
<template lang="pug">
a.btn.btn--primary(target='_blank', :href='buttonHref')
  | {{ buttonText }} 
  span(aria-hidden='true') {{ buttonIcon }}
</template>



<script>
  export default {
    name: 'buttontext',
    props: {
      buttonHref: { default: 'https://holden.com.au/cars/commodore' },
      buttonText: { default: 'Visit site' },
      buttonIcon: { default: '↛' }
    }
  }
</script>



<style lang="sass?outputStyle=expanded">
.btn {
  display: inline-block;
  font-size: 1rem;
  padding: .5em 1.5em;
  transition: var(--transition);
}

  .btn--primary {
    background-color: #D02E2E;
    color: var(--white);

    &:hover {
      background-color: #B71313;
    }

  }
</style>
