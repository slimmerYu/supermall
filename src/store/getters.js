/*
 * @Description: 
 * @version: 
 * @Author: slimmerYu
 * @Date: 2020-08-15 14:25:53
 * @LastEditors: slimmerYu
 * @LastEditTime: 2020-08-15 14:34:15
 */
export default {
  cartLength(state) {
    return state.cartList.length
  },
  cartList(state) {
    return state.cartList
  }
}