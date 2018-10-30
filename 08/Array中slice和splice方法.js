//slice(该方法为数组和String共有),
//方法不会改变原数组，返回处理后的新数组
var arr = [1,2,3,4,5,6]

var arrSli = arr.slice(1,3)//参数表示开始下标和结束下标

console.log(arr)//[1,2,3,4,5,6]
console.log(arrSli)//[2,3]

//splice
//方法会改变原数组，返回处理后的原数组
var arr1 = [1,2,3,4,5,6]

arr1.splice(2,0,1) //第一个参数表示开始下标，第二个表示删除元素的数量，之后的元素表示添加的数量，输出[ 1, 2, 1, 3, 4, 5, 6 ]
console.log(arr1)

console.log("123".split(""))


