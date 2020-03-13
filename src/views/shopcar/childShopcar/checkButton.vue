<template>
  <div class="check-button">
    <i class="iconfont"  :class="{check:ischeck}">&#xe634;</i>
  </div>
</template>

<script>
export default {
  name: 'checkButton',
  props: {
    ischeck: {
      type: Boolean,
      default: false
    }
  }
 }
</script>

<style scoped>

  .check-button i{
    height: 15px;
    width: 15px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    border:2px solid #c0c0c0;
    vertical-align: middle;
    margin-bottom: 6px;
    margin-left: 1vw;
  }

  .iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }

  .check {
    border:2px solid var(--color-tint) !important;
    background-color: var(--color-tint);
  }

</style>