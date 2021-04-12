const FindKthToTail = (node , k) => {
  if (!node || !k) return null
  let fast = node
  let low = node

  let index = 1

  while(fast.next) {
    index++
    fast = fast.next
    if (index > k) {
      low = low.next
    }
  }
  if (k > index) {
    return false
  }
  return low
}