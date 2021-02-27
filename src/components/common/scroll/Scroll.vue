<!--
 * @Description: 
 * @version: 
 * @Author: slimmerYu
 * @Date: 2020-08-03 18:57:35
 * @LastEditors: slimmerYu
 * @LastEditTime: 2020-08-12 14:42:29
-->
<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>

  import BScroll from 'better-scroll'

export default {
  name:'Scroll',
  props:{
    probeType:{
      type:Number,
      default:0
    },
    pullUpLoad:{
      type:Boolean,
      default:false
    }
  },
  data(){
    return{
      scroll:null
    }
  },
  mounted(){
    //使用document拿到的不一定是当前文件中的元素,使用ref
    //1.创建betterscroll
    this.scroll = new BScroll(this.$refs.wrapper,{
      click:true,
      probeType:this.probeType,
      pullUpLoad:this.pullUpLoad
    })
    //2.监听滚动的位置
    if(this.probeType ===2 || this.probeType === 3){
      this.scroll.on('scroll',(position)=>{
        this.$emit('scroll',position)
      })
    }

    //3.监听上拉事件
    /* this.scroll.on('pullingUp',()=>{
      this.$emit('pullingUp')
    }) */
    //3.监听scroll滚动到底部
    if(this.pullUpLoad){
      this.scroll.on('pullingUp',()=>{
        // console.log('监听到滚动底部');
        this.$emit('pullingUp')
      })
    }
  },
  methods:{
    scrollTo(x,y,time=300){
      this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x,y,time)
    },
    finishPullUp() {
      this.scroll.finishPullUp()
    },
    refresh(){
      // console.log('*************');
      this.scroll && this.scroll.refresh &&  this.scroll.refresh()
    },
    getScrollY(){
      return this.scroll.y ?this.scroll.y : 0
    }
  }
}
</script>

<style>

</style>