//先把结论说出来：
//每一个对象都有一个__proto__属性，称为隐式原型，这个属性指向的是构造这个对象的构造函数的原型，
//隐式原型也是继承的基础
//每一个function中有一个自己特有的属性，prototype,称为显式原型，上述的__proto__属性存在于prototype中
//prototype中还有一个属性，称为constructor，constructor中包含一个指针，指回原来的构造函数


//原型继承的原理是：当对象找不到属性时会沿着__proto__去寻找上层的原型，
//在原型里面找到对应的属性，直到找到顶层的Object

console.log(Object.__proto__)
//顶层的Object的__proto__指向的是null
{
    function F(){}
    F.prototype.getName = function(){console.log('F函数')}

    let f1 = new F()
    console.log(f1.__proto__)//这个属性指向的是构造这个对象的构造函数的原型，验证
    console.log(F.prototype.constructor)//constructor中包含一个指针，指回原来的构造函数,验证
}

function b(){
    var a;
    console.log(a)
    a = 4
    function a(){
        console.log(5)
    }
}