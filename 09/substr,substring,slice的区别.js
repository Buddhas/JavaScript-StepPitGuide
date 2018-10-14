//slice 
{
    let str = '德玛西亚万岁'
    let str1 = str.slice(1,3)//两个参数分别代表开始下标和结束下标，如果第二个参数没填，则从开始下标到字符结尾
    console.log(str1)//玛西
}

//substr
{
    let str = '德玛西亚万岁'
    let str1 = str.substr(1,3)//两个参数分别代表开始下标和需要截取的字符串的长度，如果第二个参数不填，代表从开始下标到字符串结尾
    console.log(str1)//玛西亚
}

//substring
{
    let str = '我的剑飞向真理'
    let str1 = str.substring(1)//两个参数分别代表开始下标和结束下标，如果第二个参数没填，则从开始下标到字符结尾
    console.log(str1)
}

