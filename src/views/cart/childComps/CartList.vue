<!--
 * @Description: 
 * @version: 
 * @Author: slimmerYu
 * @Date: 2020-08-15 14:46:14
 * @LastEditors: slimmerYu
 * @LastEditTime: 2020-08-16 12:14:16
-->
<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">      
      <cart-list-item v-for="(item,index) in cartList" :key="index" :item-info="item" />      
    </scroll>
  </div>
</template>

<script>
  import Scroll from "components/common/scroll/Scroll";
  import CartListItem from "./CartListItem";
  import {mapGetters} from 'vuex'
  export default {
    components: {
      Scroll,
      CartListItem
    },
    computed: {
      ...mapGetters(['cartList'])
    },
    activated() {
      this.$refs.scroll.refresh()
    }
  }
</script>

<style scoped>
  .cart-list {
    height: calc(100% - 44px - 49px - 40px);
  }
  .content {
    /* position: fixed;
    left: 0;
    right: 0;
    bottom: 0; */
    /* z-index: 9; */
    height: 100%;
    overflow: hidden;
  }
</style>