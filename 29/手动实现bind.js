Function.prototype.bind2 = function(context){
    var self = this
    var args = Array.prototype.slice.call(arguments,1)
    var fbound = function(){
        var bindArgs = Array.prototype.slice.call(arguments)
        self.call(this instanceof self ? this : context,args.concat(bindArgs))
    }
    fbound.prototype = this.prototype
    return fbound
}