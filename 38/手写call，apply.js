Function.prototype.myCall = (context) {
  const context = context || window

  context.fn = this

  const args = [...arguments].slice(1)

  const result = context.fn(...args)

  delete context.fn

  return result

}



Function.prototype.myApply = (context) => {

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