<template>
  <div class="pay">
    <NavBar>
      <svg class="icon" aria-hidden="true" slot="left" @click="routerJump">
        <use xlink:href="#iconfanhui" />
      </svg>
      <span slot="center">确认订单</span>
    </NavBar>
    <Address :addressInfo="addressInfo" />
    <Goods />
  </div>
</template>

<script>
import NavBar from '@/components/contant/NavBar/NavBar'
import Address from './childComps/Address'
import Goods from './childComps/Goods'

import { getAddress } from '@/network/pay'
export default {
  components: {
    NavBar,
    Address,
    Goods
  },
  data() {
    return {
      addressInfo: {}
    }
  },
  methods: {
    routerJump() {
      this.$router.go(-1)
    },

    async getAddress() {
      let res = await getAddress()
      console.log(res.data)
      if (res.data.code !== 200) return
      let obj = res.data.address
      this.addressInfo = obj
    }
  },
  created() {
    this.getAddress()
  }
}
</script>
<style lang="scss" scoped>
.pay {
  position: fixed;
  z-index: 99;
  height: 100%;
  width: 100%;
  background-image: linear-gradient(to top, #fff1eb 0%, #3190e8 100%);
}
</style>