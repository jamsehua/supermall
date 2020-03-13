<template>
  <div class="bottom-bar">
    <div class="bar-left">
      <div>
        <i class="iconfont service">&#xe610;</i>
        <div class="text">客服</div>
      </div>
      <div>
        <i class="iconfont store">&#xe605;</i>
        <div class="text">店铺</div>
      </div>
      <div>
        <i class="iconfont collect">&#xe613;</i>
        <div class="text">收藏</div>
      </div>
    </div>
    <div class="bar-right">
      <div class="cars" @click="addCars">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detailBottombar',
  methods: {
    addCars(){
      this.$emit('addCars')
    }
  }
 }
</script>

<style scoped>
  .iconfont{
    font-family:"iconfont" !important;
    font-size:23px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }

  .bottom-bar{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 44px;
    background: #fff;
    display: flex;
    padding-top: 5px;
  }

  .bar-left{
    flex: 1;
    display: flex;
    font-size: 15px;
    text-align: center;
  }

  .bar-left>div{
    flex: 1;
  }

  .service{
    color: var(--color-tint);
  }

  .bar-right{
    flex: 1;
    display: flex;
    text-align: center;
    line-height: 44px;
    font-size: 17px;
  }

  .cars,
  .buy{
    flex: 1;
  }

  .cars{
    background: rgba(226, 213, 24, 0.87)
  }

  .buy{
    background: rgb(20, 204, 97);
  }
</style>