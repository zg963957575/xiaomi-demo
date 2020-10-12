<template>
  <div id="app">
    <router-view />
    <home></home>
    <tabber v-show="$store.state.flag"></tabber>
  </div>
</template>

<style lang="less"></style>
<script>
import Tabber from "./components/common/tabber/Tabber";
import Home from "./views/home/Home";
export default {
  components: { Home, Tabber }
};
</script>
