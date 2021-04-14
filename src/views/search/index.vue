<template>
  <div class="search">
    <NavBar>
      <svg class="icon" aria-hidden="true" slot="left" @click="routerJump">
        <use xlink:href="#iconfanhui" />
      </svg>
      <span slot="center">搜索</span>
    </NavBar>
    <form>
      <input type="text" placeholder="请输入搜索的商家或商品" v-model="key"/>
      <button type="button" class="x" v-show="key" @click="removeKey">x</button>
      <button type="button" @click="searchClick">搜索</button>
    </form>
    <ShopsList :shops="searchList" name="商家" v-if="searchList.length !== 0"/>
  </div>
</template>

<script>
import {getSearch} from '@/network/search'
import NavBar from '@/components/contant/NavBar/NavBar'
import ShopsList from '@/components/contant/ShopsList'
export default {
  components: {
    NavBar,
    ShopsList
  },
  data() {
    return {
      key:'',
      searchList:[]
    }
  },
  methods: {
    routerJump() {
      this.$router.go(-1)
    },
    async searchClick(){
      let res = await getSearch(this.key)
      if(res.data.code !== 200) return
      this.searchList = res.data.result
      console.log(this.searchList);
      
    },
    removeKey(){
      this.key = '',
      this.searchList = []
    }
  }
}
</script>
<style lang="scss" scoped>
.search {
  background-color: #f5f5f5;
  height: 100vmax;
  // margin-bottom: 50px;
  overflow: hidden;
  form {
    position: relative;
    display: flex;
    width: 96%;
    height: 80px;
    background-color: #fff;
    margin: 10px auto 0 auto;
    border-radius: 7px;
    align-items: center;
    padding: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    input,
    button {
      border: none;
      outline: none;
      
    }
    input{
      height: 36px;
      border-bottom: 1px solid #e4eee4;
      flex: 1;
      padding-right: 30px;
    }
    .x {
      position: absolute;
      right: 100px;
      top: 30px;
      width: 20px;
      height: 20px;
      background-color: #fff;
      color: #cacaca;
      border-radius: 50%;
      border: 1px solid #cacaca;
      line-height: 16px;
      font-size: 20px;
      text-align: center;
    }
    button {
      background-color: #3190e8;
      color: #fff;
      width: 80px;
      height: 40px;
      border-radius: 7px;
      margin-left: 10px;
    }
  }
}
</style>