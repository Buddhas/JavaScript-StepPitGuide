
//splice方法去重
function distinct(arr){
    for(var i = 0; i < arr.length - 1; i++){
        for(var j = i + 1; j < arr.length; j++){
            if(arr[i] === arr[j]){
                arr.splice(j,1)
                j--
            }
        }
    }
    return arr
}
console.log(distinct([2,1,3,3,3,4,3,2,5,6,7,8,9,1]))
