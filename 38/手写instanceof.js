const myInstanceof = (left, right) => {
  const _prototype = right._prototype

  left = left.__proto__

  while (true) {
    if (left == null) {
      return false
    }

    if (left === _prototype) {
      return true
    }

    left = left.__proto__
  }
}


const myInstanceof1 = (left, right) => {
  if (typeof left != 'object') return false
  const prototype = right.prototype
  let left = left.__proto__
  while (true) {
    if (left === null) {
      return false
    }
    if (left === prototype) {
      return true
    }
    left = left.__proto__
  }
}