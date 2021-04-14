<template>
  <div class="tab-bar-item" @click="itemClick">
    <div class="div-icon" :class="{active:isActive}">
      <slot name="icon"></slot>
    </div>
    <div class="div-text" :class="{active:isActive}">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    path: {
      type: String
    }
  },
  methods: {
    itemClick() {
      if (this.path === this.$route.fullPath) return
      this.$router.push(this.path)
    }
  },
  computed:{
    isActive(){
      return this.path === this.$route.fullPath ? 'active' : ''
    }
  }
}
</script>

<style lang="scss" scoped>
.tab-bar-item {
  flex: 1;
  .div-icon {
    font-size: 20px;
  }
  .div-text {
    font-size: 12px;
  }
}
.active {
  color:#3190e8;
}
</style>