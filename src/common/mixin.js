/*
 * @Description: 
 * @version: 
 * @Author: slimmerYu
 * @Date: 2020-08-11 20:46:43
 * @LastEditors: slimmerYu
 * @LastEditTime: 2020-08-16 16:11:24
 */
import {debounce} from "./utils";
export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null,
      newRefresh: null
    }
  },
  mounted() {
    this.newRefresh = debounce(this.$refs.scroll.refresh,300)

    this.itemImgListener = () => {
      this.newRefresh()
    }
    this.$bus.$on('itemImageLoad',this.itemImgListener)
    console.log('我是mixin')
  }
}
import BackTop from 'components/content/backtop/BackTop'
export const backTopMixin = {
  data() {
    return {
      isShowBackTop: false
    }
  },
  components: {
    BackTop
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0,300)
    }
  }
}