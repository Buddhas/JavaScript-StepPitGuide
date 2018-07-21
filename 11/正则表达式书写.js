
{
    let patter = /g.gle/     //.表示匹配除换行外的任意字符
    let str = 'gogle'
    console.log(patter.test(str))//true
}

//*表示零个或者多个，+表示最少一个,?表示匹配零个或一个

{
    let patter = /g.*gle/    //匹配0个，一个或者多个字符
    let str = 'google'
	let str1 = 'ggle'
    console.log(patter.test(str)) //ture
	console.log(patter.test(str1))
}


{
    let patter = /g[a-zA-Z]*gle/  //字符类匹配 ，意思是匹配零个及以上的字母
    let str1 = 'goabcdeddogle'
    let str2 = 'g1234gle'
    let str3 = 'ggle'
    console.log(patter.test(str1))  //ture
    console.log(patter.test(str2))  //false
    console.log(patter.test(str3))  //ture
}


{
    let patter = /g[a-zA-Z]+gle/
    let str1 = 'google'
    let str2 = 'ggle'
    console.log(patter.test(str1))
    console.log(patter.test(str2))//false,最少一个
}


{
    let patter = /go{2,4}gle/ //表示o最少两个，最多四个
    let str1 = 'google'
    let str2 = 'gooooogle'
    console.log(patter.test(str1))//ture
    console.log(patter.test(str2))//false
}

{
    console.log("匹配开头，$匹配结尾")
    let patter = /^google.+$/   //^匹配开头，$匹配结尾
    let str1 = 'google123'
    let str2 = 'gooooogle'
    console.log("123")
    console.log(patter.test(str1))
    console.log(patter.test(str2))
}

{
    let patter = /[1-9][1-9]{5}/  //匹配邮政编码
    let str1 = '123'
    console.log(patter.test(str1))
}

{
    let patter = /[\w]+\.zip|rar|gz/  //匹配压缩文件,\.代表转义
    let str1 = '123.zip'
    console.log(patter.test(str1))
}

//还有好多，待续。。。