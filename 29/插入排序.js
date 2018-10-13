function sort(arr){
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < arr[i - 1]){
            let j = i
            while(arr[j] < arr[j - 1] && arr[j - 1]){
                temp = arr[j]
                arr[j] = arr[j - 1]
                arr[j - 1] = temp
                j--
            }
        }
    }
}