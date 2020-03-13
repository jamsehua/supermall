<template>
  <div class="tarItem" @click="btnclick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: 'item',
    props: {
      path: String,
      activecolor: {
        type: String,
        default: 'deepPink'
      }
    },
    data(){
      return{
        // isActive: true,
      }
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle(){
        return this.isActive? {color: this.activecolor}: {}
      }
    },
    methods: {
      btnclick(){
        this.$router.push (this.path)
        console.log(this.path)
      }
    }
  }
</script>

<style>
  .tarItem{
    flex: 1;
  }

  .active{
    color: #379da7
  }
</style>