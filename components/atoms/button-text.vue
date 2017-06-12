
<template lang="pug">
a.btn.btn--text(target='_blank', :href='buttonHref')
  | {{ buttonText }} 
  span(aria-hidden='true') {{ buttonIcon }}
</template>



<script>
  export default {
    name: 'buttontext',
    props: {
      buttonHref: { default: '#' },
      buttonText: { default: 'Learn More' },
      buttonIcon: { default: '↛' }
    }
  }
</script>



<style lang="sass?outputStyle=expanded">

  .btn--text {
    bottom: -6px;
    color: #000;
    display: inline-block;
    font-size: .8rem !important;
    position: relative;
    overflow: hidden;
    padding-bottom: 2px !important;
    padding-left: 0 !important;
    padding-right: 0 !important;
    font-style: normal !important;
  }

  .btn--text:after,
  .btn--text:before {
    background: #171719;
    bottom: -1px;
    content: '';
    display: block;
    height: 1px;
    left: 0;
    margin-bottom: 4px;
    position: absolute;
    width: 100%;
  }

  .btn--text:before {
    opacity: .35;
    transition: 
      background .8s cubic-bezier(.19, 1, .22, 1), 
      transform .5s cubic-bezier(1, 0, 0, 1) .1s;
  }

  .btn--text:after {
    transform: translate3d(-102%, 0, 0);
    transition: 
      background .8s cubic-bezier(.19, 1, .22, 1), 
      transform .8s cubic-bezier(.19, 1, .22, 1);
  }

  .btn--text:hover:before {
    transform: translate3d(102%, 0, 0);
    transition: 
      background .6s cubic-bezier(.19, 1, .22, 1), 
      transform .6s cubic-bezier(.19, 1, .22, 1) .1s;
  }

  .btn--text:hover:after {
    transform: translate3d(0, 0, 0);
    transition: 
      background .6s cubic-bezier(.19, 1, .22, 1), 
      transform .6s cubic-bezier(.19, 1, .22, 1) .05s;
  }

</style>
