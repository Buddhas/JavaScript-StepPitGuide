const formParams = (urlParams) => {
  const paramsStr = urlParams.split('?')[1]
  const paramsArr = paramsStr.split('&')
  
  const resultParams = {}
  paramsArr.forEach((item) => {
    let [key, value] = item.split('=')
    if (value) {
      value = decodeURIComponent(value)

      if (resultParams[key]) { 
        resultParams[key] = [].concat(resultParams[key], value)
      } else {
        resultParams[key] = value
      }
    } else {
      resultParams[key] = true
    }
  })
  return resultParams
}


console.log(formParams('http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled'))