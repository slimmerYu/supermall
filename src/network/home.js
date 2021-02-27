/*
 * @Description: 
 * @version: 
 * @Author: slimmerYu
 * @Date: 2020-07-31 11:01:54
 * @LastEditors: slimmerYu
 * @LastEditTime: 2020-08-02 16:02:27
 */ 
import {request} from './request'

export function getHomeMultidata () {
  return request({
    url:'home/multidata'
  })
}

export function getHomeGoods(type,page){
  return request({
    url:'home/data',
    params:{
      type,
      page
    }
  })
}