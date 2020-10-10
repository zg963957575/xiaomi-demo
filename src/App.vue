<template>
  <div id="app">
    <router-view />
    <tabber></tabber>
  </div>
</template>

<style lang="less"></style>
<script>
  import Tabber from "./components/common/tabber/Tabber";
  export default {
    components: {Tabber}
  }
</script>