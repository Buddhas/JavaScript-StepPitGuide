

//函数节流指的是函数在一段时间内只能执行一次
function throttle(func,delay){
    var timer = null
    return function(){
        if(!timer){
            timer = setTimeout(() => {
                func.call(this,arguments)
                timer = null//重点
            }, delay);
        }
    }
}

throttle(()=>{console.log("我执行了")},1000)()