<template>
  <div id="detail">
    <childdetail class="detail-nav" @itemClick="itemclick" ref="nav"></childdetail>
    <scroll class="content1" 
            ref="toback"
            @scroll="contentScroll"
            :probe-type="3">
        <detailswiper :topImage="image"></detailswiper>
        <detailBaseInfo :goodsItem="goods"></detailBaseInfo>
        <detailShopinfo :shop="shop"></detailShopinfo>
        <detailGoodsInfo :detailInfo="detailInfo" @imgLoad="imgLoad"></detailGoodsInfo>
        <detailParamInfo ref="param" :paramInfo="paramInfo"></detailParamInfo>
        <detailCommentInfo ref="comment" :commentInfo="commentInfo"></detailCommentInfo>
        <detailRecommend ref="recomment" :recommeds="recommed"></detailRecommend>
    </scroll>
    <detailBottombar @addCars="addcars"></detailBottombar>

    <toback @click.native="backclick" 
            v-show="isShowScroll"></toback>
    <!-- <toast :message="message" :show="show"></toast> -->
  </div>
</template>

<script>
  import childdetail from './childdetail/detailnavbar'
  import detailswiper from './childdetail/detailSwiper'
  import detailBaseInfo from './childdetail/detailBaseInfo'
  import detailShopinfo from './childdetail/detailShopinfo'
  import detailGoodsInfo from './childdetail/detailGoodsInfo'
  import detailParamInfo from './childdetail/detailParamInfo'
  import detailCommentInfo from './childdetail/detailCommentInfo'
  import detailRecommend from './childdetail/detailRecommend'
  import detailBottombar from './childdetail/detailBottombar'

  import scroll from 'components/common/scroll/scroll'
  import{mapActions} from 'vuex'

  // import toast from 'components/common/toast/toast.vue'


  import {getdetaildata, goods, shop, goodsParam, getRecommed} from 'network/detail'
  import {itemListenerMixin, backTopMixin} from 'common/mixin'
  import {debounce} from 'common/until'

  export default {
    name: 'detail',
    data() { 
      return {
        iid: null,
        image: [],
        goods: {},
        shop: {},
        detailInfo: {},
        paramInfo: {},
        commentInfo: {},
        recommed: [],
        themetopYs: [],
        getThemetopYs: null,
        currentIndex: 0,
        message: '',
        show: true
      }
    },
    mixins: [itemListenerMixin, backTopMixin],
    components: {
      childdetail,
      detailswiper,
      detailBaseInfo,
      detailShopinfo,
      detailParamInfo,
      detailGoodsInfo,
      detailCommentInfo,
      detailRecommend,
      detailBottombar,
      scroll,
      // toast
    },
    created(){
      this.iid = this.$route.params.iid
      // 获取详情页数据
      getdetaildata(this.iid).then(res => {
        const data = res.result
        this.image = data.itemInfo.topImages

        // 获取商品信息
        this.goods = new goods(data.itemInfo, data.columns, data.shopInfo.services)
        // console.log(this.goods)
  
        // 获取店铺信息
        this.shop = new shop(data.shopInfo)
  
        // 获取商品详情信息
        this.detailInfo = data.detailInfo
  
        // 获取商品尺码
        this.paramInfo = new goodsParam(data.itemParams.info, data.itemParams.rule)
  
        // 获取商品评论信息
        this.commentInfo = data.rate.list[0]
      })

      // 获取详情页推荐数据
      getRecommed().then(res => {
        this.recommed = res.data.list
      })

      this.getThemetopYs = debounce(() => {
        // 获取详情页面组件的高度
        this.themetopYs = []
        this.themetopYs.push(0)
        this.themetopYs.push(this.$refs.param.$el.offsetTop)
        this.themetopYs.push(this.$refs.comment.$el.offsetTop)
        this.themetopYs.push(this.$refs.recomment.$el.offsetTop)
        this.themetopYs.push(Number.MAX_VALUE)
      })
    },
    methods: {
      ...mapActions(['addCart']),
      imgLoad(){
        this.$refs.toback.refresh()
        this.getThemetopYs()
      },
      itemclick(index){
        // console.log(index)
        this.$refs.toback.scrollTo(0, -this.themetopYs[index], 450)
      },
      addcars(){
        const product = {}
        product.iid = this.iid
        product.img = this.image[0]
        product.title = this.goods.title
        product.desc = this.goods.desc
        product.price = this.goods.reaPrice

        // this.$store.commit('addCart', product)
        // this.$store.dispatch('addCart', product).then(res => console.log(res))
        this.addCart(product).then(res => {
          // this.message = res
          // this.show = true

          // setTimeout(() => {
          //   this.show = false
          // }, 1500)
          this.$toast.show(res, 2000)
        })
      },
      contentScroll(position){
        const positionY = -position.y
        let length = this.themetopYs.length
        // for(let i = 0; i < length; i++){
          // if(this.currentIndex !== i &&((i < length - 1 && positionY >= this.themetopYs[i]) && positionY < this.themetopYs[i +1]
          //    || (i === length -1 && positionY >= this.themetopYs[i]))){
          //    console.log(i)
          //    this.currentIndex = i
          //    this.$refs.nav.currentIndex = this.currentIndex
          // }
      // }
        for(let i = 0; i < length - 1; i++){
          if(this.currentIndex !== i && (i < length - 1 && positionY >= this.themetopYs[i] && positionY < this.themetopYs[i + 1])){
            this.currentIndex = i
            this.$refs.nav.currentIndex = this.currentIndex
          }
        }
        // this.isShowScroll = position.y < -800
        this.listenShowBack(position)
      }
    },
    destroyed() {
      this.$bus.$off('imgLoad', this.itemImgLister)
      console.log('detail is destroy')
    }
  }
</script>

<style scoped>
  #detail{
    position:relative;
    z-index: 100;
    background: #fff;
    /* height: calc(100% - 44px -49px); */
    height: 100vh;
  }

  .detail-nav{
    position: relative;
    background: #fff;
    z-index: 10;    
    top: -2px;
    width: 100%;
  }

  .content1{
    height: calc(100% - 44px - 49px);
    overflow: hidden;
  }
</style>