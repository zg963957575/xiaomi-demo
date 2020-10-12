<template>
  <div class="classify">
    <div class="main" ref="leftli">
      <div class="main_left">
        <ul>
          <li
            :class="index === currentIndex ? 'current' : ''"
            v-for="(item, index) in searchArr"
            :key="item.index"
            @click="_clickHandle(index)"
          >
            {{ item.left }}
          </li>
        </ul>
      </div>
      <div class="main_right" ref="rightli">
        <ul>
          <li v-for="item in searchArr" :key="item.name" class="right-item">
            <van-divider>{{ item.left }}</van-divider>
            <ol>
              <van-grid :border="false" :column-num="3">
                <van-grid-item v-for="i in 10" :key="i">
                  <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
                </van-grid-item>
              </van-grid>
            </ol>
            <van-button type="primary" block color="#7232dd"
              >块级元素</van-button
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { classifydata } from "../../api";
import BetterScroll from "better-scroll";
export default {
  name: "Classify",
  data() {
    return {
      select: 0,
      scrollY: 0,
      rightTops: [],
      searchArr: {},
    };
  },
  mounted() {
    this.getdata();
  },
  methods: {
    getdata() {
      classifydata().then(res => {
        console.log(res);
        this.searchArr = res.data;
      });
    },
    getBscroll() {
      this.leftBS = new BetterScroll(".main_left", {
        click: true
      });
      this.rightBS = new BetterScroll(".main_right", {
        probeType: 3
      });
      this.rightBS.on("scroll", pos => {
        this.scrollY = Math.floor(Math.abs(pos.y));
      });
    },
    _initRightLiTops() {
      let list = this.$refs.rightli.querySelectorAll(".right-item");
      let temArr = [];
      let top = 0;
      temArr.push(top);
      // for (var i = 0; i < list.length; i++) {
      //   top += list[i].clientHeight;
      //   temArr.push(top);
      // }
      list.forEach((item, index) => {
        if (index === list.length - 1) {
          item.style.paddingBottom = `${window.innerHeight -
            item.clientHeight -
            135}px`;
          this.rightBS.refresh();
        }
        top += list[index].clientHeight;
        temArr.push(top);
      });
      this.rightTops = temArr;
      console.log(temArr);
    },
    _inintleftMove(i) {
      let list = this.$refs.leftli.getElementsByTagName("li");
      let el = list[i];
      this.leftBS.scrollToElement(el, 300);
    },
    _clickHandle(i) {
      this.scrollY = this.rightTops[i];
      this.rightBS.scrollTo(0, -this.scrollY);
    }
  },
  computed: {
    currentIndex() {
      return this.rightTops.findIndex((item, index) => {
        this._inintleftMove(index);
        return this.scrollY >= item && this.scrollY < this.rightTops[index + 1];
      });
    }
  },
  watch: {
    searchArr(val) {
      if (val) {
        this.$nextTick(() => {
          this.getBscroll();
          this._initRightLiTops();
        });
      }
    }
  }
};
</script>

<style scoped>
.main {
  width: 100%;
  position: absolute;
  left: 0;
  top: 0.8rem;
  bottom: 0.55rem;
  overflow: hidden;
  display: flex;
}
.main_left {
  width: 20%;
  /*background: wheat;*/
}
.main_left li {
  font-size: 0.24rem;
  text-align: center;
  line-height: 0.8rem;
  margin-top: 0.05rem;
  position: relative;
}
.current {
  color: red;
}
.current:before {
  content: "";
  display: block;
  width: 0.03rem;
  height: 100%;
  background: red;
  position: absolute;
  left: 0;
  top: 0;
}
.main_right {
  flex: 1;
  /*background: greenyellow;*/
}
.title {
  display: flex;
  justify-content: space-between;
  line-height: 0.3rem;
}
h3 {
  font-size: 0.24rem;
}
a {
  font-size: 0.12rem;
}
.main_right img {
  width: 0.8rem;
  height: 0.8rem;
}
.main_right p {
  font-size: 0.15rem;
  line-height: 0.2rem;
  text-align: center;
}
.main_right ol {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
