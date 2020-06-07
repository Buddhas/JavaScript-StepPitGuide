function flatObject(obj={}, keys='') {
  for(let key in obj) {
    console.log(keys)
    if (typeof obj[key] === 'object') {
      if(Array.isArray(obj[key])) {
        // 数组扁平化
        let arrRes = flatten(obj[key])
        for(let j = 0; j < arrRes.length; j++) {
          result[`${key}${j}`] = arrRes[j]
        }
      } else {
        flatObject(obj[key], keys + '' + key)
      }
    } else {
      result[keys + key] = obj[key]
    }
  }
}
let result = {}

function flatten(arr=[]) {
  return arr.reduce((pre, current) => {
    return pre.concat(Array.isArray(current) ? Array.isArray(current) : current)
  }, [])
}

let test = {
  "a": {
    "b": {
      "c": {
        "d": 1
      }
    }
  },
  "aa": 2,
  "c": [
    1,
    2
  ]
}

flatObject(test, '')
console.log(result)