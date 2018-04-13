/*
每次调用函数时，浏览器都会把一个对象作为隐藏的参数传递进函数，这个对象就是函数执行的上下文对象，我们可以通过 this 来引用该对象。
根据函数的调用形式的不同，this 的值也不同：
1.以函数的形式调用时，this 永远都是window ；
2.以方法的形式调用时，谁调用 this 就是谁；
3.如果以构造函数的形式调用，this 就是新创建的那个对象；
4.通过call和apply调用时，第一个参数会成为this。


总结：
1.本质上任何函数在执行时都是通过某个对象调用的
2.this就代表调用函数的当前对象
3.在调用函数时，this还没有确定，只有在执行时才确定
4.当调用函数时没有明确指定当前对象，this就是全局对象window。

区别bind() ，call() , apply():
三者都可以指定函数中的this；
但： call 和 apply 在指定this后 会立即调用该函数，
而，bind 在指定this后 返回该函数，没有立即调用。*/

var name = '1'

//显示绑定
var obj = {
    name:'2',
    f:{
        name:'3',
        show:function(){
            console.log(this.name)
        }
    }
}

obj.f.show()//3  这个是链式调用，this指向最后的函数域
var k = obj.f.show //我的理解是这个只是找到show这个函数，并没有调用
k()//1  调用的时候是由window调用的（好像有特定的叫法，叫隐式丢失）

//有一点需要注意的是，在settimeout中，this指向的是全局
var set = 'out'
var obj1 = {
    set:'inner',
    show1:show
}
function show(){
    console.log(this.set)
}
setTimeout(obj1.show, 1000);








