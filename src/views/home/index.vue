<template>
  <div class="home">
    <NavBar>
      <svg class="icon" aria-hidden="true" slot="left" @click="routerJump('/search')">
        <use xlink:href="#iconsearch" />
      </svg>
      <span slot="center" @click="routerJump('/city')">{{address.title}}</span>
      <span slot="right" @click="isUser">{{isLogin}}</span>
    </NavBar>
    <HomeSwiper
      class="swiper"
      :swiperList="swiperList"
      v-if="Object.keys(swiperList).length !== 0"
    />
    <ShopsList :shops="shops" name="附近商家"/>
  </div>
</template>

<script>
import NavBar from '@/components/contant/NavBar/NavBar'
import ShopsList from '@/components/contant/ShopsList'
import HomeSwiper from './childComps/HomeSwiper'

import { getSwiperList,getShops } from '@/network/home'

import {myLogin} from '@/mixins'

export default {
  components: {
    NavBar,
    HomeSwiper,
    ShopsList
  },
  mixins:[myLogin],
  data() {
    return {
      swiperList: {},
      address:{
        title: '',
        location:{
          lat:0,
          lng:0
        }
      },
      shops:[]
    }
  },
  methods: {
    routerJump(path) {
      this.$router.push(path)
    },

    async getSwiperList() {
      let res = await getSwiperList()
      this.$set(this.swiperList,'listOne',res.data.listOne)
      this.$set(this.swiperList,'listTwo',res.data.listTwo)
    },

    async getShops(){
      let res = await getShops()
      this.shops = res.data.shops 
    }
  },
  created() {
    this.getSwiperList()
    this.getShops()
    if(window.localStorage.getItem('address')){
      this.address = JSON.parse(window.localStorage.getItem('address'))
    }
  }
  
}
</script>

<style lang="scss" scoped>
.home {
  background-color: #e4e4e4;
  height: 100%;
  // margin-bottom: 50px;
  overflow:hidden;

}
</style>