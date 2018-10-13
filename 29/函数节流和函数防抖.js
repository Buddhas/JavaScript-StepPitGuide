function throttle(func,delay){
    var timer = null
    return function(){
        if(!timer){
            timer = setTimeout(() => {
                func(this,arguments)
                timer = null
            }, delay);
        }
    }
}

function debounce(fn,delay){
    let timer = null
    return function(){
        clearImmediate(timer)
        setTimeout(() => {
            fn.call(this,arguments)
        }, delay);
    }
}