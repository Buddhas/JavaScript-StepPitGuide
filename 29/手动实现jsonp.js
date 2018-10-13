function jsonp(url,data,callback){
    
      
    url += url.indexOf("?") === -1 ? "?" : "&"
    var params = ''
    for(var i in data){
        params = `${params}&${i}=${data[i]}`
    }
    
    url = `${url}${params}`
    console.log(url)
    var script = document.createElement('script')
    script.setAttribute('src',url)
    document.getElementsByTagName('head')[0].appendChild(script)
}
jsonp('http://baidu.com/index.html', { id: 34 }, 'myCallback')
jsonp('http://baidu.com/index.html?name="zjn"', { id: 34 }, 'myCallback')