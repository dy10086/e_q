<template>
  <div class="current" @click="routerJump">
    <p>
      <span>当前定位</span>
      <i>定位不准确时请在城市列表选择</i>
    </p>
    <p>
      <span>{{city}}</span>
      <svg class="icon my-icon" aria-hidden="true">
        <use xlink:href="#iconfanhui1" />
      </svg>
    </p>
  </div>
</template>

<script>
export default {
  props:{
    city:{
      type:String,
      default:''
    }
  },
  methods: {
    routerJump(){
      this.$router.push('/address/' + this.city)
    }
  },
}
</script>
<style lang="scss" scoped>
.current {
  width: 96%;
  border-radius: 7px;
  background-color: #fff;
  margin: 10px auto;
  p {
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
  }
  p:nth-of-type(1) {
    margin-top: 4px;
    line-height: 30px;
    i {
      font-size: 12px;
    }
  }
  p:nth-of-type(2) {
    line-height: 40px;
    font-weight: 800;
    .my-icon {
      position: relative;
      top: 13px;
    }
  }
}
</style>