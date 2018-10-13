
{
    function distinct(arr){
        for(var i = 0; i < arr.length - 1; i++){
            for(var j = i + 1; j < arr.length; j++){
                if(arr[i] === arr[j]){
                    arr.splice(j,1)
                }
            }
        }
        return arr
    }
}

{
    function distinct(arr){
        for(var i = 0; i < arr.length; i++){
            if(arr.indexOf(arr[i] !== i)){
                arr.splice(i,1)
                i--
            }
        }
    }
}

{
    function distinct(arr){
        var r = arr.filter((value,index,self)=>{
            return arr.indexOf(arr[index]) === index
        })
    }
}

{
    function distinct(arr){
        var newArr = Array.from(new Set(arr))
        return newArr
    }
}


{
    function jsonp(url, data, callback) {
        // data是否是字符串，是的话证明data值就是函数名
        if (typeof data == 'string') {
            callback = data
            data = {}
        }
        // 拼接data
        url += url.indexOf('?') === -1 ? '?' : '&'
        url += 'callback=' + callback
        var params = ""
        for (var i in data) {
            params += '&' + i + '=' + data[i]
        }
        url += params
        console.log(url)
        // 在页面插入script标签
       // var script = document.createElement('script')
       // script.setAttribute('src', url)
       // document.querySelector('head').appendChild(script)
     
    }
     
    jsonp('http://baidu.com/index.html', { id: 34 }, 'myCallback')
    jsonp('http://baidu.com/index.html?name="zjn"', { id: 34 }, 'myCallback')
}