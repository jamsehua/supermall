
import axios from 'axios'

export function reques(config) {
  const instance = axios.create({
    baseURL: 'http://106.54.54.237:8000/api/wh',
    // timeout:10000
  })

  //请求拦截
  instance.interceptors.request.use(config => {
    // console.log(config)
    return config;
  },err => {
    console.log(err)
  })
  //响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  },error => {
    console.log(error)
  })
  return instance(config)
}
