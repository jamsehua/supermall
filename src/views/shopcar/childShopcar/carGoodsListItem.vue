<template>
  <div class="car-item">
    <checkButton class="item-selector" :ischeck="cardata.isCheck" @click.native="changeCheck"></checkButton>
    <div class="item-img">
      <img :src="cardata.img" alt="商品图片">
    </div>
    <div class="item-info">
      <div class="item-title">{{cardata.title}}</div>
      <div class="item-desc">{{cardata.desc}}</div>
      <div class="info-bottom">
        <div class="item-price">￥{{cardata.price}}</div>
        <div class="item-count">x{{cardata.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import checkButton from './checkButton'
  export default {
    name: 'carGoodsListItem',
    props: {
      cardata: {
        type: Object,
        default(){
          return {}
        }
      }
    },
    components: {
      checkButton
    },
    methods: {
      changeCheck(){
        this.cardata.isCheck = !this.cardata.isCheck
      }
    }
 }
</script>

<style scoped>
  .car-item{
    display: flex;
  }

  .list-item {
    width: 100%;
    display: flex;
    font-size: 0;
    padding: 5px;
    border-bottom: 1px solid #ccc;
  }
  .item-selector {
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .item-title, .item-desc {
    overflow: hidden;
    white-space: nowrap;
    -ms-text-overflow: ellipsis;
    text-overflow: ellipsis;
  }
  .item-title {
    font-size: 18px;
    margin-bottom: 4px;
  }
  .item-img {
    padding: 5px;  
  }
  .item-img img {
    width: 80px;
    height: 100px;
    display: block;
    margin-bottom: 0;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }
  .item-info {
    font-size: 17px;
    color:#333;
    padding: 5px 10px;
    position: relative;
    overflow: hidden;
  }
  .item-info, .item-desc {
    color: #666;
    font-size: 14px;

  }
  .item-desc {
    margin-top:15px;
  }
  .info-bottom {
    display: flex;
    justify-content: space-between;
    margin-top: 16px;
  }
  .item-price {
    color: #ffb805;
    font-size: 20px;
  }
  .item-count {
    font-size: 20px;
  }

</style>