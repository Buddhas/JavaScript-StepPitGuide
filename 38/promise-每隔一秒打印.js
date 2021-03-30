const print = () => {
  const arr = [1,2,3]

  arr.reduce((p, c) => {
    return p.then(() => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log(c)
          resolve()
        }, 1000);
      })
    })
  }, Promise.resolve())
}

print(5)