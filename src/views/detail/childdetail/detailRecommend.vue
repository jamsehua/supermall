<template>
  <div class="recommend">
    <goodsList :goods="recommeds"></goodsList>
  </div>
</template>

<script>
  import goodsList from 'components/content/goods/goodsList'

  export default {
    name: 'recommend',
    props: {
      recommeds: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      goodsList
    },
    computed:{
      img(){
        return console.log(this.recommeds)
      }
    }
  }
</script>

<style lang="" scoped>
  /* .recommend{

  } */
</style>