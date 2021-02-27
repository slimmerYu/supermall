<!--
 * @Description: 
 * @version: 
 * @Author: slimmerYu
 * @Date: 2020-08-10 21:05:26
 * @LastEditors: slimmerYu
 * @LastEditTime: 2020-08-10 21:07:34
-->
<template>
  <div class="param-info" v-if="Object.keys(paramInfo).length !==0">
    <table v-for="(table,index) in paramInfo.sizes" class="info-size" :key="index">
      <tr v-for="(tr,indey) in table" :key="indey">
        <td v-for="(td,indez) in tr" :key="indez">{{td}}</td>
      </tr>
    </table>
    <table class="info-param">
      <tr v-for="(info,index) in paramInfo.infos">
        <td class="info-param-key">{{info.key}}</td>
        <td class="param-value">{{info.value}}</td>
      </tr>
    </table>
    <div class="info-img" v-if="paramInfo.image.length !== 0">
      <img :src="paramInfo.image" alt="">
    </div>
  </div>
</template>

<script>
export default {
  props:{
    paramInfo:{
      type:Object
    }
  }
}
</script>

<style>

</style>