function asyncToGenerator(generatorFunc) {
  return function() {
    const gen = generatorFunc.apply(this, arguments)
    return new Promise((resolve, reject) => {
      function step(key, arg) {
        let generatorResult
        try {
          generatorResult = gen[key](arg)
        } catch (error) {
          return reject(error)
        }
        const { value, done } = generatorResult
        if (done) {
          return resolve(value)
        } else {
          return Promise.resolve(value).then(val => step('next', val), err => step('throw', err))
        }
      }
      step("next")
    })
  }
}

function* generatorFunc() {
  const data1 = yield new Promise((resolve) => { setTimeout(() => {
    console.log('111111')
    resolve()
  }, 1000);})
  console.log('data1', data1)
  const data2 = yield 2 
  console.log('data2', data2)
}

const gen = generatorFunc()
gen.next()
gen.next()
gen.next()