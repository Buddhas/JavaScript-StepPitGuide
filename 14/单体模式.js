var createWindow = (function(){
    var div;
    
    
    return function(){
        if(!div) {
            div = document.createElement("div");
            div.innerHTML = "我是弹窗内容";
            div.style.display = 'none';
            document.body.appendChild(div);
        }
        return div;
    }
})();

console.log(createWindow);
console.log(createWindow);