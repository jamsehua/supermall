<template>
  <div class="car-list">
    <scroll class="car-scroll" ref="toback">
      <carGoodsListItem v-for="(item, index) in cardata" :key="index" :cardata="item"></carGoodsListItem>
    </scroll>
  </div>
</template>

<script>
  import carGoodsListItem from './carGoodsListItem'
  import scroll from 'components/common/scroll/scroll'

  import{mapGetters} from 'vuex'

  export default {
    name: 'carGoodslist',
    components: {
      carGoodsListItem,
      scroll
    },
    computed: {
      ...mapGetters(['cardata']),
    },
    activated(){
      this.$refs.toback.refresh()
    }
  }
</script>

<style scoped>
  .car-list{
    height: calc(100vh - 44px - 49px);
  }
  .car-scroll{
    height: 100%;
    overflow: hidden;
  }
</style>