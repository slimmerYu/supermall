<template>
  <div id="home" class="wrapper">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control :titles="['流行', '新款', '精选']"
                @tabClick="tabClick" 
                ref="tabControl1" class="tabControl" v-show="isTabFixed"/>
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll"
            :pull-up-load="true"
            @pullingUp="loadMore"
            >
      <home-swiper :banners="banners" @swipperImageLoad="swipperImageLoad"/>
      <recommend-view :recommends="recommends"/>
      <feature-view/>
      <tab-control :titles="['流行', '新款', '精选']"
                  @tabClick="tabClick" 
                  ref="tabControl2"
                  />
      <good-list :goods="showGoods"/>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>
  import HomeSwiper from './childComps/HomeSwiper'
  import RecommendView from './childComps/RecommendView'
  import FeatureView from './childComps/FeatureView'

  import NavBar from 'components/common/navbar/NavBar'
  import TabControl from 'components/content/tabcontrol/TabControl'
  import GoodList from 'components/content/goods/GoodsList'
  import Scroll from 'components/common/scroll/Scroll'
  import BackTop from 'components/content/backtop/BackTop'

  import { getHomeMultidata, getHomeGoods } from "../../network/home"
  // import {debounce} from 'common/utils'
  import {itemListenerMixin,backTopMixin} from 'common/mixin';
  export default {
    name: "Home",
    components: {
      HomeSwiper,
      RecommendView,
      FeatureView,
      NavBar,
      TabControl,
      GoodList,
      Scroll
    },
    mixins: [itemListenerMixin,backTopMixin],
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []},
        },
        currentType: 'pop',
        tabOffsetTop: 0,
        isTabFixed: false,
        saveY: 0,
        // itemImgListener: null
      }
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    },
    destroyed(){
      console.log('home destroyed');
    },
    activated(){
      // console.log('home activated');
      this.$refs.scroll.scrollTo(0,this.saveY,0)
      this.$refs.scroll.refresh()
    },
    deactivated(){
      // console.log('home deactivated');
      //1.保存Y值
      this.saveY = this.$refs.scroll.getScrollY()
      // console.log(this.saveY);

      //2.取消全局事件的监听
      this.$bus.$off('itemImageLoad',this.itemImgListener)
    },
    created() {
      // 1.请求多个数据
      this.getHomeMultidata()

      // 2.请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')

      
    },
    mounted(){
      
      //1.监听item中图片加载完成
      //防抖
      // let refresh = debounce(this.$refs.scroll.refresh,200)
      /* const refresh = function(...args){
          //判断有没有timer，如果有就清除掉
          if(timer) clearTimeout(timer)

          //重新计时
          timer = setTimeout(()=>{
            func.apply(this.args)
          },delay)
        } */
      //对监听的事件进行保存
      /* this.itemImgListener = () => {
        // 此事件执行频率很高
        // console.log('-------------------');
        // this.$refs.scroll.refresh()
        //使用新生成的函数，不会频繁调用
        refresh()
      }
      this.$bus.$on('itemImageLoad',this.itemImgListener) */
    },
    methods: {
      /**
       * 事件监听相关的方法
       */
      //防抖函数
      // debounce(func,delay){//函数，等多久
      //   let timer = null

      //   return function(...args){
      //     //判断有没有timer，如果有就清除掉
      //     if(timer) clearTimeout(timer)

      //     //重新计时
      //     timer = setTimeout(()=>{
      //       func.apply(this,args)
      //     },delay)
      //   }
      // }
      // ,

      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }

        // this.showGoods = this.goods[this.currentType].list
        //让两个TabControl的currentIndex保持一致
        this.$refs.tabControl1.currentIndex=index;
        this.$refs.tabControl2.currentIndex=index;
      },
      /* backClick() {
        this.$refs.scroll.scrollTo(0, 0)
      },
 */
      contentScroll(position) {
        //1.判断BackTop是否显示
        this.isShowBackTop = (-position.y) > 1000
        //2.决定tabControl是否吸顶（position：fixed)
        this.isTabFixed = (-position.y) > this.tabOffsetTop
      },
      loadMore() {
        this.getHomeGoods(this.currentType)
      }, 
      swipperImageLoad(){
        this.tabOffsetTop=this.$refs.tabControl2.$el.offsetTop
      },
      /**
       * 网络请求相关的方法
       */
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          // this.result = res;
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1
        getHomeGoods(type, page).then(res => {
          console.log(res);
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1
          //默认只加载一次，完成上拉加载更多，继续下一次
          this.$refs.scroll.finishPullUp()
        })
      }
    }
  }
</script>

<style scoped>
  #home {
    /*padding-top: 44px;*/
    /* vh:viewportHeight */
    height: 100vh;
    position: relative;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #fff;

/*     position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9; */
  }

  .content {
    overflow: hidden;

    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  .tab-control{
    position: relative;
    z-index: 9;
  }
  /*.content {*/
    /*height: calc(100% - 93px);*/
    /*overflow: hidden;*/
    /*margin-top: 44px;*/
  /*}*/
</style>
