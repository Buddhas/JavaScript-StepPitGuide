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

