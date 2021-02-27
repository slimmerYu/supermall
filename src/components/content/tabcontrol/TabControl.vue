<!--
 * @Description: 
 * @version: 
 * @Author: slimmerYu
 * @Date: 2020-08-01 15:10:06
 * @LastEditors: slimmerYu
 * @LastEditTime: 2020-08-02 17:08:42
--> 
<template>
  <div class="tab-control">
    <!-- 如果只是文字不同，没有必要使用插槽 ;传递文字即可-->
    <div v-for="(item,index) in titles" class="tab-control-item" :class="{active:index === currentIndex}" @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    titles:{
      type:Array,
      default(){
        return[]
      }
    }
  },
  data(){
    return{
      currentIndex:0
    }
  },
  methods:{
    itemClick(index){
      this.currentIndex=index;
      this.$emit('tabClick',index)
    }
  }
}
</script>

<style>
  .tab-control{
    display:flex;
    text-align: center;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
    /* z-index: 9; */
  }
  .tab-control-item{
    flex:1;
  }
  .tab-control-item span{
    padding: 5px;
  }

  .active{
    color:var(--color-high-text);
  }
  .active span{
    border-bottom: 2px solid var(--color-high-text);
  }

</style>