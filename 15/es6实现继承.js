class lol {

    constructor(people, species) {
        this.people = people;
        this.species = species;
    }
    toString() {
        return '(' + this.people + ',' + this.species + ')';
    }
}

class hero extends lol {
    constructor(people, species, age) {
        super(people, species)//es6必须先调用super才能用this,这里实现了继承
        this.age = age
    }
}

var people = new hero('德玛西亚', '大宝剑', '26')

console.log(people.toString())