var subsets = function(nums) {
  
  const res = [[]]

  const test = (currentNums, arr) => {
    for(let i = 0; i < currentNums.length; i++) {
      arr.push(currentNums[i])
      res.push(arr.slice())
      test(currentNums.slice(i + 1), arr)
      arr.pop()
    }
  }

  test(nums, [])
  return res

};
console.log(subsets([1,2,3]))
