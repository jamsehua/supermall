<template>
  <div class="carBottombar">
    <div class="check-content">
      <checkButton  class="check-bottom" 
                    :ischeck="isSelectAll"
                    @click.native="checkClick"></checkButton>
      <span>全选</span>
    </div>
    <div class="price">
      <span>总价￥:{{totalPrice}} </span>
    </div>
    <div class="calculate" @click="calcClick">
      <span>
        去结算({{checkLength}})
      </span>
    </div>
  </div>
</template>

<script>
  import checkButton from './checkButton'
  import {mapGetters} from 'vuex'

  export default {
    name: 'carBottombar',
    components: {
      checkButton
    },
    computed: {
      ...mapGetters(['cardata']),
      totalPrice(){
        return this.cardata.filter(item => {
          return item.isCheck
        }).reduce((pre, item) => {
          return pre + item.price * item.count
        }, 0).toFixed(2)
      },
      checkLength(){
        return this.cardata.filter(item => {
          return item.isCheck
        }).length
      },
      isSelectAll(){
        if(this.cardata.length == 0){
          return false
        }
        // 普通遍历
          // for(let item of this.cardata){
          //   if(!item.isCheck){
          //     return false
          //   }
          //   console.log(item)
          // }
          // return true

        // find函数
        // return !this.cardata.find(item => !item.isCheck)

        // filter
        return !(this.cardata.filter(item => !item.isCheck).length)
      }
    },
    methods: {
      checkClick(){
        if(this.isSelectAll){
          this.cardata.forEach(item => item.isCheck = false)
        }else{
          this.cardata.forEach(item => item.isCheck = true)
        }
      },
      calcClick(){
        if(!this.isSelectAll){
          this.$toast.show('请添加商品', 2000)
        }
      }
    }
  }
</script>

<style scoped>
  .carBottombar{    
    display: flex;
    position: fixed;
    bottom: 49px;
    left: 0;
    right: 0;
    height: 4.5vh;
    line-height: 4.5vh;
    background: #eeeeee;
    display: flex;
    text-align: center;
    font-size: 13px;
  }
  .carBottombar>span{
    line-height: 5vh;
  }
  .check-content{
    display: flex;
    width: 22vw;
  }
  .check-bottom{
    margin: 0 5px 0 10px;
  }
  .price{
    flex: 1;
  }
  .calculate{
    width: 21vw;
    background: red;
    color: #fff;
  }
</style>