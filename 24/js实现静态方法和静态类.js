
//其实很简单，直接.

function animal(){

}

animal.say = function(){
    console.log("i am say")
}

animal.say()
var cat = new animal()
//cat.say()   静态方法不能实例化


function Animal (){
    
    this.say = function(){
        console.log(Animal.name);
    }
};
Animal.name = "Ev2le0";
var a = new Animal();
console.log(a.name)//undefined