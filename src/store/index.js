/*
 * @Description: 
 * @version: 
 * @Author: slimmerYu
 * @Date: 2020-07-31 08:53:45
 * @LastEditors: slimmerYu
 * @LastEditTime: 2020-08-15 14:29:21
 */
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
//1.安装插件
Vue.use(Vuex)
//2.创建store对象
//3.挂载vue实例
const state = {
  cartList:[]
}
export default new Vuex.Store({
  state,
  getters,
  /* mutations: {
    //mutations唯一的目的是修改state中的状态
    //mutations中的每一个方法尽可能完成的事情比较单一一点
    //所以下面的方法放入actions中
    addCounter(state,payload) {
      payload.count++
    },
    addToCart(state,payload) {
      state.cartList.push(payload)
    }
  
  }, */
  mutations,
  actions,
  /* actions: {
    addCart(context,payload){
      //payload新添加的商品\
      //1.查找之前数组中是否有该商品
      let oldProduct = null
      for (let item of state.cartList) {
        if(item.iid === payload.iid) {
          oldProduct = item;
        }
      }
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
      //2.判断oldProduct
      if (oldProduct) {
        // oldProduct.count += 1
        context.commit('addCounter',oldProduct)
      } else {
        payload.count = 1
        // context.state.cartList.push(payload)
        context.commit('addToCart',payload)
      }
    }
  }, */
  modules: {
  }
})
