<template>
  <div id="tabber">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'tarBar',
    // components: {
    //   Item
    // }
  }
</script>

<style>

#tabber{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0px;
  display: flex;
  background: #f6f6f6;
  height: 49px;
  text-align: center;
  z-index: 10;
  box-shadow: 0 -2px 1px rgba(100, 100, 100, .2)
}

</style>