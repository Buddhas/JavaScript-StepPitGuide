//首先Object和Function都是构造函数，而所有的构造函数的都是Function的实例对象. 因此Object是Function的实例对象
//也就是说Object.__proto__ === Function.prototype

//Function.prototype是Object的实例对象
//也就说Function.prototype.__proto__ === Object.prototype

//当我们访问一个属性值的时候, 它会沿着原型链向上查找, 
//直到找到或者到Object.prototype.proto(为null)截止.


//下面这个例子说明了向上找原型对象时，Function会向Object中寻找，二Object中不会向function中找
//这是因为在function中定义的变量会向Function.prototype.__proto__找到Object
//而在Object中没有指向
var foo = {},
    F = function(){};

Object.prototype.a = 'value a';
Function.prototype.b = 'value b';

console.log(foo.a)    // value a
console.log(foo.b)    // undefined
console.log(F.a)      // value a
console.log(F.b)      // value b