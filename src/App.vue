<template>
  <div id="app">
    <the-header></the-header>
    <router-view/>
    <the-footer></the-footer>
  </div>
</template>

<script>
  export const TheHeader = () => import('./layout/header/the-header.vue');
  export const TheFooter = () => import('./layout/footer/the-footer.vue');

  export default {
    name: 'App',
    components: {
      TheHeader,
      TheFooter
    }
  }
</script>

<style lang="scss">
  @import 'scss/_common.scss';

</style>
