/*
 * @Descripttion: 
 * @version: 
 * @Author: 笑佛弥勒
 * @Date: 2020-04-26 22:16:27
 * @LastEditors: 笑佛弥勒
 * @LastEditTime: 2020-04-26 22:20:47
 */
// 第一种
function flatten(arr) {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flatten(cur) : cur)
  }, [])
}