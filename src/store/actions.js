/*
 * @Description: 
 * @version: 
 * @Author: slimmerYu
 * @Date: 2020-08-13 22:08:31
 * @LastEditors: slimmerYu
 * @LastEditTime: 2020-08-16 13:05:51
 */
export default {
  addCart(context,payload){
    return new Promise((resolve,reject) => {
      //payload新添加的商品\
      //1.查找之前数组中是否有该商品
      /* let oldProduct = null
      for (let item of state.cartList) {
        if(item.iid === payload.iid) {
          oldProduct = item;
        }
      } */
      
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
      //2.判断oldProduct
      if (oldProduct) {
        // oldProduct.count += 1
        context.commit('addCounter',oldProduct)
        resolve('已添加到购物车')
      } else {
        payload.count = 1
        // context.state.cartList.push(payload)
        context.commit('addToCart',payload)
        resolve('已添加到购物车')
      }
    })
  }
}