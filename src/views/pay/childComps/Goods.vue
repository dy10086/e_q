<template>
  <div class="goods">
    <h4 class="shops-name">aaa</h4>
    <ul>
      <li v-for="item in goodsObj" :key="item.id">
        <img :src="'http://192.168.0.103:3000/uploads/goodsImg/' + item.img" alt />
        <div>
          <h4>
            {{item.name}}
            <span>x{{item.num}}</span>
          </h4>
          <p>￥{{item.price}}</p>
        </div>
      </li>
    </ul>
    <p class="my-p">
      包装费
      <span>￥{{bzf}}</span>
    </p>
    <p class="my-p">
      配送费
      <span>￥{{psf}}</span>
    </p>
    <div class="price">
      <p>
        小计￥
        <span>{{price}}</span>
      </p>
    </div>
    <div class="botton">
      <div>
        <p>
          合计：￥
          <span>{{price}}</span>
        </p>
      </div>
      <form>
        <button type="button" @click="submit">提交订单</button>
      </form>
    </div>
  </div>
</template>

<script>
import {setOreder} from '@/network/pay'
export default {
  data() {
    return {
      goodsObj: {},
      shops_psf: 0,
      price_:0
    }
  },
  created() {
    let obj = this.$store.state.goodsCart[this.$route.params.shop_id]
    this.goodsObj = obj
  },
  computed: {
    bzf() {
      let sum = 0
      for (let key in this.goodsObj) {
        sum += this.goodsObj[key].packing
      }
      return sum
    },
    psf() {
      let sum = 0
      for (let key in this.goodsObj) {
        sum += this.goodsObj[key].psf
        this.shops_psf = sum
        return sum
      }
    },
    price() {
      let sum = 0
      for (let key in this.goodsObj) {
        sum +=
          (this.goodsObj[key].price + this.goodsObj[key].packing) *
          this.goodsObj[key].num
      }
      this.price_ = sum + this.shops_psf
      return sum + this.shops_psf
    }
  },
  methods: {
    async submit(){
      let res = await setOreder(this.$route.params.shop_id,this.price_)
      if(res.data.code === 200){
        delete this.$store.state.goodsCart[this.$route.params.shop_id]
        this.$router.replace('/goods/' + this.$route.params.shop_id)
      }
      
    }
  },
}
</script>

<style lang="scss" scoped>
.goods {
  width: 96%;
  margin: 10px auto 0 auto;
  padding: 10px;
  background-color: #fff;
  border-radius: 7px;

  ul {
    list-style: none;
    margin-top: 10px;
    li {
      display: flex;
      img {
        width: 100px;
        border-radius: 14px;
        margin-right: 10px;
      }
      div {
        width: 100%;
        h4 {
          display: flex;
          justify-content: space-between;
          span {
            color: #ff5f3e;
          }
        }
        p {
          line-height: 30px;
          color: #ff5f3e;
        }
      }
    }
  }

  .my-p {
    display: flex;
    justify-content: space-between;
    line-height: 30px;
    font-weight: 800;
  }
  .price {
    display: flex;
    justify-content: flex-end;
    border-top: 1px solid #e4e4e4;
    span {
      font-weight: 800;
      font-size: 22px;
    }
  }
  .botton {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    display: flex;
    justify-content: flex-end;
    line-height: 49px;
    div {
      p {
        span {
          font-size: 22px;
          font-weight: 800;
          color: #ff5f3e;
        }
      }
    }
    form {
      margin: 0 10px;
      button {
        outline: none;
        border: none;
        background-color: #3190e8;
        color: #fff;
        border-radius: 20px;
        padding: 10px;
      }
    }
  }
}
</style>