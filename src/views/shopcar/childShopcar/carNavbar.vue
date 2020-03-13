<template>
  <div>
    <navbar class="car-bar">
      <div slot="center">购物车({{carLength}})</div>
    </navbar>
  </div>
</template>

<script>
  import navbar from 'components/common/navbar/navBar'

  import{mapGetters} from 'vuex'

  export default {
    name: 'carNavbar',
    components: {
      navbar
    },
    computed: {
      ...mapGetters(['carLength'])
    }
  }
</script>

<style>
  .car-bar{
    background: var(--color-tint);
    color: #fff;
    font-weight: 500;
  }
</style>