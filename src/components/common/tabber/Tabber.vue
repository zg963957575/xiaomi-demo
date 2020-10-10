<template>
  <div class="tabber">
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="apps-o">分类</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o">购物车</van-tabbar-item>
      <van-tabbar-item icon="contact">个人</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "Tabber",
  data() {
    return {
      active: 0
    };
  }
};
</script>

<style scoped></style>
