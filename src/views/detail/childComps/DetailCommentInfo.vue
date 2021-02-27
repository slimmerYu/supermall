<!--
 * @Description: 
 * @version: 
 * @Author: slimmerYu
 * @Date: 2020-08-11 15:32:31
 * @LastEditors: slimmerYu
 * @LastEditTime: 2020-08-11 16:44:06
-->
<template>
  <div v-if="Object.keys(commentInfo).length !== 0" class="comment-info">
    <div class="info-header">
      <div class="header-title">
        用户评价
      </div>
      <div class="header-more">更多</div>
    </div>
    <div class="info-user">
      <img :src="commentInfo.user.avatar" alt="">
      <span>{{commentInfo.user.uname}}</span>
    </div>
    <div class="info-detail">
      <p>{{commentInfo.content}}</p>
      <div class="info-other">
        <span class="date">{{commentInfo.created|showDate}}</span>
        <span>{{commentInfo.style}}</span>
      </div>
      <div class="info-imgs">
        <img :src="item" v-for="(item,index) in commentInfo.images" :key="index" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  import {formatDate} from 'common/utils';

  export default {
    props:{
      commentInfo:{
        type:Object
      }
    },
    filters: {
      showDate(value){
        //1.将时间戳转出date对象
        const date = new Date(value * 1000);

        //2.将date进行格式化
        // return formatDate(date,'yyyy-MM-dd')
      }
    }
  }
</script>

<style>

</style>