//在es5中只有函数作用域和全局作用域
function fn(){
    for(var i = 0; i < 10; i++){

    }
    console.log(i)//10
}
fn()
//上面的代码块中i输出的是10，由于我之前学的java，看完之后一脸懵逼，看完高程之后才明白这是函数作用域的问题，不得不说有点坑

//在es6中是没有这个问题的，es6中用let声明的变量属于块级作用域
function fn1(){
    for(let i = 0; i < 10; i++){

    }
    //console.log(i)//出错
}
fn1()

//但要注意的是，es5中没有用var声明的变量会变为全局变量
function fn2(){
    a = '我是fn2里面的变量'
}
fn2()
console.log(a)//尴尬不，输出的是：我是fn2里面的变量，学了java之后这个我是忍不了的，吐槽一下

//es5如果要实现块级作用域需要用到闭包
function out(){
    var num = 1
    return function(){
        console.log(num++)
    }
}

var inner = out()
inner()//1
inner()//2
//num被保存了下来

//作用域链
var globe = 'out'
function fn3(){
    var a = 'inner'
    console.log(globe)//out
}
fn3()
//当在函数作用域内找不到对应的变量时，js会向上全局作用域寻找变量