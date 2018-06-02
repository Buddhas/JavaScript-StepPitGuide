function sort(arr){
    for(var i = 1; i < arr.length; i++){
        if(arr[i] < arr[i - 1]){
            var j = i;
            while(arr[j] < arr[j - 1] && arr[j - 1]){
                tmp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = tmp;
                j--;
            }
        }
    }
}

var elements = [10, 9, 11, 7, 6, 5];
sort(elements);
console.log(elements);