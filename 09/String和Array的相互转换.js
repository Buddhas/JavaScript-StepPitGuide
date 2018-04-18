//String转Array
{
    let str = '德玛西亚万岁'
    let arr = str.split("")
    console.log(str)
    console.log(arr)
    console.log(Array.isArray(arr))
}

//Array转String
//方法一
{
    let arr = [1,2,3,4]
    let str = arr.toString()
    console.log(arr)
    console.log(str)
}
//方法二
{
    let arr = [1,2,3,4]
    let str = arr.join(",")
    console.log(arr)
    console.log(str)
}