import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)
const Home = () => import('@/views/home')
const Search = () => import('@/views/search')
const Order = () => import('@/views/order')
const Profile = () => import('@/views/profile')
const City = () => import('@/views/city')
const Address = () => import('@/views/address')
const Login = () => import('@/views/login')
const Goods = () => import('@/views/goods')
const Pay = () => import('@/views/pay')
const UserAddress = () => import('@/views/userAddress')

const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/search',
    component:Search
  },
  {
    path:'/order',
    component:Order
  },
  {
    path:'/login',
    component:Login
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/city',
    component:City
  },
  {
    path:'/address/:city',
    component:Address
  },
  {
    path:'/goods/:id',
    component:Goods
  },
  {
    path:'/Pay/:shop_id',
    component:Pay
  },
  {
    path:'/useraddress',
    component:UserAddress
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
