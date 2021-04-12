const sortList = function(head) {
  if (!head || !head.next) {
    return head
  }
  const left = head
  let temp = splitList(head)
  const right = temp.next
  temp.next = null
  return sortRec(sortList(left), sortList(right))
};


const splitList = (head) => {
  let fast = head
  let slow = head

  while (fast && fast.next && fast.next.next) {
    fast = fast.next.next
    slow = slow.next
  }

  return slow
}

// 排序链表
const sortRec = (h1, h2) => {
  let hh1 = new ListNode(-1)
  let cur = hh1
  while(h1 && h2) {
    if (h1.val < h2.val) {
      cur.next = h1
      h1 = h1.next
    } else {
      cur.next = h2
      h2 = h2.next
    }
    cur = cur.next
  }
  cur.next = h1 || h2
  return hh1.next
}