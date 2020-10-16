<template>
  <div class="address">
    <header>
      <van-icon
        name="arrow-left"
        color="#676767"
        size="0.2rem"
        class="a"
        @click="getBack"
      />
      <p>收货地址</p>
      <van-icon name="search" color="#676767" class="b" size="0.28rem" />
    </header>
    <section v-for="(item,index) in classaddressAll" :key="index">
      <div class="section_tex">
        <div class="section_tex_top">
          <p class="name_a">{{ item.name }}</p>
          <p class="phone_p">{{ item.phone }}</p>
          <p class="remo" @click="remoA(index)">删除</p>
        </div>
        <div class="section_tex_bot">
          <div class="section_left">
            <p class="p_one">{{ item.address_info }}</p>
            <p class="p_two">{{ item.address_region }}</p>
          </div>
          <div class="section_right">
            <van-icon name="arrow" size="0.2rem" />
          </div>
        </div>
      </div>
    </section>
    <div class="fooder" @click="address">新增地址</div>
  </div>
</template>

<script>
import { classaddress } from "../../../api/index";
export default {
  data() {
    return {
      classaddressAll: []
    };
  },
  name: "Address",
  methods: {
    getBack() {
      this.$router.push("/mine");
    },
    address() {
      this.$router.push("/newaddress");
    },
    fn() {
      classaddress().then(res => {
        console.log(res);
        this.classaddressAll = res.data;

        if (this.$route.query.search === undefined) {
          console.log();
        } else {
          this.classaddressAll.push(this.$route.query.search);
        }
      });
    },
    remoA(index) {
      this.classaddressAll.splice(index,1)
    }
  },
  created() {
    this.fn();
  }
};
</script>

<style scoped>
header {
  width: 100%;
  height: 0.85rem;
  background: #f2f2f2;
  position: relative;
}
header p {
  text-align: center;
  color: #666666;
  font-size: 0.3rem;
  line-height: 0.85rem;
}
header .a {
  position: absolute;
  top: 0.33rem;
  left: 0.38rem;
}
header .b {
  position: absolute;
  right: 0.29rem;
  top: 0.29rem;
}
section {
  width: 6.02rem;
  height: 1.92rem;
  margin: 0.17rem auto;
  border: solid #eeeeee;
  border-radius: 0.05rem;
}
section .section_tex {
  width: 5.68rem;
  height: 1.92rem;
  margin: auto;
}
.section_tex_top {
  width: 100%;
  height: 0.96rem;
  border-bottom: 0.02rem solid #eeeeee;
}
.section_tex_bot {
  width: 100%;
  height: 0.96rem;
}
.section_tex_top > .name_a {
  font-size: 0.26rem;
  line-height: 0.96rem;
  float: left;
  color: #ff6600;
  margin-left: 0.26rem;
}
.section_tex_top .phone_p {
  float: left;
  font-size: 0.2rem;
  line-height: 0.96rem;
  color: #000000;
  margin-left: 0.61rem;
}
.remo {
  font-size: 0.26rem;
  line-height: 0.96rem;
  float: right;
  margin-right: 0.26rem;
  color: #9a9a9a;
}
.section_left {
  width: 5.09rem;
  height: 0.94rem;
  float: left;
}
.p_one {
  margin-top: 0.2rem;
  margin-left: 0.25rem;
  font-size: 0.22rem;
  color: #3c3c3c;
}
.p_two {
  margin-left: 0.25rem;
  margin-top: 0.07rem;
  font-size: 0.22rem;
  color: #3c3c3c;
}
.section_right {
  width: 0.59rem;
  height: 0.94rem;
  float: left;
}
.section_right .van-icon {
  margin-top: 0.3rem;
  margin-left: 0.3rem;
}
.fooder {
  width: 100%;
  height: 0.86rem;
  background: #ff6700;
  position: fixed;
  bottom: 0;
  z-index: 999;
  font-size: 0.24rem;
  line-height: 0.86rem;
  text-align: center;
  color: #fff7f2;
}
</style>
