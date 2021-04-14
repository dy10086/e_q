<template>
  <div id="app">
    <router-view></router-view>
    <MinTabBar />
  </div>
</template>

<script>
import MinTabBar from '@/components/contant/MinTabBar/MinTabBar'
import '@/assets/font/iconfont.js'
export default {
  components: {
    MinTabBar
  }
}
</script>

<style lang="scss">
@import url(./assets/css/base.css);
@import url(./assets/css/normalize.css);
@import url(./assets/font/iconfont.css);
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>


