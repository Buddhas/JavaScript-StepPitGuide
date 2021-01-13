
// 方式一
function printPorimse(num, current) {
  if (current < num) {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(current+1)
        resolve()
      }, 1000);
    }).then(() => {
      printPorimse(num, ++current)
    })
  }
}

printPorimse(3,0)



// 方式二
[1,2,3].reduce((p, r) => {
  return p.then(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(r)
        resolve()
      }, 1000);
    })
  })
}, Promise.resolve())