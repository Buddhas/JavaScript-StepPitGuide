const MyPromise = (cb) => {
  const _pending = 'pending'
  const _resolve = 'resolve'
  const _reject = 'reject'
  const self = this
  self.status = _pending


  const resolveCallback = []
  const rejectCallBack = []


  const resolve = (value) => {
    if (self.status != _pending) return
    setTimeout(() => {
      self.status = _resolve
      self.value = value
      self.resolveCallback.forEach(item => {
        item(self.value)
      })
    }, 0);
  }

}

MyPromise.prototype.then = (resolve, reject) => {
  let self = this
  resolve = typeof resolve === 'function' ? resolve : value => value
  reject = typeof reject === 'function' ? reject : error => { throw error}
  if (self.status == _pending) {
    return new MyPromise((_resolve, _reject) => {
      try {
        let x = resolve(x)
        _resolve(x)
      } catch (error) {
        reject(error)
      }
    })
  }
}


MyPromise.prototype.catch = (reject) => {
  return this.then(null, reject)
}


Promise.resolve(1)
  .then(res => {
    console.log(res);
    return 2;
  })
  .catch(err => {
    console.log('-----------');
    return 3;
  })
  .then(res => {
    console.log(res);
  });




Promise.resolve = (params) => {
  if (params instanceof Promise) return params
  return new Promise((resolve) => {
    resolve(params)
  })
}


Promise.all = (promises) => {
  if (!Array.isArray(promises)) return
  return new Promise((resolve, reject) => {
    const result = []
    const finallyCount = 0
    const len = promises.length
    if (len == 0) {
      resolve(result)
    }
    const handleData = (data, index) => {
      result[index] = data
      finallyCount++
      if (finallyCount == len) {
        resolve(result)
      }
    }

    for(let i = 0; i < len; i++) {
      Promise.resolve(promises[i]).then(data => {
        handleData(data, i)
      }).catch(err => {
        reject(err)
      })
    }
  })
 
}


Promise.race = (promises) => {
  return new Promise((resolve, reject) => {
    let len = promises.length
    if (len == 0) return
    for(let i = 0; i < len; i++) {
      Promise.resolve(promises[i]).then((data) => {
        resolve(data)
        return
      })
    }
  })
}