// 这个时axios的配置
import axios from 'axios';

const service = axios.create({
  baseURL: 'http://apisandbox.zoomlion.com',
  timeout: 20000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    Accept: 'application/json'
  }
})

service.interceptors.response.use(function (response) {
  return response.status=== 200 ? Promise.resolve(response): Promise.reject(response);
}, function (error) {
  return error
})

export default service;