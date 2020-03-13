<template>
  <div class="recommvies">
    <div v-for="item in recommends" :key="item.index" class="recom-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'recommVies',
  props: {
    recommends: {
      type: Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style>
  .recommvies{
    display: flex;
    text-align: center;
    font-size: 15px;
    padding: 10px 0 25px 0;
    border-bottom: 8px solid #eee;
  }

  .recom-item{
    flex: 1
  }

  .recom-item img{
    width: 18vw;
    margin-bottom: 10px;
  }
</style>
