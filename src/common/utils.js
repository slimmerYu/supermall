/*
 * @Description: 
 * @version: 
 * @Author: slimmerYu
 * @Date: 2020-08-06 14:43:44
 * @LastEditors: slimmerYu
 * @LastEditTime: 2020-08-11 16:22:30
 */
//防抖函数
export function debounce(func,delay){//函数，等多久
  let timer = null

  return function(...args){
    //判断有没有timer，如果有就清除掉
    if(timer) clearTimeout(timer)

    //重新计时
    timer = setTimeout(()=>{
      func.apply(this,args)
    },delay)
  }
}


export function formatDate(date,fmt) {
  //1.h获取年份
  if(/(y*)/.test(fmt)) {
    fmt = fmt.replace(RefExp.$1, (data.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for(let k in o) {
    if(new RegExp('(${k})').test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1,(RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
};

function padLeftZero(str) {
  return ('00' + str).substr(str.length);
};