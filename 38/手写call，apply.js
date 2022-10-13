Function.prototype.myCall = function (context = window, ...args) {
  context.fn = this
  const result = context.fn(...args)
  delete context.fn
  return result
}



Function.prototype.myApply = function (context) {

  const context = context || window

  context.fn = this
  let result
  if (arguments[1]) {
    result = context.fn(...arguments[1])
  } else {
    result = context.fn()
  }

  delete context.fn
  return result
}