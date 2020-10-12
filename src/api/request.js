//axios二次封装
//第一步导入
import axios from "axios";

//基础设置
// axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.timeout = 100000;

//网络请求的拦截器

//请求拦截器
axios.interceptors.request.use(
  function(config) {
    //config：配置
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

//相应拦截器
axios.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    return Promise.reject(error);
  }
);

//请求方式进行一次封装
function $http(url, method = "GET", data = {}) {
  let promise = null;
  if (method == "GET") {
    promise = axios.get(url, {
      params: data
    });
  } else if (method == "POST") {
    promise = axios.post(url, data);
  }
  return promise;

  // let promise = null;
  // promise = new Promise(function(resolve, reject) {
  //   if (method === "GET") {
  //     axios
  //       .get(url, {
  //         params: data
  //       })
  //       .then(res => {
  //         resolve(res);
  //       })
  //       .catch(err => {
  //         reject(err);
  //       });
  //   } else if (method == "POST") {
  //     axios
  //       .get(url, data)
  //       .then(res => {
  //         resolve(res);
  //       })
  //       .catch(err => {
  //         reject(err);
  //       });
  //   }
  // });
  // return promise;
}

export default $http;
