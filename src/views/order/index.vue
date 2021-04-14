<template>
  <div class="orders">
      <NavBar>
      <svg class="icon" aria-hidden="true" slot="left" @click="routerJump">
        <use xlink:href="#iconfanhui" />
      </svg>
      <span slot="center">订单</span>
    </NavBar>
    <ul class="orders-ul" v-if="isShow">
      <li v-for="(item, index) in orders" :key="index" >
        <h4>状态：{{state(item.state)}}</h4>
        <p>订单号：{{item.order_number}}</p>
        <p>价格：{{item.price}}</p>
      </li>
    </ul>
    <h4 v-else class="login-h4">当前未登录</h4>
  </div>
</template>

<script>
import {getOrder} from '@/network/order'
import NavBar from '@/components/contant/NavBar/NavBar'
export default {
  components:{
    NavBar
  },
  data() {
    return {
      orders:[],
      isShow:false
    }
  },
  methods: {
    routerJump(){
      this.$router.go(-1)
    },
    async getOrder(){
      let res = await getOrder()
      console.log(res.data);
      this.orders = res.data.orders
    },
    state(info){
      
      return info ? '已完成' : '未完成'
    }
  },
  created() {
    if(window.localStorage.getItem('token')){
      this.getOrder()
      this.isShow = true
    }
  },
}
</script>

<style lang="scss" scoped>
.orders{
  width: 100%;
  height: 100vh;
  background-color: #f9f9f9;

}
.orders-ul {
  width: 96%;
  margin: 0 auto;
  li {
    border-radius: 7px;
    background-color: #fff;
    margin-top: 10px;
    padding: 10px;
  }
}
.login-h4 {
  margin-top: 100px;
  text-align: center;
}
</style>