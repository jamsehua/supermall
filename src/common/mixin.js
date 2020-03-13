import {debounce} from './until'
import toback from 'components/content/toBack/toBack'

export const itemListenerMixin = {
  data(){
    return {
      itemImgLister: null
    }
  },
  mounted() {
    const refresh = debounce(this.$refs.toback.refresh, 500)
    this.itemImgLister =  () => {
      // 页面加载完重新计算可滚动高度
      // this.$refs.toback.refresh()
      refresh()
    }
    this.$bus.$on('imgLoad', this.itemImgLister)
  }
}

export const backTopMixin = {
  components: {
    toback
  },
  data(){
    return{
      isShowScroll: false
    }
  },
  methods: {
    // 回到首页缓加载
    backclick(){
      this.$refs.toback.scrollTo(0, 0, 500)
    },
    listenShowBack(position){
      this.isShowScroll = position.y < -800
    }
  }
}