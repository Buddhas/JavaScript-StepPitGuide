function lol(people,species){
    this.people = people
    this.species = species
}

lol.prototype.getName = function(){
    console.log(this.people)
}

function hero(people,species,age){
    lol.call(this,people,species)
    this.age = age

}
hero.prototype = new lol()
var people = new hero('德玛西亚','大宝剑','26')

people.getName()

//这种继承解决了前面的问题，但是产生了新的问题，父类的实例被初始化了两次
