<template>
  <div class="city">
    <NavBar>
      <span slot="left">ele</span>
      <span slot="right" @click="isUser">{{isLogin}}</span>
    </NavBar>
    <Current :city="city"/>
    <CityList
      :citylist="cityList"
      v-if="Object.keys(cityList).length !== 0"
    />
    <router-view></router-view>
  </div>
</template>

<script>
import { getCity, getCityList } from '@/network/city'

import NavBar from '@/components/contant/NavBar/NavBar'
import Current from './childComps/Current'
import CityList from './childComps/CityList'

import {myLogin} from '@/mixins'

export default {
  components: {
    NavBar,
    Current,
    CityList
  },
  mixins:[myLogin],
  data() {
    return {
      city: '',
      cityList: {}
    }
  },
  methods: {
    async getCity() {
      let res = await getCity()
      this.city = res.data.cityMessage.district
    },

    async getCityList() {
      let res = await getCityList()
      if (res.data.code !== 200) return
      let cityList = {}
      for (let i = 65; i <= 90; i++) {
        if (res.data.city_list[String.fromCharCode(i)]) {
          cityList[String.fromCharCode(i)] =
            res.data.city_list[String.fromCharCode(i)]
        }
      }
      this.cityList = cityList
    }
  },
  created() {
    this.getCity()
    this.getCityList()
  }
}
</script>

<style lang="scss" scoped>
.city {
  position: absolute;
  height: 100vh;
  width: 100%;
  z-index: 99;
  background: #faf8f8;
}
</style>