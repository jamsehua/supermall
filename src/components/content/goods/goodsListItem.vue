<template>
  <div class="goodsListItem" @click="itemClick">
    <img v-lazy="showImg" alt="" @load="imgLoad">
    <div class="content">
      <p class="desc">{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>                
</template>

<script>
export default {
  name: 'goodsListItem',
  props: {
    goodsItem: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  methods: {
    imgLoad(){
      this.$bus.$emit('imgLoad')
    },
    itemClick(){
      this.$router.push('/detail/' + this.goodsItem.iid)
    }
  },
  computed: {
    showImg(){
      return this.goodsItem.image ||  this.goodsItem.show.img 
    }
  }
}
</script>

<style>
  .goodsListItem{
    width: 48%;
    position: relative;
    padding-bottom: 40px;
  }

  /* .goodsListItem a{
    vertical-align: middle;
  } */

  .goodsListItem img{
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }

  .content{
    position: absolute;
    text-align: center;
    overflow: hidden;
    bottom: 5px;
    left: 0;
    right: 0;
    font-size: 12px;
  }

  .content .desc{
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    margin: 0 0 3px 0;

  }

  .content .price{
    color: var(--color-height-text)
  }

  .content span{
    margin: 0 10px;
  }

  .content .collect{
    position: relative;
  }

  .content .collect::before{
    content: '';
    position: absolute;
    left: -17px;
    top: -2px;
    width: 14px;
    height: 14px;
    background: url('~assets/img/common/collect.svg');
    /* background-color: aqua; */
  }
</style>