<!--
 * @Description: 
 * @version: 
 * @Author: slimmerYu
 * @Date: 2020-07-31 14:52:01
 * @LastEditors: slimmerYu
 * @LastEditTime: 2020-08-09 20:09:29
-->
<template>
  <div class="slide">
    <slot></slot>
  </div>
</template>

<script>
	export default {
		name: "slide"
	}
</script>

<style scoped>
  .slide {
    width: 100%;
    flex-shrink: 0;
  }

  .slide img {
    width: 100%;
  }
</style>
