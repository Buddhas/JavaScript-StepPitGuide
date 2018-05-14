function lol(){
    this.name = '英雄联盟'
}

function hero(){
    this.type = '德玛'
}

hero.prototype = new lol()
var people = new hero()
console.log(people.name)

//原型链继承有个很大的缺点，原型对象的引用属性是所有实例共享的，其中一个改变了，全部都得改变