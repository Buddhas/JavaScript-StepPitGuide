//函数防抖指的是在操作频繁触发的情况下，只有任务触发的时间间隔超过指定的间隔的时候，任务才会执行


function debounce(fn,delay){
    let timeout = null
    this.id = 1
    return function(){
        this.id = 2
        clearTimeout(timeout)
       setTimeout(() => {
           console.log(this.id)
            fn.call(this,arguments)//箭头函没有this，绑定的是settimeOUt的this，即是window
        }, 1000);
    }
}
debounce(function(){console.log("我执行了")},1000)()

