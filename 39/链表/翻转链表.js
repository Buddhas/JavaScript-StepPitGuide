const reverseList = (list) => {
  if (!list) return list
  let head = null;
  const pHead = list;
  const trave = (node) => {
    if (!node.next) {
      head = node;
      return node;
    }
    trave(node.next).next = node;
    return node
  };
  trave(list)
  pHead.next = null;
  return head;
};