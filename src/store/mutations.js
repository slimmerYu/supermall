/*
 * @Description: 
 * @version: 
 * @Author: slimmerYu
 * @Date: 2020-08-13 22:04:52
 * @LastEditors: slimmerYu
 * @LastEditTime: 2020-08-15 19:31:35
 */
export default {
  //mutations唯一的目的是修改state中的状态
    //mutations中的每一个方法尽可能完成的事情比较单一一点
    //所以下面的方法放入actions中
    addCounter(state,payload) {
      payload.count++
    },
    addToCart(state,payload) {
      payload.checked = true
      state.cartList.push(payload)
    }
}