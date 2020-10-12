<template>
  <div class="tabber">
    <van-tabbar route>
      <van-tabbar-item icon="home-o" to="/home" replace>首页</van-tabbar-item>
      <van-tabbar-item icon="apps-o" to="/classify">分类</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" to="shop">购物车</van-tabbar-item>
      <van-tabbar-item icon="contact" to="mine">个人</van-tabbar-item>
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
