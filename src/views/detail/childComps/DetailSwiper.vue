<!--
 * @Description: 
 * @version: 
 * @Author: slimmerYu
 * @Date: 2020-08-09 19:40:48
 * @LastEditors: slimmerYu
 * @LastEditTime: 2020-08-09 20:25:25
-->
<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="item in topImages">
      <img :src="item"/>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper,SwiperItem} from 'components/common/swiper'

  export default {
    name:'DetailSwiper',
    components:{
      Swiper,SwiperItem
    },
    props:{
      topImages:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style>
  .detail-swiper{
    height: 300px;
    overflow: hidden;
  }
</style>