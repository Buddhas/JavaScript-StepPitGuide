function interval(func,w,t){
    var intervals = function(){
        if(t-->0){
            setTimeout(intervals, w);
            func.call(null)
        }
    }
    setTimeout(intervals,w)
}