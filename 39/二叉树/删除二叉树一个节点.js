const deleteNode = (root, key) => {
  if (!root) return root
  if (root.val === key) {
    if (root.left == null && root.right == null) {
      return null
    } 
    if (root.left == null) {
      return root.right
    }
    if (root.right == null) {
      return root.left
    }
    if (root.left && root.right) {
      let target = getMax(root.left)
      root.val = target.val
      root.left = deleteNode(root, target.val)
    }
  }
  if (root.val > key) {
    root.right = deleteNode(root.left, key)
  } else {
    root.left = deleteNode(root.right, key)
  }
  return root
}


const getMax = (root) => {
  if (root.right == null) return root
  return getMax(root.right)
}