{
    let arr = [1,2,3,4]
    for(let i = 0; i < arr.length; i++){//最常见和最简单的for循环，没有之一
        console.log(arr[i])
    }
}

{
    let arr = [1,2,3,4]
    arr.forEach((item,index,arr)=>{//第一个参数表示value，第二个参数表示下标，第三个表示原来的数组
        console.log(item,index)//forEach遍历的时候是不能终止的
    })
    arr.forEach((item)=>{
        if(item>3){
            return//使用break会出错
        }
        console.log('forEanch')
        console.log(item)
    })
}

{
    let obj = {
        a:1,
        b:2,
        c:3
    }
    for(let index in obj){
        console.log(index,obj[index])//for in 适合遍历对象属性
    }

    //for in 会把数组中的索引也遍历出来
    let arr = [1,2,3,4]
    arr.name = 'name'
    for(let index in arr){
        console.log(index)//这里会把name也遍历出来
    }
    console.log('试试看for in能不能中途停止遍历')
    for(let index in arr){
        if(index < 3){
            console.log(index)
        }else{
            
            break
        }
        console.log("外面一层"+index)
    }
    console.log('是可以的')
    
}

{
    //for of适合遍历数组
    let arr = [1,2,3,4,5]
    for(let value of arr){
        console.log(value)
    }
    console.log('试试看for of能不能中途停止遍历')
    for(let value of arr){
        if(value > 4){
            break
        }else{
            console.log(value)
        }
    }
    console.log('也是可以的')
    console.log('唯独forEach是不能break，continue遍历的')
    //for of 如果想遍历对象，可以用Object.keys()实现
    {
        let obj = {
            a:1,
            b:2,
            c:3
        }
        console.log(Object.keys(obj))//[ 'a', 'b', 'c' ]
        for(let value of Object.keys(obj)){//Object.keys获取的是属性名称的数组集合
            console.log(obj[value])
        }
    }
}