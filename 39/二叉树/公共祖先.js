function find(root, target) {
  if (root == null) return false;
  return (
    root.val == target.val ||
    find(root.left, target) ||
    find(root.right, target)
  );
}

var lowestCommonAncestor = function (root, p, q) {
  if (root.val == p.val || root.val == q.val) {
    return root;
  } else if (find(root.left, p) && find(root.left, q)) {
    return lowestCommonAncestor(root.left, p, q);
  } else if (find(root.right, p) && find(root.right, q)) {
    return lowestCommonAncestor(root.right, p, q);
  } else {
    return root;
  }
};
