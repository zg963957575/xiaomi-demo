//储存所有项目的请求接口
import $http from "./request";

//封装接口
// export function homecasual() {
//   return $http("/api/homecasual");
// }

//首页轮播图
export const homeimgarr = () => $http("/data/rotationChart.json");
//首页手机图片
export const homexiaomi = () => $http("/data/homeGoods.json");
export const classifydata = () => $http("/data/data.json");
