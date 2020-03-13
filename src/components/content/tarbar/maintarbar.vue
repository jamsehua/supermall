<template>
    <tabBar>
      <tabbarItem path='/home' activecolor = 'blue'>
        <img slot="item-icon" src="~assets/img/tarbar/home.svg" alt="">
        <img slot="item-active" src="~assets/img/tarbar/home_active.svg" alt="">
        <div slot="item-text">首页</div>
      </tabbarItem>
      <tabbarItem path='/classify'>
        <img slot="item-icon" src="~assets/img/tarbar/classify.svg" alt="">
        <img slot="item-active" src="~assets/img/tarbar/classify_active.svg" alt="">
        <div slot="item-text">分类</div>
      </tabbarItem>
      <tabbarItem path='/shopcar'>
        <img slot="item-icon" src="~assets/img/tarbar/shopcar.svg" alt="">
        <img slot="item-active" src="~assets/img/tarbar/shopcar_active.svg" alt="">
        <div slot="item-text">购物车</div>
      </tabbarItem>
      <tabbarItem path='/profil'>
        <img slot="item-icon" src="~assets/img/tarbar/profil.svg" alt="">
        <img slot="item-active" src="~assets/img/tarbar/profil_active.svg" alt="">
        <div slot="item-text">我的</div>
      </tabbarItem>
    </tabBar>
 
</template>

<script>
  import tabBar from 'components/common/tabbar/tabBar';
  import tabbarItem from 'components/common/tabbar/tabbarItem';
  export default{
    name: 'maintarbar',
    components: {
      tabBar,
      tabbarItem
    }
  }
</script>

<style>
  img{
    vertical-align: bottom;
    width:30px;
    margin-bottom: 2px;
  }
</style>