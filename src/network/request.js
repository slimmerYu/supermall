/*
 * @Description: 
 * @version: 
 * @Author: slimmerYu
 * @Date: 2020-07-29 14:16:57
 * @LastEditors: slimmerYu
 * @LastEditTime: 2020-08-03 15:05:37
 */ 
import axios from 'axios';
export function request(config){
    //1.创建axios的实例
  const instance = axios.create({
    baseURL:'http://152.136.185.210:8000/api/z8',
    // baseURL:'http://123.207.32.32:8000',
    timeout:5000
  })

  //2.axios的拦截器
  //2.1请求拦截的作用
  instance.interceptors.request.use(config=>{
    // console.log(config);
    //1.比如说config中的一些信息不符合服务器的要求，需要加工一下
    //2.比如每次发送网络请求时，都希望在界面中显示一个请求的图标
    //3.某些网络请求（比如登录（token））必须携带一些特殊的信息
    return config
  },err=>{
    console.log(err);
  })
  //2.2响应拦截
  instance.interceptors.response.use(res=>{
    // console.log(res);
    return res.data
  },err=>{
    console.log(err);
  })

  //3.发送真正的网络请求
  return instance(config)
 
}


/* function test(aaa,bbb){
  aaa('hello')
}

test(function(res){},function(){}) */