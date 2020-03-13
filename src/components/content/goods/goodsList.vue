<template>
  <div class="goodslist">
    <goodsListItem v-for="item in goods"
                   :goodsItem="item" 
                   :key="item.index"
    ></goodsListItem>
    <!-- {{goods}} -->
  </div>
</template>

<script>
import goodsListItem from './goodsListItem'

export default {
  name: 'goodsList',
  components: {
    goodsListItem,
  },
  props: {
    goods: {
      type: Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style>
  .goodslist{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2px;
  }
</style>