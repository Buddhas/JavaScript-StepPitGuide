const flat = (arr) => {
  return arr.reduce((p, c) => {
    if (Array.isArray(c)) {
      return p.concat(flat(c))
    } else {
      return p.concat(c)
    }
  }, [])
}

const flat2 = (arr) => {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(arr[i])
    } else {
      result.push(arr[i])
    }
  }
  return result
}

const flat3 = (arr) => {
  return arr.reduce((pre, cur) => {
    if (Array.isArray(cur)) {
      return pre.concat(flat3(cur))
    } else {
      pre.push(cur)
      return pre
    }
  }, [])
}

const flattenByDeep = (arr, deep = 1) => {
  return arr.reduce((pre, cur) =>
    pre.concat(Array.isArray(cur) && deep > 1 ? flattenByDeep(cur, deep - 1) : cur)
    , [])
}
console.log(flat3([1, 2, 3, [4, 5, [6, 7]]]))