

function curry(func) {
    return function curried(...args) {
        if (args.length >= func.length) {
          return func.apply(this, args);
        } else {
          return function(...args2) {
            return curried.apply(this, args.concat(args2));
          }
        }
      };
}

const sum = (a,b,c) => {
    return a + b + c
}

const add = curry(sum)


console.log(add(1)(2)(3))
console.log(add(1, 2, 3))
console.log(add(2, 6)(1))