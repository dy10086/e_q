<template>
  <div class="login">
    <NavBar>
      <svg class="icon" aria-hidden="true" slot="left" @click="routerJump">
        <use xlink:href="#iconfanhui" />
      </svg>
      <span slot="center">账户登录</span>
    </NavBar>
    <form>
      <input type="text" placeholder="账户" v-model="loginInfo.user_name" />
      <input :type="isText" placeholder="密码" v-model="loginInfo.password" />
      <button type="button" @click="login">登录</button>
      <el-switch v-model="value" active-color="#13ce66" inactive-color="#e4e4e4"></el-switch>
    </form>
  </div>
</template>

<script>
import { login } from '@/network/login'
import NavBar from '@/components/contant/NavBar/NavBar'
import { Message } from '@/components/common/MessageBox'

import 'element-ui/lib/theme-chalk/index.css'
import { Switch } from 'element-ui'
import Vue from 'vue'
Vue.use(Switch)

export default {
  components: {
    NavBar
  },
  data() {
    return {
      value: true,
      loginInfo: {
        user_name: '',
        password: ''
      }
    }
  },
  methods: {
    routerJump() {
      this.$router.go(-1)
    },
    async login() {
      let res = await login(this.loginInfo)
      
      if (res.data.code !== 200 && res.data.code !== 201){
        Message({
          text:res.data.message
        })
        return
      } 
      window.localStorage.setItem('token', res.data.token)
      Message({
          text:res.data.message,
          handleOk: () => {
            this.$router.push('/profile')
          }
        })
    }
  },
  computed: {
    isText() {
      return this.value ? 'text' : 'password'
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  position: absolute;
  z-index: 99;
  width: 100%;
  height: 100vh;
  background-color: #f7f7f7;
  form {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 96%;
    margin: 10px auto 0 auto;
    padding: 10px;
    background-color: #fff;
    border-radius: 7px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    input,
    button {
      outline: none;
      border: none;
      height: 40px;
    }
    input {
      border-bottom: 1px dashed #e4e4e4;
      padding-right: 50px;
    }
    button {
      margin-top: 10px;
      background-color: #4cd964;
      border-radius: 7px;
      color: #fff;
    }
    .el-switch {
      position: absolute;
      top: 60px;
      right: 10px;
    }
  }
}
</style>