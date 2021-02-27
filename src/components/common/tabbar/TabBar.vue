<!--
 * @Description: 
 * @version: 
 * @Author: slimmerYu
 * @Date: 2020-07-31 09:16:59
 * @LastEditors: slimmerYu
 * @LastEditTime: 2020-08-02 17:05:46
--> 
<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style scoped>
  #tab-bar {
    display: flex;
    background-color: #f6f6f6;

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    box-shadow: 0 -1px 1px rgba(100,100,100,.2);
    z-index: 9;
  }
</style>
