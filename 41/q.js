let promise = new Promise((resolve, reject) => {
    resolve(1)
})
setTimeout(() => {
    promise.then(() => {
        console.log(promise)
        console.log(2)
    })
    console.log('22222')
}, 10);
