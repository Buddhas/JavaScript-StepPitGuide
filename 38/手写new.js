// const myNew = () => {
//   const obj = new Object()
//   const Con = [].shift.call(arguments)
//   obj.__proto__ = Con.prototype
//   const result = Con.apply(obj, arguments)

//   return typeof result === 'object' ? result : obj
// }

function myNew(con, ...args) {
  let obj = new Object()
  obj.__proto__ = con.prototype

  let result = con.apply(obj, args)

  return typeof result === 'object' ? result : obj
}