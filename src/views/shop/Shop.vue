<template>
  <div class="shop">
    <div class="header">
      <img src="../../assets/img/1.png" alt="" class="i1" />
      <p class="qq">购物车</p>
      <img src="../../assets/img/2.png" alt="" class="i2" />
    </div>
    <div class="login">
      <div class="login_left">登录后享受更多优惠</div>
      <div class="login_right">
        去登录<img src="../../assets/img/3.png" alt="" class="i3" />
      </div>
    </div>
    <div class="content" v-if="ShoppingArr.length === 0">
      <div class="a">
        购物车还是空空的
        <p class="qw">去逛逛</p>
      </div>
    </div>
    <div class="content_1" v-else>
      <img src="" alt="" class="i5" />
      <div class="c_r">
        <p class="qy">小米8 屏幕指纹版</p>
        <p class="qu">￥7999</p>
        <van-stepper v-model="value" />
        <!--        <div class="qi">-->
        <!--          <p class="p1">-</p>-->
        <!--          <p class="p2">4</p>-->
        <!--          <p class="p3">+</p>-->
        <!--        </div>-->
      </div>
      <img src="../../assets/img/5.png" alt="" class="i6" />
    </div>
    <div class="love">
      <img src="../../assets/img/4.png" alt="" class="i4" />
    </div>
    <div class="love_content">
      <div class="love_content1" v-for="item in GuessArr" :key="item.id">
        <img :src="item.img" alt="" />
        <p class="qe">{{ item.name }}</p>
        <p class="qr">{{ item.content }}</p>
        <p class="qt">￥{{ item.price }}</p>
      </div>
    </div>
    <div class="closeAccount" v-show="ShoppingArr.length !== 0">
      <div class="left">
        <p class="p4">共4件 金额：</p>
        <p class="p5"><span>31996</span>元</p>
      </div>
      <div class="center">继续购物</div>
      <div class="right">去结算</div>
    </div>
  </div>
</template>

<script>
  
import { getGuesslike } from "../../api";

export default {
  name: "Shop",
  data() {
    return {
      GuessArr: [],
      ShoppingArr: [{}],
      commodityId: 0,
      value: 1,
    };
  },
  methods: {
    //请求猜你喜欢数据
    Guesslike() {
      getGuesslike().then(res => {
        console.log(res);
        if (res.status === 200) {
          this.GuessArr = res.data;
        }
      });
    },
    fn() {
      if (this.ShoppingArr.length !== 0) {
        this.$store.commit("f1", false);
      }
    }
  },
  created() {
    this.Guesslike();
    this.commodityId = sessionStorage.getItem("key");
    this.fn();
    this.$axios.get('/abc').then(res=>{
      console.log(res)
    })
  }
};
</script>

<style scoped lang="less">
.shop {
  width: 100%;
  height: 100vh;
  .header {
    width: 100%;
    height: 0.85rem;
    background: #f2f2f2;
    position: fixed;
    z-index: 111;
    top: 0;
    left: 0;
    .i1 {
      position: absolute;
      width: 0.12rem;
      height: 0.2rem;
      top: 0.32rem;
      left: 0.36rem;
    }
    .qq {
      font-size: 0.29rem;
      color: #666666;
      line-height: 0.85rem;
      text-align: center;
    }
    .i2 {
      width: 0.27rem;
      height: 0.27rem;
      position: absolute;
      top: 0.28rem;
      right: 0.28rem;
    }
  }
  .login {
    width: 100%;
    height: 1.1rem;
    margin-top: 0.85rem;
    line-height: 1.1rem;
    .login_left {
      float: left;
      font-size: 0.29rem;
      color: #333333;
      margin-left: 0.28rem;
    }
    .login_right {
      font-size: 0.23rem;
      float: right;
      margin-right: 0.24rem;
      color: #757575;
      .i3 {
        width: 0.14rem;
        height: 0.24rem;
        float: right;
        margin-top: 0.45rem;
        margin-left: 0.1rem;
      }
    }
  }
  .content {
    width: 100%;
    height: 1.2rem;
    background: #ebebeb;
    .a {
      text-align: center;
      line-height: 1.2rem;
      font-size: 0.25rem;
      color: #ababab;
      .qw {
        display: inline-block;
        width: 1.18rem;
        height: 0.38rem;
        border: 0.02rem solid #c8c8c8;
        line-height: 0.38rem;
        text-align: center;
        font-size: 0.25rem;
        color: #333333;
        margin-left: 0.18rem;
      }
    }
  }
  .content_1 {
    width: 100%;
    height: 2.1rem;
    overflow: hidden;
    position: relative;
    .i5 {
      width: 1.66rem;
      height: 1.83rem;
      border: 0.02rem solid #eeeeee;
      display: block;
      margin-top: 0.12rem;
      margin-left: 0.4rem;
      float: left;
    }
    .c_r {
      float: left;
      margin-left: 0.15rem;
      .qy {
        font-size: 0.23rem;
        color: #666666;
        line-height: 100%;
        margin-top: 0.25rem;
      }
      .qu {
        font-size: 0.18rem;
        color: #999999;
        line-height: 100%;
        margin-top: 0.2rem;
      }
      .van-stepper {
        margin-top: 0.22rem;
      }
      /*.qi {*/
      /*  width: 2.36rem;*/
      /*  height: 0.66rem;*/
      /*  border: 0.02rem solid #bbbbbb;*/
      /*  border-radius: 0.05rem;*/
      /*  margin-top: 0.22rem;*/
      /*  .p1 {*/
      /*    float: left;*/
      /*    width: 0.8rem;*/
      /*    height: 0.66rem;*/
      /*    border-right: 0.02rem solid #bbbbbb;*/
      /*    font-size: 0.3rem;*/
      /*    text-align: center;*/
      /*    line-height: 0.66rem;*/
      /*    background: #f9f9f9;*/
      /*  }*/
      /*  .p2 {*/
      /*    float: left;*/
      /*    width: 0.72rem;*/
      /*    height: 100%;*/
      /*    border-right: 0.02rem solid #bbbbbb;*/
      /*    text-align: center;*/
      /*    line-height: 0.66rem;*/
      /*    font-size: 0.28rem;*/
      /*  }*/
      /*  .p3 {*/
      /*    float: left;*/
      /*    width: 0.8rem;*/
      /*    height: 0.66rem;*/
      /*    font-size: 0.3rem;*/
      /*    text-align: center;*/
      /*    line-height: 0.66rem;*/
      /*    background: #f9f9f9;*/
      /*  }*/
      /*}*/
    }
    .i6 {
      width: 0.27rem;
      height: 0.36rem;
      position: absolute;
      display: block;
      bottom: 0.62rem;
      right: 0.35rem;
    }
  }
  .love {
    width: 100%;
    .i4 {
      width: 100%;
      height: 1.06rem;
    }
  }
  .love_content {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 0.85rem;
    .love_content1 {
      width: 49%;
      height: 4.6rem;
      img {
        width: 100%;
        height: 3.16rem;
      }
      .qe {
        font-size: 0.28rem;
        font-weight: bold;
        color: #333333;
        line-height: 100%;
        margin-top: 0.23rem;
        margin-left: 0.18rem;
      }
      .qr {
        font-size: 0.19rem;
        color: #757575;
        line-height: 100%;
        margin-top: 0.14rem;
        margin-left: 0.18rem;
      }
      .qt {
        font-size: 0.22rem;
        color: #ea625b;
        margin-top: 0.12rem;
        margin-left: 0.18rem;
        line-height: 100%;
      }
    }
  }
  .closeAccount {
    width: 100%;
    height: 0.9rem;
    position: fixed;
    background: #ffffff;
    bottom: 0;
    left: 0;
    .left {
      width: 33.333%;
      height: 100%;
      float: left;
      text-align: center;
      .p4 {
        font-size: 0.22rem;
        color: #999999;
        margin-top: 0.1rem;
        line-height: 100%;
      }
      .p5 {
        font-size: 0.2rem;
        color: #999999;
        line-height: 100%;
        margin-top: 0.18rem;
        span {
          font-size: 0.28rem;
          font-weight: bold;
          color: #ff5722;
        }
      }
    }
    .center {
      width: 33.333%;
      height: 100%;
      background: #f4f4f4;
      float: left;
      font-size: 0.25rem;
      text-align: center;
      line-height: 0.9rem;
      color: #333333;
    }
    .right {
      width: 33.333%;
      height: 100%;
      background: #ff6700;
      float: left;
      font-size: 0.25rem;
      color: #ffffff;
      text-align: center;
      line-height: 0.9rem;
    }
  }
}
</style>
