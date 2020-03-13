<template>
  <div class="wrapper" ref="wrapper">
    <div class="content2">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: 'scroll',
    data(){
      return{
        scroll: null,
      }
    },
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false,
      }
    },
    mounted(){
      // 创建BScroll对象
      this.scroll = new BScroll(this.$refs.wrapper,{
        // Y: 10000,
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad,
      })
      
      // 监听滚动的位置
      if(this.probeType === 3 || this.probeType === 2){
        this.scroll.on('scroll', (position) => {
          this.$emit('scroll', position)
          // console.log(position)
        })
      }

      // 监听刷新
      if(this.pullUpLoad){
        this.scroll.on('pullingUp', () => {
          // console.log('上拉加载更多')
          this.$emit('pullingUp')
        })
      }

    },
    methods: {
      scrollTo(x, y, time=300){
        this.scroll && this.scroll.scrollTo(x, y, time)
      },
      finishDown(){
        this.scroll && this.scroll.finishPullDown()
      },
      refresh(){
        this.scroll && this.scroll.refresh()
        // console.log('....')
      },
      getscrollY(){
        return this.scroll.y ? this.scroll.y : 0
      }
    }
  }

</script>

<style scoped>
</style>