function receiveLined(head) {
  if (!head) return true
  const res = receiveLined(head.next) && head.val == point.val
  point = point.next
  return res
}


const LinkNode = (val) => {
  this.val = val
  this.next = null
}

const n1 = new LinkNode(1)
const n2 = new LinkNode(2)
const n3 = new LinkNode(2)
const n4 = new LinkNode(1)



