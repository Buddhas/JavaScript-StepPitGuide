const countNodes = function(root) {
  let result = []
  test(result, root)
  return result.length
};

const test = (result, root) => {
  if (root) {
    result.push(root)
  }
  
  if (root.left) {
    test(result, root.left)
  } 
  if (root.right) {
    test(result, root.right)
  }

  
}