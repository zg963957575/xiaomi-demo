<template>
  <div class="newaddress">
    <header>
      <van-icon
        name="arrow-left"
        color="#676767"
        size="0.2rem"
        class="a"
        @click="getBack"
      />
      <p>新增地址</p>
      <van-icon name="search" color="#676767" class="b" size="0.28rem" />
    </header>

    <van-address-edit
      :area-list="areaList"
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
    />
  </div>
</template>

<script>
import { Toast } from "vant";
import area from "../../../assets/js/area";
export default {
  name: "Newaddress",
  data() {
    return {
      areaList: area,
      searchResult: [],
      newsite: {
        name: "",
        phone: "",
        address_info: "",
        address_region: ""
      }
    };
  },
  methods: {
    getBack() {
      this.$router.push("/address");
    },
    onSave(val) {
      Toast("save");
      this.newsite.name = val.name;
      this.newsite.phone = val.tel;
      this.newsite.address_info = val.addressDetail;
      this.newsite.address_region = val.province+val.city+val.county;
      console.log(val)
      this.$router.push({ path: "/address", query: { search: this.newsite } });
    }
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
</style>
