const myInstanceof = (left, right) => {
  const _prototype = right._prototype

  left = left.__proto__

  while(true) {
    if (left == null) {
      return false
    }

    if (left === _prototype) {
      return true
    }

    left = left.__proto__
  }
}