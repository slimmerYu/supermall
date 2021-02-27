<!--
 * @Description: 
 * @version: 
 * @Author: slimmerYu
 * @Date: 2020-08-15 19:13:21
 * @LastEditors: slimmerYu
 * @LastEditTime: 2020-08-16 12:44:16
-->
<template>
  <div class="check-button" :class="{check: isChecked}">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  props: {
    isChecked: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>
  .check-button {
    border-radius: 50%;
    border: 2px solid #aaa;
  }
  .check {
    background-color: red;
    border-color: red;
  }
</style>