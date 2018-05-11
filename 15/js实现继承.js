/*function animal(){
    this.name = 'cat';
    this.arr = [1];
    this.sleep = function(){
        console.log("我是一只"+this.name+"我在睡觉");
        console.log(this.arr);
    }
    
}
animal.prototype.eat = function(){
    console.log("我是一只"+this.name+"我在吃东西");
}

function cat(){}

cat.prototype = new animal();
var c1 = new cat();
c1.name = "猫";
c1.sleep();
var c2 = new cat();
c2.arr.push(2);
c1.sleep();
c2.sleep();
*/


//借助构造函数实现继承
/*function animal(name,sex,age){
    this.name = name;
    this.sex = sex;
    this.age = age;
    this.say = function(){
        console.log(this.name + " " + this.sex + " "+ this.age);
    }
}

function cat(name,sex,age){
    animal.call(this,name,sex,age); //核心
}

var c1 = new cat('小明','男','20');
c1.say();*/

//组合继承方式
function animal(name,age){
    this.name = name;
    this.age = age;
}
animal.prototype.say = function(){
    console.log(this.name+"    "+this.age);
}

function cat(name,age){
    animal.call(this,name,age);//核心
}
cat.prototype = new animal();//核心
var c = new cat("小红","18");
c.say();