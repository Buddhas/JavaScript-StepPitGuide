const EntryNodeOfLoop = (head) => {
  if (!head || !head.next) {
    return null
  }

  let p1 = head
  let p2 = head.next

  while (p1 != p2) {
    if (p2 == null || p2.next == null) return false
    p1 = p1.next
    p2 = p2.next.next
  }

  let temp = p1
  let length = 1
  while (p1.next != temp) {
    length++
    p1 = p1.next
  }

  p1 = p2 = head

  while (length > 0) {
    length--
    p1 = p1.next
  }

  while (p1 != p2) {
    p1 = p1.next
    p2 = p2.next
  }

  return p1


}