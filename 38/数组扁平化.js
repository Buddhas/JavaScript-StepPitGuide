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
  for(let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(arr[i])
    } else {
      result.push(arr[i])
    }
  }
  return result
}
console.log(flat([1,2,3, [4,5,[6,7]]]))