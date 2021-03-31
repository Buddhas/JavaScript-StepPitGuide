const unique = (arr) => {
  return arr.filter((item, index) => {
    return arr.indexOf(item) === index
  })
}


const unique = (arr) => {
  return Array.from(new Set(arr))
}


const unique = (arr) => {
  return arr.filter((item, index) => {
    return index === arr.indexOf(item)
  })
}