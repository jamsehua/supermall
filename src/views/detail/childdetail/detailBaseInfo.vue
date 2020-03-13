<template>
  <div v-if="Object.keys(goodsItem) !== 0" class="baseInfo">
    <div class="info-item">{{goodsItem.title}}</div>
    <div class="info-price">
      <span class="n-price">{{goodsItem.newPrice}}</span>
      <span class="o-price">{{goodsItem.oldPrice}}</span>
      <span v-if="goodsItem.discount" class="discount">{{goodsItem.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{goodsItem.columns[0]}}</span>
      <span>{{goodsItem.columns[1]}}</span>
      <!-- <span>{{goodsItem.columns[2]}}</span> -->
      <span>{{goodsItem.services[goodsItem.services.length - 1].name}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item"
            v-for="index in goodsItem.services.length-1" 
            :key="index">
        <img  class="item" v-if="goodsItem.services[index-1].icon" :src="goodsItem.services[index-1].icon" alt="">
        <span class="item" >{{goodsItem.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'detailBaseInfo',
    props: {
      goodsItem: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .baseInfo {
    margin-top: 15px;
    padding: 0 8px;
    color: #999;
    border-bottom: 5px solid #f2f5f8;
  }

  .info-item{
    font-size: 20px;
    color: #222;
  }

  .info-price {
    margin-top: 10px;
  }

  .info-price .n-price {
    font-size: 24px;
    color: var(--color-tint);
  }

  .info-price .o-price {
    font-size: 13px;
    margin-left: 5px;
    text-decoration: line-through;
  }

  .info-price .discount {
    font-size: 12px;
    padding: 2px 5px;
    color: #fff;
    background-color: var(--color-tint);
    border-radius: 8px;
    margin-left: 5px;

    /*让元素上浮一些: 使用相对定位即可*/
    position: relative;
    top: -8px;
  }

  .info-other {
    margin-top: 15px;
    line-height: 30px;
    display: flex;
    font-size: 13px;
    text-align: center;
    border-bottom: 1px solid rgba(100,100,100,.1);
    justify-content: space-between;
  }

  .info-other span {
    flex: 1;
  }

  .info-service {
    display: flex;
    justify-content: space-between;
    /* line-height: 60px; */
    margin-top: 2vh;
    text-align: center;
  }

  .info-service-item{
    flex: 1;
  }

  .info-service-item img {
    width: 14px;
    height: 14px;
    position: relative;
    top: 2px;
  }

  .info-service-item span {
    font-size: 11px;
    color: #333;
  }

</style>