<!--
 * @Description: 
 * @version: 
 * @Author: slimmerYu
 * @Date: 2020-08-16 14:18:35
 * @LastEditors: slimmerYu
 * @LastEditTime: 2020-08-16 15:21:35
-->
<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  props: {
    /* message: {
      type: String,
      default: ''
    },
    show: {
      type: Boolean,
      default: false
    } */
  },
  data() {
    return {
      message: '',
      isShow: false
    }
  },
  methods: {
    show(message,duration=2000) {
      this.isShow = true;
      this.message = message;
      setTimeout(() => {
        this.isShow = false;
        this.message = '';
      },duration)
    }
  }
}
</script>

<style>
  .toast {
    position: fixed;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
    color: #fff;
    padding: 8px 10px;
    background-color: rgba(0,0,0,.7);
    z-index: 99;
    font-size: 14px;
  }
</style>