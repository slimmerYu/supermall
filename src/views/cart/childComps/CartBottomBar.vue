<!--
 * @Description: 
 * @version: 
 * @Author: slimmerYu
 * @Date: 2020-08-15 19:38:49
 * @LastEditors: slimmerYu
 * @LastEditTime: 2020-08-16 15:20:52
-->
<template>
  <div class="bottom-bar2">
    <div class="check-content">
      <check-button 
                :isChecked="isSelectAll" class="check-button"
                @click.native="checkClick"/>
      <span>全选</span>
    </div>
    <div class="price">
      合计：￥{{totalPrice}}
    </div>
    <div class="calc" @click="calcClick">
      去计算：({{checkedLength}})
    </div>
  </div>
</template>

<script>
  import CheckButton from 'components/content/checkButton/CheckButton'
  import {mapGetters} from 'vuex'
export default {
  components: {
    CheckButton
  },
  computed: {
    ...mapGetters(['cartList']),
    totalPrice() {
      return this.$store.state.cartList.filter(item => {
        return item.checked
      }).reduce((preValue,item) => {
        return  preValue + item.price * item.count
      },0).toFixed(2)
    },
    checkedLength() {
      return this.$store.state.cartList.filter(item => item.checked).length
    },
    isSelectAll() {
      if (this.cartList.length === 0) return false
      //1.使用filter
      // return !(this.cartList.filter(item => !item.checked).length)
      //2.使用find
      // return !this.cartList.find(item => !item.checked)
      //3.普通遍历
      for (let item of this.cartList) {
        if(!item.checked) {
          return false
        }
      }
      return true
    }
  },
  methods: {
    checkClick() {
      // console.log('------------');
      if (this.isSelectAll) {//全部选中时
        this.cartList.forEach(item => item.checked = false)
      } else {
        this.cartList.forEach(item => item.checked = true)
      }
    },
    calcClick() {
      if(!this.isSelectAll) {
        this.$toast.show('请选择要购买的商品')
      }
    }
  }
}
</script>

<style>
  .bottom-bar2 {
    height: 40px;
    position: relative;
    background-color: #eee;
    line-height: 40px;
    display: flex;
    font-size: 14px;
  }
  .check-content {
    display: flex;
    align-items: center;
    margin-left: 15px;
    width: 60px;
    margin-right: 4px;
  }
  .check-button {
    margin-right: 4px;
    width: 20px;
    height: 20px;
    line-height: 20px;
  }
  .price {
    flex: 1;
  }
  .calc {
    width: 90px;
    text-align: center;
    background-color: red;
    color: #fff;
  }
</style>