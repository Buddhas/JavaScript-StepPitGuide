function distinct(arr){
    var newArr = Array.from(new Set(arr))
    return newArr
}

console.log(distinct([1,23,1,1,1,3,23,5,6,7,9,9,8,5]))

