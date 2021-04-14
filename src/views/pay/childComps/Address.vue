<template>
  <div class="address">
    <div @click="routerJump">
      <h4>{{address}}</h4>
      <p v-show="isShow">{{addressInfo.name + ' ' + addressInfo.phone}}</p>
      <svg class="icon my-icon2" aria-hidden="true">
        <use xlink:href="#iconfanhui1" />
      </svg>
    </div>
    <p>
      在线支付
      <svg class="icon my-icon1" aria-hidden="true">
        <use xlink:href="#iconfanhui1" />
      </svg>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    addressInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    address() {
      return Object.keys(this.addressInfo).length === 0
        ? '暂无地址信息'
        : this.addressInfo.address
    },
    isShow() {
      return Object.keys(this.addressInfo).length === 0 ? false : true
    }
  },
  methods: {
    routerJump(){
      this.$router.push('/useraddress')
    }
  },
}
</script>

<style lang="scss" scoped>
.address {
  width: 96%;
  background-color: #fff;
  border-radius: 7px;
  margin: 10px auto 0 auto;
  padding: 0 10px;
  div {
    position: relative;
    h4 {
      padding-top: 10px;
    }
    p {
      font-size: 14px;
    }
    .my-icon2 {
      font-size: 14px;
      position: absolute;
      right: 6px;
      top: 12px;
    }
  }
  div + p {
    line-height: 30px;
    position: relative;
    .my-icon1 {
      font-size: 14px;
      position: absolute;
      right: 6px;
      top: 4px;
    }
  }
}
</style>