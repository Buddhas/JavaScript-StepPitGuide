function sort(arr){
    var temp = 0
    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < arr.length - i - 1; j++){
            if(arr[j] > arr[j+1]){
                tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j+1] = tmp;
            }
        }
    }
}
var arr = [5,4,3,2,1]
sort(arr)
console.log(arr)