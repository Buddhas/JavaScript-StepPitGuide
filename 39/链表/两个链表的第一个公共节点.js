const FindFirstCommonNode = (p1, p2) => {
  let pp1 = p1
  let pp2 = p2
  let index1 = 1
  let index2 = 1
  while (pp1 || pp2) {
    if (pp1.next) {
      index1++
      pp1 = pp1.next
    }
    if (pp2.next) {
      index2++
      pp2 = pp2.next
    }
  }


  let len = Math.abs(index1-index2)
  pp1 = p1
  pp2 = p2
  let fast = index1 > index2 ? pp1 : pp2

  while (len > 0) {
    fast = fast.next
    len--
  }

}