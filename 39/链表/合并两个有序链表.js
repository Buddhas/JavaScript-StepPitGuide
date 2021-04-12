const Merge = (h1, h2) => {
  if (h1 == null) return h2
  if (h2 == null) return h1

  let head 
  if (h1.val < h2.val) {
    head = h1
    head.next = Merge(h1.next, h2)
  } else {
    head = h2
    head.next = Merge(h1, h2.next)
  }

  return head
}