<template>
  <div class="goods-list">
    <ul class="left">
      <li v-for="(value,key) in goods" :key="value.id">{{key}}</li>
    </ul>
    <div class="right">
      <div v-for="(value,key) in goods" :key="value.id">
        <h4>{{key}}</h4>
        <ul>
          <li v-for="item in value" :key="item.id" @click="addGoods(item)">
            <img :src="'http://192.168.0.103:3000/uploads/goodsImg/' + item.img" alt />
            <div>
              <h3>{{item.goods_name}}</h3>
              <p>{{'￥' + item.price}}</p>
              <svg class="icon my-icon" aria-hidden="true">
                <use xlink:href="#iconNMStubiao-" />
              </svg>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="bottom">
      <div class="price">
        <h4>￥{{price}}</h4>
        <p>配送费￥{{shops.psf}}</p>
      </div>
      <span v-if="isShow">还差￥{{shops.startmoney -(shops.psf+price)}}起送</span>
      <span v-else class="js" @click="goPay">去结算</span>
      <div class="icon-box" @click="cartClick">
        <svg class="icon gwc" aria-hidden="true">
          <use xlink:href="#icon03f" />
        </svg>
        <span v-show="isSum">{{sum}}</span>
      </div>
    </div>
    <div class="goods-car" v-show="CartIsShow" @click.self="cartClick">
      <ul>
        <li>
          已购菜单
          <span @click="removeCart">清空</span>
        </li>
        <li v-for="(item,key) in $store.state.goodsCart[shops.id]" :key="key">
          <div class="add-sub">
            <h4>{{item.name}}</h4>
            <div class="add-sub-item">
              <span>￥{{(item.price + item.packing) * item.num}}</span>
              <div>
                <svg
                  class="icon my-icon"
                  aria-hidden="true"
                  @click="addSubCart(item.id,false,item.price,item.packing)"
                >
                  <use xlink:href="#iconjian" />
                </svg>
                <i>{{item.num}}</i>
                <svg
                  class="icon my-icon"
                  aria-hidden="true"
                  @click="addSubCart(item.id,true,item.price,item.packing)"
                >
                  <use xlink:href="#iconjia" />
                </svg>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goods: {
      type: Object,
      default: {}
    },
    shops: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      price: 0,
      CartIsShow: false
    }
  },
  created() {
    if (this.$store.state.goodsCart[this.shops.id]) {
      let goods = this.$store.state.goodsCart[this.shops.id]
      for (var key in goods) {
        this.price += (goods[key].price + goods[key].packing) * goods[key].num
      }
      this.price += goods[key].psf
    }
  },
  computed: {
    isShow() {
      return this.shops.startmoney - (this.shops.psf + this.price) >= 0
        ? true
        : false
    },
    isSum() {
      return this.$store.state.goodsCart[this.shops.id] ? true : false
    },
    sum() {
      if (!this.$store.state.goodsCart[this.shops.id]) return 0
      let sum = 0
      for (let key in this.$store.state.goodsCart[this.shops.id]) {
        sum += this.$store.state.goodsCart[this.shops.id][key].num
      }
      return sum
    }
  },
  methods: {
    addGoods(item) {
      this.price += item.price + item.packing
      this.$store.commit('addCart', {
        goods: item,
        shopId: this.shops.id,
        psf: this.shops.psf
      })
    },
    cartClick() {
      if (!this.$store.state.goodsCart[this.shops.id]) return
      this.CartIsShow = !this.CartIsShow
    },
    removeCart() {
      this.$store.commit('removeCart', this.shops.id)
      this.CartIsShow = false
      this.price = 0
    },
    addSubCart(goodsId, isAdd, price,packing) {
      this.$store.commit('addSubCart', {
        shopId: this.shops.id,
        goodsId,
        isAdd
      })

      if (!this.$store.state.goodsCart[this.shops.id]) {
        this.price -= price + packing
        return (this.CartIsShow = false)
      }
      // goods对象地址指向goodsCart修改goods就可以影响
      let goods = this.$store.state.goodsCart[this.shops.id][goodsId]
      
      if (isAdd) {
        this.price += goods.price + goods.packing
      } else {
        this.price -= goods.price + goods.packing
      }
    },
    goPay() {
      this.$router.push('/pay/' + this.shops.id)
    }
  }
}
</script>

<style lang="scss" scoped>
.goods-list {
  display: flex;
  flex-flow: nowrap;
  .left {
    width: 25%;
    height: 100vh;
    background-color: #f9f9f9;
    li {
      line-height: 49px;
      text-align: center;
      border-bottom: 1px solid #e4e4e4;
    }
  }
  .right {
    height: 100vh;
    flex: 1;
    div {
      h4 {
        line-height: 40px;
        width: 100%;
        background-color: #f9f9f9;
        padding-left: 14px;
      }
      ul {
        list-style: none;
        li {
          display: flex;
          height: 90px;
          border-bottom: 1px solid #f9f9f9;
          align-items: center;
          position: relative;
          img {
            width: 80px;
            height: 80px;
            border-radius: 14px;
            margin: 0 10px;
          }
          p {
            font-size: 18px;
            color: #f60;
            margin-top: 10px;
          }
          .my-icon {
            position: absolute;
            right: 10px;
            bottom: 10px;
          }
        }
      }
    }
  }
  .bottom {
    position: fixed;
    display: flex;
    z-index: 10;
    bottom: 0;
    left: 0;
    right: 0;
    height: 49px;
    background-color: #333;
    color: #fff;
    .icon-box {
      position: absolute;
      border-radius: 50%;
      box-shadow: 0 0 2px #ddd;
      background-color: #333;
      width: 60px;
      line-height: 60px;
      text-align: center;
      top: -20px;
      left: 19px;
      font-size: 38px;
      span {
        position: absolute;
        display: block;
        top: -2px;
        left: 44px;
        width: 20px;
        line-height: 20px;
        border-radius: 50%;
        background-color: #ff461d;
        color: #fff;
        font-size: 16px;
      }
    }
    .price {
      margin-left: 100px;
      width: 150px;
      h4 {
        margin-top: 6px;
        font-size: 20px;
      }
      p {
        font-size: 12px;
      }
    }
    span {
      display: block;
      line-height: 49px;
      text-align: center;
      flex: 1;
      background-color: #555;
    }
    .js {
      background-color: #4cd964;
    }
  }
  .goods-car {
    position: fixed;
    top: 0;
    width: 100%;
    height: calc(100vh - 49px);
    background-color: rgba(59, 53, 53, 0.4);
    display: flex;
    flex-direction: column-reverse;
    ul {
      width: 100%;
      list-style: none;
      li:nth-of-type(1) {
        background-color: #e4e4e4;
        display: flex;
        justify-content: space-between;
        padding: 0 10px;
      }
      li {
        line-height: 40px;
        background-color: #fff;
      }
    }
    .add-sub {
      display: flex;
      justify-content: space-between;
      margin-left: 10px;
      .add-sub-item {
        width: 180px;
        display: flex;
        justify-content: space-between;
        span {
          color: #f60;
        }
        div {
          padding-right: 18px;
          i {
            font-style: normal;
            margin: 0 10px;
            display: inline-block;
            width: 40px;
            text-align: center;
          }
          .my-icon {
            font-size: 19px;
            color: #3190e8;
          }
        }
      }
    }
  }
}
</style>