<template>
  <div class="detail">
    <div class="detail-one">
      <div class="fh"><img src="../../../assets/images/3.png" alt="" /></div>
      <div class="version">
        <img :src="mm.imgList[1].img" alt="" />
      </div>
      <div class="mc">
        <div class="nameA">{{ mm.name }}</div>
        <div class="wz">{{ mm.info }}</div>
        <div class="pic">
          ￥<span>{{ mm.price }}</span>
        </div>
        <div class="xz" @click="fnn">
          <div class="xz1">已选</div>
          <div class="xz2">小米8 屏幕指纹版 6G+128G×1</div>
          <div class="xz3">></div>
        </div>
        <div class="xz">
          <div class="xz1">送至</div>
          <div class="xz2">北京</div>
          <div class="xz3">></div>
        </div>
      </div>
      <div class="znr">
        <div class="znr1"><img :src="mm.info_img[0].img" alt="" /></div>
        <div class="znr2"><img :src="mm.info_img[1].img" alt="" /></div>
      </div>
      <div class="footer">
        <div class="footer1">
          <img src="../../../assets/images/4.png" alt="" />
          <p>首页</p>
        </div>
        <div class="footer2">
          <img src="../../../assets/images/5.png" alt="" />
          <p>购物车</p>
        </div>
        <div class="footer3">加入购物车</div>
      </div>

      <van-popup
        class="pop-up-box"
        v-model="show"
        closeable
        round
        position="bottom"
        :style="{ height: '75%' }"
      >
        <header>
          <img :src="mm.edition[a].color[b].img" alt="" />
          <div class="deploy">
            <h1>￥{{ mm.edition[a].edition_price }}</h1>
            <p>
              {{ mm.name }}<span>{{ mm.edition[a].Memory }}</span>
              <span>{{ mm.edition[a].color[b].color_list }}</span>
            </p>
          </div>
        </header>
        <!--          选择配置-->
        <div class="memory">
          <h1>版本</h1>
          <div
            class="box"
            v-for="(item, index) in mm.edition"
            :key="index"
            @click="fn(index)"
          >
            <span
              :class="make === index ? 'memory-border' : ''"
              @click="colorShow(index)"
              >{{ item.Memory }}<i>{{ item.edition_price }}元</i></span
            >
          </div>
        </div>
        <!--          选择颜色-->
        <div class="color">
          <h1>颜色</h1>
          <div class="boxs" v-if="mm.edition">
            <div
              :class="sub1 === index ? 'color-border' : 'box'"
              @click="fn1(index)"
              v-for="(item, index) in mm.edition[0].color"
              :key="item.id"
              v-show="one"
            >
              <span>{{ item.color_list }}</span>
            </div>
            <div
              :class="sub2 === index ? 'color-border' : 'box'"
              @click="fn2(index)"
              v-for="(item, index) in mm.edition[1].color"
              :key="item.id"
              :v-show="two"
            >
              <span>{{ item.color_list }}</span>
            </div>
          </div>
        </div>
        <!--          购买数量-->
        <div class="buy-num">
          <h1>购买数量</h1>
          <van-stepper v-model="val" class="add" />
        </div>
        <!--          加入购物车-->
        <button @click="jrgwc">加入购物车</button>
      </van-popup>
    </div>
  </div>
</template>

<script>
export default {
  name: "Detail",
  data() {
    return {
      mm: {},
      show: false,
      a: 0,
      b: 0,
      make: 0,
      one: true,
      two: false,
      sub1: 0,
      sub2: 0,
      val: 1,
    };
  },
  methods: {
    fnn() {
      this.show = true;
    },
    fn(i) {
      this.make = i;
    },
    fn1(i) {
      this.sub1 = i;
      // this.colorr = text.color_list
      this.b = i;
    },
    fn2(i) {
      this.sub2 = i;
      this.b = i;
    },
    colorShow(i) {
      this.one = !this.one;
      this.two = !this.two;
      this.a = i;
    },
    jrgwc(){
      console.log(this.mm)
      sessionStorage.setItem('k',JSON.stringify(this.mm.id))
    }
  },
  created() {
    this.mm = JSON.parse(sessionStorage.getItem("gy"));
  }
};
</script>

<style scoped lang="less">
.detail {
  width: 100%;
  height: 100%;
  .detail-one {
    width: 100%;
    height: 100vh;
    background: #f6f6f6;
    position: relative;
    top: 0;
    left: 0;
    z-index: 99;
    .fh {
      width: 0.51rem;
      height: 0.51rem;
      background: #f5f5f5;
      border-radius: 50%;
      margin-left: 0.34rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
.version {
  width: 100%;
  height: 6.26rem;
  background: #f6f6f6;
  img {
    width: 100%;
    height: 100%;
  }
}
.mc {
  width: 100%;
  height: 5.15rem;
  background: white;
  overflow: hidden;
  .nameA {
    font-size: 0.42rem;
    color: #333333;
    font-weight: bold;
    line-height: 100%;
    margin-top: 0.4rem;
    margin-left: 0.28rem;
  }
  .wz {
    font-size: 0.23rem;
    color: #757575;
    line-height: 0.34rem;
    margin-top: 0.12rem;
    margin-left: 0.28rem;
  }
  .pic {
    font-size: 0.32rem;
    color: #ff6700;
    line-height: 100%;
    margin-top: 0.22rem;
    margin-left: 0.28rem;
    margin-bottom: 0.21rem;
  }
}
.xz {
  width: 5.86rem;
  height: 0.84rem;
  background: #fafafa;
  border-radius: 0.1rem 0.1rem 0 0;
  border-bottom: 0.01rem solid #cccccc;
  margin: auto;
  line-height: 0.84rem;
  .xz1 {
    float: left;
    font-size: 0.21rem;
    color: #737373;
    margin-left: 0.29rem;
  }
  .xz2 {
    float: left;
    font-size: 0.21rem;
    color: #000000;
    margin-left: 0.3rem;
  }
  .xz3 {
    float: right;
    margin-right: 0.24rem;
  }
}
.znr {
  width: 100%;
  .znr1 {
    width: 100%;
    height: 10.33rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .znr2 {
    width: 100%;
    height: 6.33rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.footer {
  width: 5.97rem;
  height: 0.84rem;
  background: #ffffff;
  border-radius: 0.1rem;
  position: fixed;
  bottom: 0.1rem;
  left: 0.18rem;
  .footer1 {
    float: left;
    text-align: center;
    margin-top: 0.05rem;
    margin-left: 0.28rem;
    img {
      width: 0.3rem;
      height: 0.3rem;
    }
    p {
      font-size: 0.2rem;
      line-height: 100%;
      margin-top: 0.14rem;
    }
  }
  .footer2 {
    float: left;
    margin-top: 0.05rem;
    margin-left: 0.28rem;
    text-align: center;
    img {
      width: 0.3rem;
      height: 0.3rem;
    }
    p {
      font-size: 0.2rem;
      line-height: 100%;
      margin-top: 0.14rem;
    }
  }
  .footer3 {
    width: 2.56rem;
    height: 0.6rem;
    background: #f56600;
    float: right;
    border-radius: 0.23rem;
    text-align: center;
    line-height: 0.6rem;
    margin-top: 0.13rem;
    margin-right: 0.28rem;
    font-size: 0.33rem;
    color: #ffffff;
  }
}

.pop-up-box {
  header {
    display: flex;
    img {
      width: 1.1rem;
      height: 1.1rem;
      border: 0.01rem solid #ccc;
      margin-left: 5%;
    }
    .deploy {
      h1 {
        font-size: 0.34rem;
        margin-top: 0.2rem;
      }
      p {
        font-size: 0.13rem;
        text-indent: 0.07rem;
        color: #212121;
        span {
          margin-left: 0.04rem;
        }
      }
    }
  }
  .memory {
    h1 {
      font-size: 0.13rem;
      margin-left: 4%;
      text-indent: 0;
      margin-top: 0.2rem;
      margin-bottom: 0.07rem;
    }
    .box {
      width: 90%;
      margin-left: 5%;
      overflow: hidden;
      span {
        width: 99%;
        height: 0.32rem;
        display: block;
        background: #fff;
        line-height: 0.32rem;
        text-indent: 0.15rem;
        color: #8f8f94;
        border: 0.02rem solid #ccc;
        margin-top: 0.1rem;
        i {
          float: right;
          margin-right: 0.15rem;
          font-style: normal;
        }
      }
      .memory-border {
        border: 0.02rem solid #f56600;
        color: #f56600;
      }
    }
  }
  .color {
    h1 {
      font-size: 0.13rem;
      margin-left: 4%;
      text-indent: 0;
      margin-top: 0.2rem;
      margin-bottom: 0.07rem;
    }
    .boxs {
      width: 86%;
      margin-left: 7%;
      overflow: hidden;
      .box {
        float: left;
        width: 20%;
        height: 0.32rem;
        margin-left: 3%;
        margin-top: 0.14rem;
        border: 0.02rem solid #ccc;
        text-align: center;
        line-height: 0.32rem;
        font-size: 0.14rem;
        color: #8f8f94;
      }
    }
    .color-border {
      float: left;
      width: 20%;
      height: 0.32rem;
      margin-left: 3%;
      margin-top: 0.14rem;
      border: 0.02rem solid #f56600;
      text-align: center;
      line-height: 0.32rem;
      font-size: 0.14rem;
      color: #f56600;
    }
  }
  .buy-num {
    overflow: hidden;
    h1 {
      float: left;
      font-size: 0.13rem;
      margin-left: 4%;
      text-indent: 0;
      margin-top: 0.35rem;
      margin-bottom: 0.07rem;
    }
    .add {
      float: right;
      border: 0.02rem solid #bbb;
      border-radius: 0.04rem;
      margin-top: 0.25rem;
      margin-right: 4%;
    }
  }
  button {
    width: 90%;
    height: 0.3rem;
    margin-left: 5%;
    background: #ff6700;
    margin-top: 0.15rem;
    border: none;
    border-radius: 0.2rem;
    color: #fff;
    font-size: 0.14rem;
  }
}
</style>
