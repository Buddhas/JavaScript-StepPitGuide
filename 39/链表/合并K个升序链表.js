

var mergeKLists = function(lists) {
  if (lists.length == 0) return 
  if (lists.length == 1) return lists[0]
  lists.splice(0, 2, sort(lists[0], lists[1]))
  return mergeKLists(lists)
};


const sort = (h1, h2) => {
  let hh1 = new ListNode(-1)
  let cur = hh1
  while (h1 && h2) {
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