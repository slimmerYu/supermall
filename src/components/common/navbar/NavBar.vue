<!--
 * @Description: 
 * @version: 
 * @Author: slimmerYu
 * @Date: 2020-07-31 10:23:15
 * @LastEditors: slimmerYu
 * @LastEditTime: 2020-07-31 10:48:33
--> 
<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name:'NavBar'
}
</script>

<style>
  .nav-bar{
    display:flex;
    height:44px;
    line-height:44px;
    text-align: center;
    box-shadow: 0 1px 1px rgba(100, 100,100, 0.2);
  }
  .left,.right{
    width:60px;
    /* background-color: blueviolet; */
  }
  .center{
    flex:1;
    /* background-color: rgb(233, 24, 111); */
  }
</style>