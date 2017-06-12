
<template lang="pug">
.title-primary(:class="{ 'bottom': isAboveGrey, 'top': !isAboveGrey }")
  .title-primary__box.tt-u.ta-c
    p.d-ib.bc-black.c-white.pv-1.ph-2.ls-4 {{ titleText }}
</template>



<script>
export default {
  name: 'title',
  props: {
    titleText: { default: 'PH Title' },
    isAboveGrey: { default: false }
  }
}
</script>



<style scoped>
.title-primary__box {

}

.bottom {
  transform: translateY(50%);
}

.top {
  transform: translateY(-50%);
}
</style>
