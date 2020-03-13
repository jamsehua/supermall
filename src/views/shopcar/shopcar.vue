<template>
  <div>
    <carNavbar></carNavbar>
    <carGoodslist></carGoodslist>
    <carBottombar></carBottombar>
  </div>
</template>

<script>
  import carNavbar from './childShopcar/carNavbar'
  import carGoodslist from './childShopcar/carGoodslist'
  import carBottombar from './childShopcar/carBottombar'
  export default{
    name: 'shopcar',
    components: {
      carNavbar,
      carGoodslist,
      carBottombar
    }
  }
</script>

<style>

</style>