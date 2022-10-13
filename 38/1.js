let a = Promise.resolve()
let b = a.then(() => {
    setTimeout(() => {
        console.log('a')
    }, 10);
})
b.then(() => {
    console.log('b')
})