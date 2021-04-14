<template>
  <div class="goods">
    <NavBar>
      <svg class="icon" aria-hidden="true" slot="left" @click="routerJump">
        <use xlink:href="#iconfanhui" />
      </svg>
      <span slot="center">{{shops.shopname}}</span>
    </NavBar>
    <ShopsNav :name="shops.shopname" :img="shops.img" />
    <div class="nav-bar">
      <a @click="showClick(0)">
        <span :class="{active:goodsShow}" >商品</span>
      </a>
      <a @click="showClick(1)">
        <span :class="{active:commShow}" >评价</span>
      </a>
    </div>
    <GoodsList :goods="goods" :shops="shops" v-if="Object.keys(goods).length !== 0"/>
  </div>
</template>

<script>
import { getShopsInfo,getGoods } from '@/network/goods'
import NavBar from '@/components/contant/NavBar/NavBar'
import ShopsNav from './childComps/ShopsNav'
import GoodsList from './childComps/GoodsList'
export default {
  components: {
    NavBar,
    ShopsNav,
    GoodsList
  },
  data() {
    return {
      shops: {},
      goodsShow:true,
      commShow:false,
      goods:{}
    }
  },
  created() {
    this.getShopsInfo()
    this.getGoods()
  },
  methods: {
    routerJump() {
      this.$router.go(-1)
    },

    async getShopsInfo() {
      let res = await getShopsInfo(this.$route.params.id)
      this.shops = res.data.shops
      
    },

    async getGoods(){
      let res = await getGoods(this.$route.params.id)
      this.goods = res.data.goods

    },

    showClick(id){
        if(id){
            this.commShow = true
            this.goodsShow = false
        }else {
            this.commShow = false
            this.goodsShow = true
        }
    }
  }
}
</script>

<style lang="scss" scoped>
.goods {
  z-index: 99;
  position: absolute;
  height: 100vh;
  width: 100%;
  background-color: #fff;
  .nav-bar {
    width: 100%;
    height: 49px;
    a {
      display: inline-block;
      width: 50%;
      text-align: center;
      line-height: 49px;
      border-bottom: 1px solid #e4e4e4;
    }
    .active {
        border-bottom: 5px solid #3190e8;
        padding-bottom: 2px;
    }
  }
}
</style>