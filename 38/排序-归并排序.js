const merge = (left, right) => {

  const result = []
  while(left.length > 0 && right.length > 0) {
    if (left[0] >= right[0]) {
      result.push(right.shift())
    } else {
      result.push(left.shift())
    }
  }

  while(left.length > 0) {
    result.push(left.shift())
  }

  while(right.length > 0) {
    result.push(right.shift())
  }

  return result
}


const sort = (arr) => {

  if (arr.length < 2) return arr 
  let left = arr.slice(0, Math.ceil(arr.length / 2))
  let right = arr.slice(Math.ceil(arr.length / 2))

  return merge(sort(left), sort(right))
}

console.log(sort([1, 5, 3, 10, 6]))
