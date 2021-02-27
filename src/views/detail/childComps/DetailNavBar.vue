<!--
 * @Description: 
 * @version: 
 * @Author: slimmerYu
 * @Date: 2020-08-06 22:09:27
 * @LastEditors: slimmerYu
 * @LastEditTime: 2020-08-16 13:24:45
-->

<template>
  <div id="detail-nav-bar">
    <!-- 导航 -->
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg">
      </div>
      <div slot="center" class="title">
        <div class="title-item"
          v-for="(item,index) in titles" 
          :class="{active:index===currentIndex}" @click="titleClick(index)">{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>

  import NavBar from 'components/common/navbar/NavBar'

  export default {
    components:{
      NavBar
    },
    data(){
      return{
        titles:['商品','参数','评论','推荐'],
        currentIndex:0,
      }
    },
    methods:{
      titleClick(index){
        this.currentIndex = index;
        this.$emit('titleClick',index);
      },
      backClick(){
        this.$router.back()
      }
    }
  }
</script>
<style>
  .title{
    display:flex;
  }
  .title-item{
    flex:1;
    font-size:14px;
  }
  .active{
    color:var(--color-tint)
  }
  .back img{
    margin-top: 12px;
  }
</style>