
<template lang="pug">
.hamburger
  .ta-r
    button( 
      @click="$store.commit('toggleMenu')"
      aria-controls="menu" 
      class="hamburger-icon  pt-3  pb-3  pl-3  z-4" 
      aria-label="menu" 
      aria-hidden="false" 
      tabindex="0" 
      aria-expanded="false"
    )
      .bar-wrapper( 
        :class="{ 'is-active': $store.state.menuActive }"
      )
        .bar
        .bar
        .bar
</template>



<script>

</script>



<style>

.hamburger-icon {
  background-color: transparent;
  border: 0;
  cursor: pointer;
  outline: 0;
  position: relative;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  -moz-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
}

.bar-wrapper {
  width: 27px;
  height: 100%;
  position: relative;
}

.bar {
  width: 27px;
  height: 3px;
  background-color: #fff;
  border-radius: 2px;
  margin: auto;
  top: 50%;
  right: 0;
  position: absolute;
  transition: margin 0.1s, width 0.1s, background 0.1s 0.1s;
  transition-timing-function: ease-out;
}

.bar:nth-child(1) {
  right: auto;
  left: 0;
  transition: margin 0.1s, width 0.3s, background 0.1s 0.1s;
  margin-top: -9px;
  animation: runHamburgerTopBar 0.75s 0.15s;
  animation-timing-function: ease;
}

.bar:nth-child(3) {
  margin-top: 9px;
  animation: runHamburgerBottomBar 0.75s 0.15s;
  animation-timing-function: ease;
}

.hamburger-icon:hover .bar:nth-child(1) {
  width: 21.6px;
}

.hamburger-icon:hover .bar:nth-child(2) {
  width: 22.95px;
}

.bar-wrapper.is-active .bar:nth-child(1) {
  width: 27px;
  margin-top: 0;
  animation: crossHamburgerTopBar 0.3s 0.15s forwards;
  animation-timing-function: ease-out;
}

.bar-wrapper.is-active .bar:nth-child(2) {
  width: 0;
}

.bar-wrapper.is-active .bar:nth-child(3) {
  margin-top: 0;
  animation: crossHamburgerBottomBar 0.3s 0.15s forwards;
  animation-timing-function: ease-out;
}

@keyframes runHamburgerTopBar {
  0%   { transform: rotate(-4deg); }
  25%  { transform: rotate(4deg); }
  50%  { transform: rotate(-2deg); }
  100% { transform: rotate(0deg); }
}

@keyframes runHamburgerBottomBar {
  0%   { transform: rotate(4deg); }
  25%  { transform: rotate(-4deg); }
  50%  { transform: rotate(2deg); }
  100% { transform: rotate(0deg); }
}

@keyframes crossHamburgerTopBar {
  0%   { transform: rotate(0deg); }
  25%  { transform: rotate(-55deg); }
  50%  { transform: rotate(-40deg); }
  100% { transform: rotate(-45deg); }
}

@keyframes crossHamburgerBottomBar {
  0%   { transform: rotate(0deg); }
  25%  { transform: rotate(50deg); }
  50%  { transform: rotate(40deg); }
  100% { transform: rotate(45deg); }
}

</style>
