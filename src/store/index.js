import Vue from 'vue'
import Vuex from 'vuex'
import { log } from 'util';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    goodsCart:{},
  },
  mutations: {
    // 添加购物车的商品
    addCart(state,{goods,shopId,psf}){
      
      state.goodsCart[shopId] = state.goodsCart[shopId] || {}
      if(state.goodsCart[shopId][goods.id]){
        state.goodsCart[shopId][goods.id]['num']++
      }else {
        state.goodsCart[shopId][goods.id] = {
          'num': 1,
          "id" : goods.id,
          "price" : goods.price,
          "packing" : goods.packing,
          'name':goods.goods_name,
          'img':goods.img,
          'psf':psf
        }
      }
      state.goodsCart = JSON.parse(JSON.stringify(state.goodsCart))
    },
    // 加减购物车商品
    addSubCart(state,{shopId,goodsId,isAdd}){
      let num = state.goodsCart[shopId][goodsId]['num']
      if(isAdd){
        num++
      }else {

        if(state.goodsCart[shopId][goodsId]['num'] === 1){
          
          delete state.goodsCart[shopId][goodsId]
          if(Object.keys(state.goodsCart[shopId]).length === 0){
            delete state.goodsCart[shopId]
          }
          state.goodsCart = JSON.parse(JSON.stringify(state.goodsCart))
          return
        }
        num--
      }
      state.goodsCart[shopId][goodsId]['num'] = num
      state.goodsCart = JSON.parse(JSON.stringify(state.goodsCart))
    },
    // 清空购物车
    removeCart(state,shopId){
      if(state.goodsCart[shopId]){
        delete state.goodsCart[shopId]
        state.goodsCart = JSON.parse(JSON.stringify(state.goodsCart))
      }
      
    }
  },
  actions: {
  },
  modules: {
  }
})
