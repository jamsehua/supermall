<template>
  <div class="control">
    <div class="control-item">
      <div  v-for="(item,index) in title" 
            :key="(item,index)" 
            :class="{active: index == currentIndex}"
            @click="itemclick(index)">
        <span>{{item}} </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabControl',
  data(){
    return{
      currentIndex:0
    }
  },
  methods: {
    itemclick(index){
      // console.log(index)
      this.currentIndex = index
      this.$emit('btnclick', index)
    }
  },
  props: {
    title: {
      type: Array,
      default(){
        return []
      }
    },
    naclist: {
      type: Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style>
  .control{
    text-align: center;
    height: 5.5vh;
    line-height: 5.6vh;
    background: #fff;
  }

  .control-item{
    display: flex;
  }

  .control-item span{
    padding: .75vh;
    font-size: 16px
  }

  .control-item > div{
    flex: 1;
  }

  .active{
    color: var(--color-tint)
  }

  .active span{
    border-bottom: 2px solid var(--color-tint);
  }
</style>