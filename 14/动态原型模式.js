function createPeople(name,sex,age){
    this.name = name;
    this.sex = sex;
    this.age = age;
    if(typeof this.say !== 'function'){
        console.log('初始化原型函数');
        createPeople.prototype.say = function(){
            console.log(this.name + ' ' + this.sex + ' ' + this.age);
        }
    }
}
var p1 = new createPeople('小红','女','18');
p1.say();
var p2 = new createPeople('小明','男','20');
p2.say();
