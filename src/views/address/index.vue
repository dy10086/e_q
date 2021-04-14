<template>
  <div class="adder">
    <NavBar>
      <svg class="icon" aria-hidden="true" slot="left" @click="back">
        <use xlink:href="#iconfanhui" />
      </svg>
      <span slot="center">{{city}}</span>
    </NavBar>
    <form>
      <input type="text" v-model="search" placeholder="请输入地址">
      <button class="x" type="button" v-show="isShow" @click="removeSearch">x</button>
      <button type="button" class="search" @click="searchClick">搜索</button>
    </form>
    <List :addressList="addressList"/>
  </div>
</template>

<script>
import {search} from '@/network/address'
import NavBar from '@/components/contant/NavBar/NavBar'
import List from './childComps/List'
export default {
  components: {
    NavBar,
    List
  },
  data() {
    return {
      city: '',
      search:'',
      addressList:[]
    }
  },
  created() {
    this.city = this.$route.params.city
  },
  methods: {
    back(){
      this.$router.go(-1)
    },
    removeSearch(){
      this.search = ''
      this.addressList = []
    },
    async searchClick(){
      let res = await search(this.search,this.city)
      if(res.data.code !== 200) return
      this.addressList = res.data.address 
    }
  },
  computed:{
    isShow(){
      return this.search ? true : false
    }
  }
}
</script>

<style lang="scss" scoped>
.adder {
  position: absolute;
  z-index: 99;
  width: 100%;
  height: 100vh;
  background: #faf8f8;
  form {
    position: relative;
    width: 96%;
    margin: 10px auto 0 auto;
    padding: 6px;
    background-color: #fff;
    border-radius: 7px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    input {
      outline: none;
      border: none;
      border-bottom:1px solid #e4e4e4; 
      line-height: 30px;
      padding-right: 16px;
    }
    button {
      border: none;
      outline: none;
    }
    button.search {
      margin-top: 10px;
      background-color: #3190e8;
      line-height: 30px;
      border-radius: 7px;
      color: #fff;
    }
    button.x {
      position: absolute;
      right: 10px;
      top: 12px;
      width: 10px;
      height: 10px;
      background-color: #fff;
    }
  }
}
</style>