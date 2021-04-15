var zigzagLevelOrder = function(root) {
  const result = {}
  test(root, 1, result)
  return Object.keys(result).map((item) => {
    return result[item]
  })
};

const test = (root, level, result) => {
  if (!root) return 
  if (result[level]) {
    if (level % 2 == 0) {
      result[level].unshift(root.val)
    } else {
      result[level].push(root.val)
    }
  } else {  
    result[level] = [root.val]
  }
  test(root.left, level + 1, result)
  test(root.right, level + 1, result)
}