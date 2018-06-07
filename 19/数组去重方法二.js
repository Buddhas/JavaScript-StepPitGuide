
//使用indexOf判断
function distinct(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr.indexOf(arr[i]) !== i){
            console.log(arr.indexOf(arr[i]))
            arr.splice(i,1)
            i--
        }
    }
    return arr
}

console.log(distinct([1,23,1,1,1,3,23,5,6,7,9,9,8,5]))