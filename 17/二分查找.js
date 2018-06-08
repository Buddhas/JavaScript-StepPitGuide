function doubleSearch(arr,num){
    if(arr.length === 0){
        return
    }
    var left = 0
    var right = arr.length - 1
    while(left <= right){
        mid = parseInt((left + right)/2)
        if(arr[mid] === num){
            return mid
        }
        if(num < arr[mid]){
            right = mid - 1
        }
        if(num > arr[mid]){
            left = mid + 1
        }
    }
    return "没有找到"
}
console.log(doubleSearch([1,2,2,2,2,2,2,,3,4,5,60],2))
