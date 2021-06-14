function sort(arr) {
    if (arr.length == 0) {
        return []
    } else {
        var left = []
        var right = []
        var tmp = arr[0]
        for (var i = 1; i < arr.length; i++) {
            if (tmp > arr[i]) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }
        return sort(left).concat(tmp, sort(right))
    }

}

console.log(sort([5, 2, 4, 10, 3, 3]));