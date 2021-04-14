<template>
  <div class="login" @click="routerJump">
    <img :src="isImg" alt />
    <div>
      <h4>{{isName}}</h4>
      <p>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#iconshouji" />
        </svg>
        {{phone}}
      </p>
      <span class="iconfont iconfanhui1 login-icon"></span>
    </div>
  </div>
</template>

<script>

export default {
  props:{
    name:{
      type:String,
      default:'登录/注册'
    },
    phone:{
      type:String,
      default:'暂无手机绑定'
    },
    img:{
      type:String,
      default:'http://192.168.0.103:3000/uploads/MO_REN.jpg'
    }
  },
  methods: {
    routerJump() {
      this.$router.push('/login')
    }
  },
  computed:{
    isName(){
      return this.name ? this.name : '登录/注册'
    },
    isImg(){
      return this.img ? this.img : 'http://192.168.0.103:3000/uploads/MO_REN.jpg'
    }
  }
}
</script>
<style lang="scss" scoped>
.login {
  display: flex;
  width: 96%;
  height: 100px;
  margin: 10px auto 0 auto;
  background-color: #3190e8;
  color: #fff;
  border-radius: 14px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  align-items: center;
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin: 0 10px;
  }
  div {
    flex: 1;
    position: relative;
    h4 {
      margin-bottom: 10px;
    }
    .login-icon {
      position: absolute;
      right: 10px;
      top: 12px;
      color: #fff;
      font-size: 24px;
    }
  }
}
</style>