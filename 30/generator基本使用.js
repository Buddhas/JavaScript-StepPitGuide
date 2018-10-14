/*
/generator的基本使用/
{
    function *fn(){
        let o = 1
        o++;yield o;
        yield o
    }
    let a = fn()
    //a.next()
    console.log(a.next())
}




//generator next传参的作用

{
    function *fn(){
        let o = 1; 
        o = yield o++
        console.log(o)
        yield o++
        
    }
    let a = fn()
    console.log(a.next())
    //这里输出说明 next传参是覆盖上一次执行返回的值
    console.log(a.next(11))
    
}

//for of循环执行generator函数,不会输出object，直接输出值
{
    function* fn(){
        let i = 0;
        yield i++
        yield i++
        yield i++
        yield i++
    }

    let j = fn()
    for(let i of j){
        console.log(i)
    }
}


//generator使用return提前结束遍历
{
    function *fn(){
        let i = 0;
        yield i++;
        yield i++;
        yield i++
    }
    let i = fn()
    console.log(i.next())
    console.log(i.return('帅'))
    console.log(i.next())
}


//在generator里调用generator，被调用的函数使用*标识
{
    function* fn1(){
        let i = 0;
        yield 'a'
        yield 'b'
        yield 'c'
    }
    function* fn2(){
        let i = 0;
        yield* fn1()
        yield 1
        yield 2
    }
    let i = fn2()
    for(let j of i){
        console.log(j)
    }
}
*/


// {
//     function *fn(){
//         let o = 1
//         o++;yield o;
//         yield o
//     }
//     let a = fn("我是")
//     //a.next()
//     console.log(a.next())
//     console.log(a.next())
//     console.log(a.next())
// }

{
    function *fn(obj){
        console.log(obj)
        yield 1
    }
    let a = fn()
    a.next()
}

{
    function *fn(){
        let o = 1
        o++;
        yield o;
        yield o
    }
    let a = fn()
    //a.next()
    console.log(a.next())
}