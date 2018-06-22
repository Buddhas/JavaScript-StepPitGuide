function CreatePerson(name,sex,age){
    this.name = name;
    this.sex = sex;
    this.age = age;
    this.sayName = function(){
        return this.name
    }

}
var p1 = new CreatePerson('小红','女','18');
console.log(p1.name);
console.log(p1.sex);
console.log(p1.age);
console.log(p1.sayName());
console.log(p1 instanceof CreatePerson);
console.log(typeof p1);


//创建对象的几种方式：
//通过Object构造函数或对象字面量创建单个对象
//工厂模式（缺陷是无法解决对象识别的问题，即怎么知道一个对象的类型）
//构造函数模式，没有显示的创建对象，没有return,创建实例必须用new,可以使用instanceof准确的检验对象类型，坏处就是函数重复
//原型模式，通过prototype来共享属性和方法
//组合使用构造函数模式和原型模式
//动态原型模式
