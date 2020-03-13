<template>
  <div id="app">
    <keep-alive exclude="detail">
      <router-view></router-view>
    </keep-alive>
    <maintarbar></maintarbar>
  </div>
</template>

<script>
  import maintarbar from 'components/content/tarbar/maintarbar'
  export default {
    name: 'App',
    components: {
      maintarbar
    }
}
</script>

<style>
  @import "assets/css/base.css";
  @import "assets/css/unicode.css";
</style>
