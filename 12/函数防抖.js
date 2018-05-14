//函数防抖指的是在操作频繁触发的情况下，只有任务触发的时间间隔超过指定的间隔的时候，任务才会执行


function debounce(fn,delay){
    let timeout = null
    
    return function(){
        clearTimeout(timeout)
       setTimeout(() => {
            fn.call(this,arguments)//箭头函没有this，绑定的是settimeOUt的this，即是window
        }, 1000);
    }
}

