//匿名函数自我执行
(function(){
    console.log(1)
})()

//函数里的匿名函数
function box(){
    return function(){
        console.log(2)
    }
}

//官方对闭包的解释是：一个拥有许多变量和绑定了这些变量的环境的表达式
//（通常是一个函数），因而这些变量也是该表达式的一部分
//闭包
//包是指有权访问另一个函数作用域中的变量的函数， 创建闭包的常见的方式， 就是在
//一个函数内部创建另一个函数，通过另一个函数访问这个函数的局部变量。
function fn1(){
    var a = 1
    return function(){
        console.log(a++)
    }
}
//匿名函数和闭包的结合,a保存在了内存中，所以能一直累加
var inner = fn1()
inner()//1
inner()//2

//匿名函数和闭包我注意到的有两点

//（1）下面的函数由于函数作用域的原因，返回的结果都是五
function out1(){
    var arr = []
    for(var i = 0; i < 5; i++){
        arr[i] = function(){
            console.log(i)
        }
    }
    return arr
}
var outFn = out1()
for(var i = 0; i < 5; i++){
    outFn[i]()//很尴尬，全是五，不按套路出牌
}

//怎么解决呢，当然是匿名函数自动执行啊
function out2(){
    var arr = []
    for(var i = 0; i < 5; i++){
        arr[i] = (function(num){
            return num
        })(i)//关键，让函数自动执行保存变量
    }
    return arr
}

var outFn = out2()
for(var i = 0; i < 5; i++){
   console.log(outFn[i])
}


//this指向的问题，在匿名函数中，this指向的是全局
var user1 = 'out'
function userOut(){
    var user1 = 'inner'
    return function(){
        return this.user1
    }
}
var out = userOut()
console.log(out())//在node中输出的undefined,在浏览器中输出的是out，比较尴尬，我之前只在浏览器中试了，我要查查资料，为什么在node中会输出undefined


