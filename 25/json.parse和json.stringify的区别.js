{
    var obj='{"name":"德玛"}'
    console.log("JSON.parse() 方法用于将一个 JSON 字符串转换为对象")
    console.log(JSON.parse(obj))
}
{
    //var str2 = { "name": "deluyi", "sex": "man" };
    //而不是
    //var str2 = { name: "deluyi", sex: "man" };
}
{
    var obj = {
        name:"德玛"
    }
    console.log("将一个JavaScript值(对象或者数组)转换为一个 JSON字符串")
    console.log(JSON.stringify(obj))
}
