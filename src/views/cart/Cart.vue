<!--
 * @Description: 
 * @version: 
 * @Author: slimmerYu
 * @Date: 2020-07-31 09:20:05
 * @LastEditors: slimmerYu
 * @LastEditTime: 2020-08-16 13:23:30
-->
<template>
  <div id="cart">
    <!-- 导航 -->
    <nav-bar class="nav-bar-cart">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
    <!-- 商品列表 -->
    <cart-list/>
    <!-- 底部汇总 -->
    <cart-bottom-bar/>
  </div>
</template>
<script>
  import NavBar from 'components/common/navbar/NavBar'
  import cartList from './childComps/CartList'
  import CartBottomBar from "./childComps/CartBottomBar";
  import {mapGetters} from 'vuex'
  export default {
    name:'Cart',
    components:{
      NavBar,
      cartList,
      CartBottomBar
    },
    computed: {
      /* cartLength() {
        return this.$store.getters.cartLength
      } */
      ...mapGetters(['cartLength'])
      /* ...mapGetters({
        length: 'cartLength'
      }) */
    }
  }
</script>

<style>
  #cart {
    height: 100vh;
  }
  .nav-bar-cart {
    background-color: var(--color-tint);
    color: #fff;
  }

</style>