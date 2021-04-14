<template>
  <div class="profile">
    <NavBar>
      <svg class="icon" aria-hidden="true" slot="left" @click="routerJump">
        <use xlink:href="#iconfanhui" />
      </svg>
      <span slot="center">我的</span>
    </NavBar>
    <Login :name="name" :img="img"/>
    <p class="exit" v-if="isShow" @click="exitLogin">退出登录</p>
  </div>
</template>

<script>
import {getUser} from '@/network/profile'
import NavBar from '@/components/contant/NavBar/NavBar'
import Login from './childComps/Login'
export default {
  components: {
    NavBar,
    Login
  },
  data() {
    return {
      name: '',
      img:'',
      isShow:false
    }
  },
  methods: {
    routerJump(){
      this.$router.go(-1)
    },

    async getUser(){
      let res = await getUser()
      this.name = res.data.user.username
      this.img = 'http://192.168.0.103:3000/uploads/usersimg/' + res.data.user.img
      window.localStorage.setItem('user_name',this.name)
    },

    exitLogin() {
      window.localStorage.removeItem('token')
      window.localStorage.removeItem('user_name')
      this.name = ''
      this.img = ''
      this.isShow = false
    }
  },
  created() {
    if(window.localStorage.getItem('token')){
      this.getUser()
      this.isShow = true
    }
  }
}
</script>

<style lang="scss" scoped>

.exit {
  width: 90%;
  background-color: rgb(231, 23, 23);
  color: #fff;
  border-radius: 12px;
  line-height: 40px;
  text-align: center;
  margin: 20px auto 0 auto;
}
</style>