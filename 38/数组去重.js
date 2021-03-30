const unique = (arr) => {
  return arr.filter((item, index) => {
    return arr.indexOf(item) === index
  })
}