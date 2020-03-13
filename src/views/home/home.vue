<template>
  <div id="home">
    <navbar class="home-nav"><div slot="center"> 购物街 </div></navbar>
    <tabcontrol :title="['流行', '新款', '精选']"
                @btnclick='btnclick'
                ref="tabOffsetTop1"
                class="tab-control"
                v-show="isTabFixed"></tabcontrol>

    <scroll ref="toback" 
            class="scroll-content"
            :probeType="3"
            @scroll="contentScroll"
            :pullupLoad="true"
            @pullingUp="loadMore">
      <homeSwiper :banners="banners" @imageLoad="imageLoad"></homeSwiper>
      <recomvies :recommends="recommends"></recomvies>
      <featureView></featureView>
      <tabcontrol :title="['流行', '新款', '精选']"
                  @btnclick='btnclick'
                  ref="tabOffsetTop"></tabcontrol>
      <goodsList :goods="showgoods"/>
    </scroll>
    
    <toback @click.native="backclick"
            v-show="isShowScroll"></toback>
  </div>
</template>

<script>
  import navbar from 'components/common/navbar/navBar'
  import tabcontrol from 'components/content/tabControl/tabControl'
  import goodsList from 'components/content/goods/goodsList'
  import scroll from 'components/common/scroll/scroll'


  import homeSwiper from './childcomps/homeSwiper'
  import recomvies from './childcomps/remomViews'
  import featureView from './childcomps/featureView'

  import {
    getHomeMultidata,
    getHomedata
  } from 'network/home'
  // import {debounce} from 'common/until'
  import {itemListenerMixin, backTopMixin} from 'common/mixin'


  export default{
    name: 'home',
    components: {
      navbar,
      homeSwiper,
      recomvies,
      featureView,
      tabcontrol,
      goodsList,
      scroll,
    },
    data(){
      return{
        banners: [],
        recommends: [],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []},
        },
        currentTabType:'pop',
        tabOffsetTop: 0,
        isTabFixed: false,
        saveY: 0
      }
    },
    mixins: [itemListenerMixin, backTopMixin],
    computed: {
      showgoods() {
        return this.goods[this.currentTabType].list
      }
    },
    created(){
      this.getHomeMultidata()

      this.getHomedata('new')
      this.getHomedata('pop')
      this.getHomedata('sell')

    },
    mounted() {
      // // 计算图片加载完事件监听
      // const refresh = debounce(this.$refs.toback.refresh, 500)
      // console.log('home')
      // this.itemImgLister =  () => {
      //   // 页面加载完重新计算可滚动高度
      //   this.$refs.toback.refresh()
      //   refresh()
      // }
      // // console.log('home is create')
      // this.$bus.$on('imgLoad', this.itemImgLister)
    },
    // 当用户返回时跳转到当前位置
    activated(){
      this.$refs.toback.scrollTo(0, this.saveY, 0)
      this.$refs.toback.refresh()
    },
    // 记录用户离开时的位置
    deactivated(){
      // 记录用户离开时页面位置
      this.saveY = this.$refs.toback.getscrollY()

      // 取消itemimg的监听
      this.$bus.$off('imgLoad', this.itemImgLister)
    },
    methods: {
      /**
       * 事件监听处理
       */

      // 获取加载类型
      btnclick(index){
        switch(index){
          case 0:
            this.currentTabType = 'pop'
            break
          case 1:
            this.currentTabType = 'new'
            break
          case 2:
            this.currentTabType = 'sell'
            break
        }
        this.$refs.tabOffsetTop.currentIndex = index
        this.$refs.tabOffsetTop1.currentIndex = index
      },
      // 获取scroll滚动的位置
      contentScroll(position){
        this.listenShowBack(position)
        this.isTabFixed = position.y < -this.tabOffsetTop
      },
      // 请求上拉加载更多数据
      loadMore(){
        this.getHomedata(this.currentTabType)

      },
      imageLoad(){
        // 获取tabControl的offsettop
        // 所有组件都有$el的属性：获取组件中的元素
        // console.log(this.$refs.tabOffsetTop.$el.offsetTop)
        this.tabOffsetTop = this.$refs.tabOffsetTop.$el.offsetTop
      },

      /**
       * 网络请求处理
       */
      // 请求home页面数据
      getHomeMultidata(){
        getHomeMultidata()
        .then(res => {
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        })
        .catch(err => {
          console.log(err)
        })
      },
      // 上拉数据网络请求
      getHomedata(type){
        const page = this.goods[type].page + 1
        getHomedata(type, page).then(res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page +=1

          // 完成上拉加载更多
          this.$refs.toback.finishDown()
        })
      }
    }
  }
 
</script>

<style scoped>

  #home{
    height: 100vh;
    /* position: relative; */
  }

  .home-nav{
    background: var(--color-tint);
    color: #fff;
    /* position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2; */
  }


  .scroll-content{
    height: calc(100vh - 103px);
    /* margin-top: 44px; */
    overflow: hidden;
    position: absolute; 
    top: 44px;
    /* bottom: 49px; */
    width: 100vw; 
    box-sizing: border-box; 
  }

  .tab-control{
    position: relative;
    z-index: 100;
    top: -2px;
  }

</style>