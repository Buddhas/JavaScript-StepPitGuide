function transformNum(num) {
    // 如果有小数，要保留小数
    // 转成 string
    let strNum = num.toString();
    let index = strNum.indexOf('.');

    // 末尾数是.34
    let rightStr = strNum.slice(index);

    // 前面的进行分割
    let leftStr = strNum.slice(0, index);
    let leftArr = leftStr.split('').reverse();

    // 每隔三位加一个逗号，并且还要是倒过来的
    let str = ''

    for (let i = 0; i < leftArr.length; i++) {
        if ((i + 1) % 3 === 0 && i !== leftArr.length - 1) {
            str = str + leftArr[i] + ','
        } else {
            str = str + leftArr[i]
        }
    }

    return str.split('').reverse().join('') + rightStr
}

transformNum(123456.56)

function transformNum(num) {
    let strNum = num.toString()
    let index = strNum.indexOf('.')

    let rightStr = strNum.slice(index)
    let leftStr = strNum.slice(0, index)

    let leftArr = leftStr.split('').reverse()
    let str = ''
    for (let i = 0; i < leftArr.length; i++) {
        if ((i + 1) % 3 === 0 && i != leftArr.length - 1) {
            str = str + leftArr[i] + ','
        } else {
            str = str + leftArr[i]
        }
    }

    return str.split('').reverse().join('') + rightStr
}