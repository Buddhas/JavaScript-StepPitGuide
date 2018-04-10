//在ES6之前，JavaScript没有块级作用域(一对花括号{}即为一个块级作用域)，
//只有全局作用域和函数作用域。变量提升即将变量声明提升到它所在作用域的最开始的部分

//(1)变量提升
//全局范围内的变量提升
console.log(a) //undefined
var a = 1
console.log(a) // 1

//函数范围内的变量提升
function fn(){
    console.log(a) // 1 当在函数作用域内找不到对应变量时，会向上寻找
    console.log(b) //undefined
    var a = 2
    var b = 2

    console.log(a) //2
    console.log(b) //2
}


//(2)函数提升

//js中声明函数有函数声明和函数表达式两种方式，只有函数声明存在函数提升

console.log(fn1) //function fn1(){}
console.log(fn2) //undefined

function fn1(){}//函数声明
var fn2 = function(){}//函数表达式







