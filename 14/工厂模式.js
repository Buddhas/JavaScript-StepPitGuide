//工厂模式
function createPerson(name,sex,age){
    var o = new Object();
    o.name = name;
    o.sex = sex;
    o.age = age;
    o.sayName = function(){
        return this.name;
    }
    return o;
}
var p1 = new createPerson('小明','男','20');
var p2 = new createPerson('小红','女','18');

console.log(p1.name);
console.log(p1.sex);
console.log(p1.age);
console.log(p1.sayName());


console.log(p2.name);
console.log(p2.sex);
console.log(p2.age);
console.log(p2.sayName());

console.log(typeof p1);
console.log(typeof p2);
console.log(p1 instanceof Object);