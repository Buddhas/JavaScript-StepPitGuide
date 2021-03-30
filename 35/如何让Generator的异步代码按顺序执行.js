const { rejects } = require('assert')
const fs = require('fs')

const readFilePromise = (fileName) => {
  return new Promise((resolve, rejects) => {
    fs.readFile((fileName), (err, data) => {
      if (err) {
        rejects(err)
      } else {
        resolve(data)
      }
    })
  })
}


const gen = function* () {
  const data1 = yield readFilePromise('./1.js')
  console.log(data1.toString())
  const data2 = yield readFilePromise('./2.js')
  console.log(data2.toString())
}

const g = gen();
const run = (g) => {
  const next = (data) => {
    const res = g.next()
    if (res.done) return 
    res.value.then(data => {
      next(data)
    })
  }
  next()
}

run(g)