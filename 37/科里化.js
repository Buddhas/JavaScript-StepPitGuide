const sum = (a, b , c) => {
  return a + b + c
}


function out(func) {
  return function inner(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args)
    } else {
      return (...args2) => {
        return inner.apply(this, args.concat(args2))
      }
    }
  }
}

let curriedSum = out(sum);

console.log( curriedSum(1, 2, 3) ); // 6，仍然可以被正常调用
console.log( curriedSum(1)(2,3) ); // 6，对第一个参数的柯里化
console.log( curriedSum(1)(2)(3) ); // 6，全柯里化





