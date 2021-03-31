const randomArr = (arr) => {
  const length = arr.length
  let current = length - 1
  while(current >= 0 ) {
    const random = Math.floor(length * Math.random())
    [arr[random], arr[current]] = [arr[current], arr[random]]
    current--
  }
  return arr
}