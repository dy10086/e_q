<template>
  <div class="nav-bar">
    <div class="left">
        <slot name="left"></slot>
    </div>
    <div class="center">
        <slot name="center"></slot>
    </div>
    <div class="right">
        <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 49px;
  background-color: #3190e8;
  padding: 0 10px;
  color: #fff;
  .left,
  .center,
  .right {
    overflow: hidden; //超出的文本隐藏
    text-overflow: ellipsis; //溢出用省略号显示
    white-space: nowrap; //溢出不换行 （只显示一行）
  }
  .left,
  .right {
    width: 80px;
  }
  .right {
    text-align: center;
  }
}
</style>