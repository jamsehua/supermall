<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
  export default {
    name: 'toast',
    data(){
      return{
        message: '' ,
        isShow: false
      }
    },
    methods: {
      show(message, dealzy=2000){
        this.message = message
        this.isShow = true

        const timer = setTimeout(() => {
          this.isShow = false
          this.message = ''
        }, dealzy)
        if(this.isShow == false){
          clearTimeout(timer)
        }
      }
    }
  }
</script>

<style>
  .toast{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 8px 14px;
    color: #fff;
    background: rgba(0, 0, 0, .7);
    z-index: 999;
    border-radius: 4px;
    font-size: 16px;
  }
</style>