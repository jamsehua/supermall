<template>
  <swiper>
    <swiperItem  v-for="item in banners" :key="item.index" >
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imageLoad">
      </a>
    </swiperItem>
  </swiper>
</template>

<script>
  import {swiper, swiperItem} from 'components/common/swiper/index';
  export default {
    name: 'homeSwiper',
    data(){
      return{
        isload: false,
      }
    },
    props: {
      banners: {
        type: Array,
        default(){
          return []
        }
      }
    },
    components: {
      swiper,
      swiperItem,
    },
    methods: {
      imageLoad(){
        if(!this.isload){
          // console.log('aaa')
          this.$emit('imageLoad')
          this.isload = true
        }
      }
    }
  }
</script>

<style>

</style>