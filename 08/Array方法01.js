//判断一个对象是数组还是对象

//(1)切记，因为array是继承自Object，typeof出来的都是Object，不能用typeof检测是否是数组


//（2）一般有两种方法来检测

var arr = []
var obj = {}
console.log(arr instanceof Array)//true
console.log(obj instanceof Array)//false


console.log(Array.isArray(arr))//ture
console.log(Array.isArray(obj))//false