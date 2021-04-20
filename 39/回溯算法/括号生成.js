var generateParenthesis = function(n) {
  const res = []

  const result = (str, left, right) => {
    if (left == n && right == n) {
      res.push(str)
    }

    if (left < right) return
    if (left < n) {
      result(str + '(', left + 1, right)
    }

    if (right < n) {
      result(str + ')', left, right + 1)
    }
  }

  result('', 0, 0)
  return res
};