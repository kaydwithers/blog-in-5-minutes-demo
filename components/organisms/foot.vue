
<template lang="pug">
.foot
  .pv-4.ta-c
    p.pb-2 Baigents Pty. Ltd.

    p 
      strong Head office 
      | 65 Kooyong Rd,

    p.pb-2 Caulfield North, Victoria 3144

    p 
      strong Phone 
      a(href='tel:+61395095800') +61 (3) 9509 5800
    
    p.pb-3
      strong Fax 
      | +61 (3) 9509 5088

    ButtonPrimary( 
      buttonHref="mailto:melb@baigents.com.au" 
      buttonText="Email Us"
    )
</template>



<script>
import ButtonPrimary from '~components/atoms/button-primary.vue'

export default {
  name: 'foot',
  components: {
    ButtonPrimary
  }
}
</script>



<style>
.foot {
  color: #888;
  background-color: #000;
}
</style>
