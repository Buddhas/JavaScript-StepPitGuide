const hasCycle = (pHead) => {
  if (!pHead) return false
  let fast = pHead
  let low = pHead

  while(fast && fast.next) {
      fast = fast.next.next
      low = low.next
    if (low === fast) return true
  }
  return false
}

