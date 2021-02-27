<!--
 * @Description: 
 * @version: 
 * @Author: slimmerYu
 * @Date: 2020-07-31 08:53:45
 * @LastEditors: slimmerYu
 * @LastEditTime: 2020-08-09 20:02:47
--> 
<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
    <main-tab-bar/>
  </div>
</template>


<script>
 import MainTabBar from '@/components/content/mainTabbar/MainTabBar'

export default {
  name:'App',
  components:{
    MainTabBar
  }
}
</script>

<style>
@import "assets/css/base.css";
</style>
