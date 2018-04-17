{
    let arr = [1,2,3,4]
    arr.push(5,6)//数组的末尾添加一个或更多元素
    console.log(arr)
}

{
    let arr = [1,2,3,4]
    arr.pop()//删除数组的最后一个元素并返回删除的元素
    console.log(arr)
}

{
    let arr = [1,2,3,4]
    arr.shift()//删除数组第一个元素，改变原数组
    console.log(arr)

}

{
    let arr = [1,2,3,4]
    arr.unshift(-1,0)
    console.log(arr)//向数组头部添加一个或多个元素
}

{
    let arr1 = [1,2,3,4,5]
    let arr2 = [6,7,8]
    let arr3 = arr1.concat(arr2)//连接一个或多个数组或者字符串，不会影响原来数组，返回连接后的数组
    console.log(arr3)
}

{
    let arr = [1,2,3,4]
    let str = arr.join(' ')//join() 方法用于把数组中的所有元素转换一个字符串,感觉不传参数的时候和toString是一样的
    console.log(str)
    console.log(arr)//不会影响原来的数组
}