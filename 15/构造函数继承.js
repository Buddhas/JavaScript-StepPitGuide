function lol(name,species){
    this.name = name
    this.species = species
    this.getName = function(){
        console.log(this.name)
    }
}

function hero(name,species,age){
    lol.call(this,name,species)
    this.age = age

}

var people = new hero('德玛西亚','大宝剑','26')
people.getName()

//如上所述，构造函数继承的最大缺点就是会重复实例化getName函数
