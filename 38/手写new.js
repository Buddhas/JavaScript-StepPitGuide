const myNew = () => {
  const obj = new Object()
  const Con = [].shift.call(arguments)
  obj.__proto__ = Con.prototype
  const result = Con.apply(obj, arguments)

  return typeof result === 'object' ? result : obj
}