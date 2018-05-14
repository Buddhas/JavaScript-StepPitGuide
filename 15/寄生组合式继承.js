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

hero.prototype = Object.create(lol.prototype)//重点,将lol的原型赋值给hero，避免了二次实例化

var people = new hero('德玛西亚','大宝剑','26')

people.getName()