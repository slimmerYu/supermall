<!--
 * @Description: 
 * @version: 
 * @Author: slimmerYu
 * @Date: 2020-08-03 17:01:00
 * @LastEditors: slimmerYu
 * @LastEditTime: 2020-08-06 15:31:18
-->
<template>
  <swiper>
    <swiper-item v-for="item in banners">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imageLoad">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'

  export default {
    name: "HomeSwiper",
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data(){
      return{
        isLoad:false
      }
    },
    components: {
      Swiper,
      SwiperItem
    },
    methods:{
      imageLoad(){
        // console.log('------------');
        //只需要发送一次
        if(!this.isLoad){
          
          this.$emit('swipperImageLoad')
          this.isLoad=true
        }
      }
    }
  }
</script>

<style scoped>

</style>
