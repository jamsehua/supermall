<template>
  <swiper class="detail-swiper">
    <swiperItem class="detail-swiper-item"
                v-for="img in topImage" 
                :key="img">
        <img :src="img" alt="">
    </swiperItem>
  </swiper>
  <!-- <div>
    <h2>{{img}}</h2>
  </div> -->
</template>

<script>
  import {swiper, swiperItem} from 'components/common/swiper/index';

  export default {
    name: 'detailswiper',
    props: {
      topImage: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      swiper,
      swiperItem
    },
    data() { 
      return {

      }
    },
    // computed:{
    //   img(){
    //     return console.log(this.topImage)
    //   }
    // }
  }
</script>

<style scoped>
  .detail-swiper{
    height: 19rem;
    overflow: hidden;
  }
</style>
