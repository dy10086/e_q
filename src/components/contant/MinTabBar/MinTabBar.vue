<template>
  <TabBar>
    <TabBarItem path="/home">
      <svg class="icon" aria-hidden="true" slot="icon">
        <use xlink:href="#iconelema" />
      </svg>
      <span slot="text">外卖</span>
    </TabBarItem>
    <TabBarItem path="/search">
      <svg class="icon" aria-hidden="true" slot="icon">
        <use xlink:href="#iconsearch" />
      </svg>
      <span slot="text">搜索</span>
    </TabBarItem>
    <TabBarItem path="/order">
      <svg class="icon" aria-hidden="true" slot="icon">
        <use xlink:href="#iconicon-test" />
      </svg>
      <span slot="text">订单</span>
    </TabBarItem>
    <TabBarItem path="/profile">
      <svg class="icon" aria-hidden="true" slot="icon">
        <use xlink:href="#iconwode" />
      </svg>
      <span slot="text">我的</span>
    </TabBarItem>
  </TabBar>
</template>

<script>
import TabBar from "@/components/common/TabBar/TabBar"
import TabBarItem from "@/components/common/TabBar/TabBarItem"
export default {
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style lang="scss" scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>