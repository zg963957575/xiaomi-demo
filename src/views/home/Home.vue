<template>
  <div class="home">
    <div class="header">
      <div class="circle"></div>
      <div class="seek">
        <div class="img1"><img src="../../assets/images/1.png" alt="" /></div>
        <input type="text" />
      </div>
    </div>
    <!--    //首页轮播-->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in msgArr" :key="index">
        <img :src="item.img" alt="" />
      </van-swipe-item>
    </van-swipe>
    <div class="icon"><img src="../../assets/images/2.png" alt="" /></div>
    <div class="concat">
      <div
        class="concat-one"
        v-for="item in xM"
        :key="item.id"
        @click="fn(item)"
      >
        <img :src="item.img" alt="" />

        <p>{{ item.name }}</p>
        <div class="wz">{{ item.content }}</div>
        <div class="pic">
          ￥<span>{{ item.price }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { homeimgarr, homexiaomi } from "../../api/index";
export default {
  name: "Home",
  data() {
    return {
      //轮播数组
      msgArr: [],
      //手机数组
      xM: []
    };
  },
  methods: {
    //请求轮播数据
    getHomeimgarr() {
      homeimgarr().then(res => {
        console.log(res);
        this.msgArr = res.data;
      });
    },
    getHomexiaomi() {
      homexiaomi().then(res => {
        console.log(res);
        this.xM = res.data;
      });
    },
    fn(id) {
      sessionStorage.setItem("gy", JSON.stringify(id));
      this.$router.push("/detail");
    }
  },
  created() {
    this.getHomeimgarr();
    this.getHomexiaomi();
  }
};
</script>

<style scoped lang="less">
.home {
  width: 100%;
  height: 100%;
  .header {
    width: 100%;
    height: 1.13rem;
    background: #f2f2f2;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    .circle {
      width: 0.68rem;
      height: 0.68rem;
      background: #87ceeb;
      border-radius: 50%;
      float: left;
      margin-top: 0.21rem;
      margin-left: 0.34rem;
    }
    .seek {
      width: 3.8rem;
      height: 0.47rem;
      background: white;
      border: 0.02rem solid #e5e5e5;
      border-radius: 0.22rem;
      float: left;
      margin-top: 0.3rem;
      margin-left: 1.11rem;
      display: flex;
      .img1 {
        width: 0.28rem;
        height: 0.27rem;
        margin-top: 0.09rem;
        margin-left: 0.27rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
      input {
        width: 3rem;
        margin-left: 0.1rem;
        border: none;
      }
    }
  }
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
  margin-top: 1.13rem;
  img {
    width: 100%;
    height: 100%;
  }
}
.icon {
  width: 100%;
  height: 1.28rem;
  img {
    width: 100%;
    height: 100%;
  }
}
.concat {
  width: 100%;
  height: 100%;
  /*background: #f5f5f5;*/
  padding-top: 0.17rem;
  padding-bottom: 0.6rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .concat-one {
    width: 48%;
    height: 4.6rem;
    background: white;
    img {
      width: 100%;
      height: 3.16rem;
    }
    p {
      font-size: 0.25rem;
      line-height: 100%;
      color: #333333;
      font-weight: bold;
      margin-top: 0.23rem;
      margin-left: 0.17rem;
    }
    .wz {
      font-size: 0.19rem;
      color: #757575;
      line-height: 100%;
      margin-top: 0.15rem;
      margin-left: 0.17rem;
    }
    .pic {
      font-size: 0.2rem;
      color: red;
      line-height: 100%;
      margin-left: 0.17rem;
      margin-top: 0.12rem;
    }
  }
}
</style>
