<template>
  <div class="mine">
    <header>
      <div class="header_photo"></div>
      <div class="header_cell">1852738192</div>
    </header>
    <section class="section-a">
      <div class="section_p">
        我的订单
      </div>
      <div class="section_all_p">
        全部订单
        <van-icon name="arrow" />
      </div>
    </section>
    <div class="section-b">
      <van-tabbar class="tabbar-a">
        <van-tabbar-item icon="shopping-cart-o">代付款</van-tabbar-item>
        <van-tabbar-item icon="after-sale">优惠券</van-tabbar-item>
        <van-tabbar-item icon="star">收藏</van-tabbar-item>
      </van-tabbar>
    </div>
    <div class="section-c">
      <div class="section_column">
        <van-icon name="like-o" color="#FF6618" size="0.4rem" class="a"/>
        <p>会员中心</p>
        <van-icon name="arrow" color="#000000" size="0.2rem" class="b"/>
      </div>
      <div class="section_c_bor"></div>
      <div class="section_column" @click="address">
        <van-icon name="location-o" color="#FF6618" size="0.4rem" class="a"/>
        <p>收货地址</p>
        <van-icon name="arrow" color="#000000" size="0.2rem" class="b"/>
      </div>
    </div>
    <div class="section-c">
      <div class="section_column">
        <van-icon name="refund-o" color="#FF6618" size="0.4rem" class="a"/>
        <p>我的优惠</p>
        <van-icon name="arrow" color="#000000" size="0.2rem" class="b"/>
      </div>
      <div class="section_c_bor"></div>
      <div class="section_column">
        <van-icon name="other-pay" color="#FF6618" size="0.4rem" class="a"/>
        <p>我的意见</p>
        <van-icon name="arrow" color="#000000" size="0.2rem" class="b"/>
      </div>
    </div>
    <div class="section-c">
      <div class="section_column">
        <van-icon name="underway-o" color="#FF6618" size="0.4rem" class="a"/>
        <p>浏览记录</p>
        <van-icon name="arrow" color="#000000" size="0.2rem" class="b"/>
      </div>
      <div class="section_c_bor"></div>
      <div class="section_column">
        <van-icon name="qr-invalid" color="#FF6618" size="0.4rem" class="a"/>
        <p>我的名片</p>
        <van-icon name="arrow" color="#000000" size="0.2rem" class="b"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Mine",
  data() {
    return {
      active: 0
    };
  },
  methods:{
    address(){
      this.$router.push("/address");
    }
  }
};
</script>

<style scoped>
header {
  width: 100%;
  height: 1.37rem;
  background: #f37d0f;
  overflow: hidden;
}
.header_photo {
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 0.7rem;
  border: 0.05rem solid #f8b16f;
  margin-left: 0.33rem;
  margin-top: 0.33rem;
  float: left;
}
.header_cell {
  width: auto;
  float: left;
  margin-left: 0.16rem;
  color: white;
  line-height: 1.37rem;
}
.section-a {
  width: 100%;
  height: 0.83rem;
  border-bottom: 0.02rem solid #d9d9d9;
}
.section_p {
  width: auto;
  line-height: 0.83rem;
  color: #212121;
  font-size: 0.26rem;
  float: left;
  margin-left: 0.28rem;
}
.section_all_p {
  width: auto;
  line-height: 0.83rem;
  float: right;
  margin-right: 0.23rem;
}
.section-b {
  width: 100%;
  height: 1.6rem;
  border-bottom: 0.2rem solid #f5f5f5;
}
.tabbar-a {
  position: fixed;
  top: 2.22rem !important;
  border: none !important;
}
.section-b > .tabbar-a {
  height: 1.6rem;
}
.section-c {
  width: 100%;
  height: 1.8rem;
  border-bottom: 0.2rem solid #f5f5f5;
}
.section_column {
  width: 100%;
  height: 0.9rem;
}
.section_c_bor {
  width: 5.44rem;
  height: 0.02rem;
  background: #d9d9d9;
  float: right;
}
  .section_column >.a{
    float: left;
    margin-left: 0.31rem;
    margin-top: 0.28rem;
  }
.section_column p{
  float: left;
  font-size: 0.32rem;
  line-height: 0.9rem;
  margin-left: 0.25rem;
}
.section_column >.b{
  float: right;
  margin-right: 0.23rem;
  margin-top: 0.34rem;
}
</style>
