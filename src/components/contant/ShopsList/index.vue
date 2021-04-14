<template>
  <div class="shops">
    <h4>{{name}}</h4>
    <ul>
      <li v-for="item in shops" :key="item.id" @click="shopsClick(item.id)">
        <img :src="'http://192.168.0.103:3000/uploads/shopimg/' + item.img" />
        <div>
          <h1>{{item.shopname}}</h1>
          <h2>
            <el-rate
              :value="item.score"
              disabled
              show-score
              text-color="#ff9900"
              score-template="{value}"
            ></el-rate>
            <span>月售:{{item.sales}}单</span>
          </h2>
          <h3>￥{{item.startmoney}}起送/配送费￥{{item.psf}}</h3>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { Rate } from 'element-ui'
import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Rate)
export default {
  props: {
    shops: {
      type: Array,
      default: []
    },
    name:{
        type:String,
        default:''
    }
  },
  methods: {
    shopsClick(id){
      this.$router.push('/goods/' + id)
    }
  },
}
</script>

<style lang="scss" scoped>
.shops {
  margin-top: 20px;
  height: 100%;
  margin-bottom: 49px;
  background-color: #fff;
  border-top: 2px solid #f4f4fc;
  padding: 0 10px;
  h4 {
    font-weight: 400;
    color: #999;
    line-height: 30px;
  }
  ul {
    li {
      height: 100px;
      display: flex;
      border-bottom: 1px solid #e4e4e4;
      img {
        width: 70px;
        height: 70px;
        margin: auto 10px auto 0;
      }
      div {
        width: 100%;
        h1 {
          font-weight: 400;
          font-size: 16px;
        }
        h2 {
          display: flex;
          justify-content: space-between;
          font-weight: 400;
          font-size: 12px;
          .el-rate {
            flex: 1;
          }
          span {
            width: 80px;
            color: #999;
          }
        }
        h3{
          font-weight: 400;
          font-size: 14px;
          color: #999;
          margin-top: 12px;
        }
      }
    }
  }
}
</style>