const MyPromise = (fn) => {
  const PENDING = 'PENDING' // 就绪
  const FULFILLED = 'FULFILLED' // 成功
  const REJECT = 'REJECT' // 失败

  const resolveCb = []
  const rejectCb = []
  let value
  let status = PENDING

  const resolve = (value) => {
    if (this.status == PENDING) {
      this.status = FULFILLED
      this.value = value
      resolveCb.forEach((item) => {
        item(value)
      })
    }
  }
  const reject = (value) => {
    if (this.status == PENDING) {
      setTimeout(() => {
        this.status = FULFILLED
        this.value = value
        rejectCb.forEach((item) => {
          item(value)
      })
      }, 0);
      
    }
  }
  fn(resolve, reject)
}

MyPromise.prototype.then((onResolve, onReject) => {
  onResolve = typeof onResolve == 'function' ? onResolve : (value) => value
  onReject = typeof onReject == 'function' ? onReject : error => { throw error}

  let self = this

  if (self.status == PENDING) {
    return new MyPromise((resolve, reject) => {
      self.resolveCb((value) => {
        try {
          let x = onResolve(value)
          resolvePromise(x, resolve, reject)
        } catch (error) {
          resolve(error)
        }
      })
    })
  }

})

MyPromise.prototype.resolve = (params) => {
  if (params instanceof MyPromise) return params
  return new MyPromise((resolve, reject) => {
    if (params.then && typeof params.then == 'function') {
      params.then(resolve, reject)
    } else {
      resolve()
    }
  })
}

MyPromise.prototype.reject = (params) => {
  return new Promise((resolve, reject) => {
    reject(params)
  })
}

MyPromise.prototype.all = (promises) => {
  if (!Array.isArray(promises)) return
  const length = promises.length
  let count = 0
  const result = []
  const handle = (resolve) => {
    count++
    if(count == length) resolve(result)
  }

  return new Promise((resolve, reject) => {
    for(let i = 0; i < length; i++) {
      promises[i].then((res) => {
        result.push(res)
        handle(resolve)
      }).catch(() => {
        reject()
      })
    }
  })
}

MyPromise.prototype.race = (promises) => {
  if (!Array.isArray(promises)) return
  return new Promise((resolve, reject) => {
    for (let index = 0; index < promises.length; index++) {
      promises.then((data) => {
        resolve(data)
      }).catch((error) => {
        reject(error)
      })
    }
  })
}

MyPromise.prototype.finally = (fn) => {
  return this.then((res) => {
    fn()
    return res
  }, (error) => {
    fn()
    throw error
  })
}

function resolvePromise(x, resolve, reject) {
  if (x instanceof MyPromise) {
    if (x.status == PENDING) {
      x.then(y => {
        resolvePromise(y, resolve, reject)
      }, error => {
        reject(error)
      })
    } else {
      x.then(resolve, reject)
    }
  } else {
    resolve(x)
  }
}