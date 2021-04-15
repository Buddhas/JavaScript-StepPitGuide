const longestCommonPrefix = function (strs) {
  if (strs.length == 0) ''
  function findCommonPrefix (a, b) {
    let i = 0
    while (i < a.length && i < b.length && a[i] == b[i]) {
      i++
    }
    if (i > 0) {
      return a.substring(0, i) 
    }
    return ''
  }

  str = strs[0]
  for(let i = 1; i < strs.length; i++) {
    str = findCommonPrefix(strs[i], str)
  }
  return str
};