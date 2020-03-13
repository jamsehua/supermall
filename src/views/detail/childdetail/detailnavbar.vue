<template>
  <div class="detailnavbar">
    <navbar>
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div class="title"  slot="center">
        <div  class="title-item" 
              v-for="(item, index) in title" 
              :key="item"
              @click="itemClick(index)"
              :class="{active: index === currentIndex}">{{item}}</div>
      </div>
    </navbar>
  </div>
</template>

<script>
  import navbar from 'components/common/navbar/navBar'
  export default {
    name: 'detailnavbar',
    data() { 
      return {
        title:['商品', '参数', '评论', '推荐'],
        currentIndex: 0,
      }
    },
    components: {
      navbar
    },
    methods: {
      backClick(){
        this.$router.back()
      },
      itemClick(index){
        this.currentIndex = index
        this.$emit('itemClick', index)
      }
    }
  }
</script>

<style scoped>
  .back img{
    margin-bottom: 1vh;
  }

  .title{
    display: flex;
    font-size: 13px;
    text-align: center;
  }

  .title-item{
    flex: 1;
  }

  .active{
    color: var(--color-height-text)
  }
</style>