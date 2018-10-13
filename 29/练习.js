


//在条件判断时，
//除了 undefined， null， false， NaN， ''， 0， -0，其他所有值都转为 true，包括所有对象。


//只有当加法运算时，其中一方是字符串类型，
//就会把另一个也转为字符串类型。其他运算只要其中一方是数字，那么另一方就转为数字

//对于加号需要注意这个表达式 'a' + + 'b'
console.log(''==[])
console.log(Number(0))
var a = [0,1,2,3,4].forEach(Number)
console.log(parseInt('12', 13))

var s = '1234'
console.log(0 == null)
