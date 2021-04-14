<template>
  <div class="tab-bar">
      <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.tab-bar {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 49px;
    text-align: center;
    align-items: center;
    background-color: #fff;
    border-top: 1px solid #f7eeee;
}
</style>