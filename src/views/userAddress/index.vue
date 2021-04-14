<template>
  <div class="user-address">
    <NavBar>
      <svg class="icon" aria-hidden="true" slot="left" @click="routerJump">
        <use xlink:href="#iconfanhui" />
      </svg>
      <span slot="center">设置收货地址</span>
    </NavBar>
    <ul class="my-ul">
      <li>
        <p>当前城市</p>

        <p>
          <input type="text" v-model="city" />
        </p>
      </li>
      <li class="li-2">
        <p>详细地址</p>

        <p>
          <input type="text" placeholder="请输入详细地址" v-model="address" @keyup.enter="search" />
        </p>
        <button type="button" @click="search">搜索</button>
        <ul v-show="isShow">
          <li
            v-for="(item, index) in searchAddress"
            :key="index"
            @click="itemClick(item)"
          >{{item.title}}</li>
        </ul>
      </li>
    </ul>
   <ul>
       <li>收货人<input type="text" v-model="name"></li>
       <li>手机号<input type="text" v-model="phone"></li>
   </ul>
    <button type="button" :class="active" @click="submit">确定地址</button>
  </div>
</template>

<script>
import { getCity, search, setAddress } from '@/network/userAddress'
import NavBar from '@/components/contant/NavBar/NavBar'
export default {
  components: {
    NavBar
  },
  data() {
    return {
      city: '',
      address: '',
      searchAddress: [],
      isShow: false,
      phone:'',
      name:'',
      addressInfo:{}
    }
  },
  methods: {
    routerJump() {
      this.$router.go(-1)
    },
    async getCity() {
      let res = await getCity()
      this.city = res.data.cityMessage.city
    },
    async search() {
      let res = await search(this.address, this.city)
      console.log(res.data)
      this.searchAddress = res.data.address
      this.isShow = true
    },
    itemClick(item) {
      this.address = item.title
      this.addressInfo = item
      this.isShow = false
    },
    async submit(){
        if(!this.address || !this.phone || !this.name) return
        let res = await setAddress(this.name,this.phone,this.addressInfo)
        this.$router.go(-1)
    }
  },
  created() {
    this.getCity()
  },
  computed: {
    active() {
      return !this.address || !this.phone || !this.name ? 'active' : 'submit'
    }
  }
}
</script>

<style lang="scss" scoped>
.user-address {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 99;
  ul {
    width: 96%;
    margin: 10px auto;
    border: 1px dashed #e4e4e4;
    border-radius: 14px;
    padding: 10px;
    list-style: none;
    li {
      input {
        outline: none;
        border: none;
        width: 100%;
        border-bottom: 1px solid #e6e6e6;
        line-height: 40px;
      }
    }
    li.li-2 {
      margin-top: 10px;
      position: relative;
      button {
        position: absolute;
        right: 0;
        top: 30px;
        outline: none;
        border: none;
        background-color: #3190e8;
        color: #fff;
        padding: 4px;
        font-size: 12px;
        border-radius: 18px;
      }
      ul {
        position: absolute;
        border: none;
        height: 300px;
        overflow: auto;
        top: 49px;
        background-color: #f1f1f1;
        li {
          line-height: 40px;
          background-color: #f1f1f1;
          padding-left: 10px;
        }
      }
    }
  }
  .submit {
    width: 96%;
    display: block;
    outline: none;
    border: none;
    background-color: #3190e8;
    color: #fff;
    padding: 10px;
    border-radius: 14px;
    margin: 0 auto 0 auto;
  }
  .active {
    width: 96%;
    display: block;
    outline: none;
    border: none;
    background-color: #e4e4e4;
    color: #fff;
    padding: 10px;
    border-radius: 14px;
    margin: 0 auto 0 auto;
  }
  ul:nth-of-type(2) {
      li {
          display: flex;
          line-height: 40px;
          input {
              width: 70%;
            margin-left: 10px;
          }
      }
  }
}
</style>