<template>
  <div id="app">
    <router-view />
    <classify></classify>
    <tabber></tabber>
  </div>
</template>

<style lang="less"></style>
<script>
import Tabber from "./components/common/tabber/Tabber";
import Classify from "./views/classify/Classify";
export default {
  components: { Classify, Tabber }
};
</script>
