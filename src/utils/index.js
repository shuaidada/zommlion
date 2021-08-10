// 这个时axios的配置
import axios from 'axios';
// import { config } from 'vue/types/umd';
axios.defaults.baseURL = 'http://127.0.0.1:3000';
// 错误信息处理
const  errorHandle = (status, other) => {
  switch (status) {
    case 400:
      console.log('信息验证失败');
      break;
    case 404:
      console.log('请求资源不存在');
      break;
    default :
      console.log(other);
      break;
  }
}
axios.interceptors.request.use((config) => {

  return config;
}, (error) => {
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
  return response.status=== 200 ? Promise.resolve(response): Promise.reject(response);
}, function (error) {
  const { response }=error;
  if(response){
    errorHandle(response.status, response.data.message)
    return Promise.reject(response.data);
  }else{
    console.log('断了');
  }
});

export default axios;