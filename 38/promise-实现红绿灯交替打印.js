const print = (color) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(color)
      resolve()
    }, 1000);
  })
}

const test = () => {
  print('red').then(() => {
    return print('yellow')
  }).then(() => {
    test()
  })
}

test()