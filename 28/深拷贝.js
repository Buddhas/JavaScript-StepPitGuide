function deepCopy(obj,hash = new WeakMap){
    let cloneObj;
    let Constructor = obj.constructor

    switch(Constructor){
        case RegExp:
            cloneObj = new Constructor(obj)
            break;
        case Date:
            cloneObj = new Date(obj.getTime())
            break;
        case Function:
            console.log(obj)
            cloneObj = eval(obj.toString())
        default:
            if(hash.has(obj)) return hash.get(obj)
            cloneObj = new Constructor()
            hash.set(obj,cloneObj)
    }
    for(let key in obj){
        cloneObj[key] = isObj(obj[key]) ? deepCopy(obj[key],hash) : obj[key]
    }
    return cloneObj
}

function isObj(obj){
    return (typeof obj === "object" || typeof obj === "function") && obj !== null
}


a = {
    b:[1,2],
    c:function(){
        console.log(1)
    },

}
a.a = a

let b = deepCopy(a)
console.log(b)