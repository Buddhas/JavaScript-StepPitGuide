function distinct(arr){
    var r = arr.filter((value,index,self)=>{
        return arr.indexOf(arr[index]) === index
    })
    return r
}

console.log(distinct([1,23,1,1,1,3,23,5,6,7,9,9,8,5]))