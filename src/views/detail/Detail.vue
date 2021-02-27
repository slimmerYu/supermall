<!--
 * @Description: 
 * @version: 
 * @Author: slimmerYu
 * @Date: 2020-08-06 21:47:42
 * @LastEditors: slimmerYu
 * @LastEditTime: 2020-08-16 15:58:03
-->
<template>
  <div id="detail">
    <!-- 导航 -->
    <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="nav"/>
    <scroll class="content" ref="scroll" 
     :probe-type="3" @scroll="contentScorll">
      <detail-swiper :top-images="topImages" ref="swiperRef" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detail-info="detailInfo" @loadImgEvent="imgLoad" />
      <detail-param-info ref="params" :param-info="paramInfo"/>
      <detail-comment-info ref="comment" :comment-info="commentInfo"/>
      <goods-list ref="recommend" :goods="recommends"/>
    </scroll>
    <detail-bottom-bar @addCart="addToCart"/>
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
    <!-- <toast :message="message" :show="show"/> -->
  </div>
</template>

<script>

  import DetailNavBar from './childComps/DetailNavBar'
  import DetailSwiper from './childComps/DetailSwiper'
  import DetailBaseInfo from './childComps/DetailBaseInfo'
  import DetailShopInfo from './childComps/DetailShopInfo'
  import DetailGoodsInfo from './childComps/DetailGoodsInfo'
  import DetailParamInfo from './childComps/DetailParamInfo'
  import DetailCommentInfo from './childComps/DetailCommentInfo'
  import DetailBottomBar from './childComps/DetailBottomBar'

  import GoodsList from 'components/content/goods/GoodsList'
  
  import Scroll from 'components/common/scroll/Scroll'
  // import Toast from 'components/common/toast/Toast'

  import {getDetail,Goods,Shop,GoodsParam,getRecommend} from "network/detail"
  
  import {debounce} from 'common/utils'
  import {itemListenerMixin,backTopMixin} from 'common/mixin';

  import { mapActions } from "vuex";
  export default {
    name:'Detail',
    mixins: [itemListenerMixin,backTopMixin],
    data(){
      return{
        iid:null,
        // res:null
        topImages: [],
        goods: {},
        shop: {},
        detailInfo: {},
        paramInfo: {},
        commentInfo: {},
        recommends: [],
        // itemImgListener: null
        themeTopYs: [],
        getThemeTopY: null,
        currentIndex: 0,
        // message: '',
        // show: false
      }
    },
    components:{
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      DetailBottomBar,
      Scroll,
      // Toast,
      GoodsList
    },
    created(){
      //1.保存传入的iid
      this.iid = this.$route.params.iid

      //2.根据iid请求详情数据
      getDetail(this.iid).then(res=>{
        console.log(res);
        const data = res.result
        // this.res = res
        //1.获取顶部轮播图片
        this.topImages = data.itemInfo.topImages

        //2.获取商品信息
        this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
        //3.获取店铺信息
        this.shop = new Shop(data.shopInfo)
        // console.log(this.shop.logo);
        // console.log(this.shop.name);

        //4.获取商品详细信息
        this.detailInfo = data.detailInfo
        //5.获取商品参数信息
        this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)

        //6.取出评论信息
        if(data.rate.cRate !== 0){
          this.commentInfo = data.rate.list[0]
        }

        this.$nextTick(() => {
          //根据最新的数据，对应的dom是已经被渲染出来，但是图片依然没有加载出来 ,所以放在了加载图片的方法里
          /* this.themeTopYs = []
          this.themeTopYs.push(0);
          this.themeTopYs.push(this.$refs.params.$el.offsetTop);
          this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
          this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
          console.log(this.themeTopYs); */
        })
        
      })

      //3.请求推荐数据
      getRecommend().then(res => {
        this.recommends = res.data.list
      })

      //4.给getThemeTopY赋值
      this.getThemeTopY = debounce(() => {
        this.themeTopYs = [];
        this.themeTopYs.push(0);
        this.themeTopYs.push(this.$refs.params.$el.offsetTop-44);
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop-44);
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop-44);
        console.log(this.themeTopYs);
      },100)
    },
    methods:{
      ...mapActions(['addCart']),
      imgLoad() {
        this.newRefresh()
        this.getThemeTopY()
      },
      titleClick(index) {
        console.log(index);
        this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],100)
      },
      contentScorll(position) {
        // console.log(position);
        //1.获取Y值
        const positionY = -position.y

        //2.positionY和主题中的值进行对比
        //positionY的值在 0~themeTopYs[1] 之间，index=0
        //     themeTopYs[1]~themeTopYs[2],index=1
        //     themeTopYs[2]~themeTopYs[3],index=2
        //     >themeTopYs[3],index=3
        let length = this.themeTopYs.length;
        for(let i = 0; i < length; i++) {
         /*  if(positionY > this.themeTopYs[i] && positionY < this.ThemeTopY[i+1]) {
            console.log(i);
            //到第四个越界了，取不到，不采用
          } */
          if(this.currentIndex !==i && ((i < length - 1 && positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1]) || (i === length - 1 && positionY >= this.themeTopYs[i] ))) {
            // console.log(i);
            this.currentIndex = i;
            console.log(this.currentIndex);
            this.$refs.nav.currentIndex = this.currentIndex
          }
        }

        
        //2.判断BackTop是否显示
        this.isShowBackTop = (-position.y) > 1000
      },
      addToCart() {
        // console.log('----');
        //1.获取购物车需要展示的商品的信息
        const product = {}
        product.image = this.topImages[0];
        product.title = this.goods.title;
        product.desc = this.goods.desc;
        product.price = this.goods.realPrice
        ;
        product.iid = this.iid;
        // console.log(product);

        //2.将商品添加到购物车(1.Promise 2.mapActions)
        //由于方法放入了actions中，不能如下调用了
        // this.$store.commit('addCart',product)
        this.addCart(product).then(res => {
          // console.log(res);
          /* this.show = true;
          this.message = res;
          setTimeout(() => {
            this.show = false;
            this.message = ''
          },1500) */
          this.$toast.show(res,1500)
          
        })
        /* this.$store.dispatch('addCart',product).then(res => {
          console.log(res);
        }) */
        // console.log(this.$store.state.cartList);

      }
    },
    mounted() {
      
      
    },
    destroyed() {
      this.$bus.$off('itemImageLoad',this.itemImgListener)
    }
  }
</script>
<style scoped>
  #detail {
    position: relative;
    z-index: 10;
    background-color: #fff;
    height: 100vh;
  }

  .detail-nav{
    position: relative;
    top: 0;
		left: 0;
		right: 0;
    z-index: 9;
    background-color: #fff;
  }
  .content{
    height: calc(100% - 44px - 58px);
  }
</style>