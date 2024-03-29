var longestPalindrome = function(s) {
  let len = s.length
  let res = ''
  //创建二维数组
  let dp = Array.from(new Array(len),()=>(new Array(len).fill(0)))
  //从字符串首部开始
  for(let i=0;i<len;i++) {
      //从字符串i前开始依次向前查找
      for(let j = i;j>=0;j--) {
          dp[j][i] = s[i]==s[j] && (i-j<2 || dp[j+1][i-1])
          if(dp[j][i] && i-j +1>res.length) {
              res =  s.substring(j,i+1)
          }
      }
  }
  console.log(dp)
  return res
};