function sort(arr){
    if(arr.length == 0){
        return []
    }else{
        var left = []
        var right = []
        var temp = arr[0]
        for(var i = 1; i < arr.length; i++){
            if(temp > arr[i]){
                left.push(arr[i])
            }else{
                right.push(arr[i])
            }
        }
        return sort(left).concat(temp,sort(right))
    }

}