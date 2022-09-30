const { reject } = require("q")

const Pending = 'Pending'
const Resolve = 'Resolve'
const Reject = 'Reject'
function MyPromise(fn) {
  this.value = null
  this.status = Pending
  this.resolveCallbacks = []
  this.rejectCallbacks = []

  const resolve = (_value) => {
    if (this.status !== Pending) return

    setTimeout(() => {
      this.value = _value
      this.status = Resolve
      this.resolveCallbacks.forEach((callback) => {
        callback(this.value)
      })
    }, 0);
  }

  const reject = (_value) => {
    if (this.status !== Pending) return

    setTimeout(() => {
      this.value = _value
      this.status = Resolve
      this.rejectCallbacks.forEach((callback) => {
        callback(this.value)
      })
    }, 0);
  }

  fn(resolve, reject)
}

MyPromise.prototype.then = function (onResolve, onReject) {
  onResolve = typeof onResolve === 'function' ? onResolve : (value) => value
  onReject = typeof onReject === 'function' ? onReject : () => { return new Error() }

  const self = this

  if (self.status === Pending) {
    return new MyPromise((resolve, reject) => {
      self.resolveCallbacks.push(function () {
        try {
          let res = onResolve(self.value)
          resolve(res)
        } catch (error) {
          reject(error)
        }
      })

      self.rejectCallbacks.push(function () {
        try {
          let res = onResolve(self.value)
          resolve(res)
        } catch (error) {
          reject(error)
        }
      })

    })
  }


  if (self.status === Resolve) {
    return new MyPromise((resolve, reject) => {
      setTimeout(() => {
        try {
          let res = onResolve(self.value)
          resolvePromise(res, resolve, reject)
        } catch (error) {
          reject(error)
        }

      }, 0);
    })
  }

  if (self.status === Reject) {
    return new MyPromise((resolve, reject) => {
      setTimeout(() => {
        try {
          let res = onResolve(self.value)
          resolvePromise(res, resolve, reject)
        } catch (error) {
          reject(error)
        }

      }, 0);
    })
  }
}

function resolvePromise(x, resolve, reject) {
  if (x instanceof MyPromise) {
    if (x.status === Pending) {
      x.then((y) => {
        resolvePromise(y, resolve, reject)
      })
    } else {
      x.then(resolve, reject)
    }
  } else {
    resolve(x)
  }
}

MyPromise.prototype.resolve = function (param) {
  if (param instanceof MyPromise) {
    return param
  }
  return new MyPromise((resolve, reject) => {
    if (param && param.then && typeof param.then === 'function') {
      param.then(resolve, reject)
    }
    resolve(param)
  })
}

MyPromise.prototype.reject = function (param) {
  return new MyPromise((resolve, reject) => {
    reject(param)
  })
}

MyPromise.prototype.all = function (promises) {
  if (Array.isArray(promises)) {
    throw new Error('error')
  }


  return new MyPromise((resolve, reject) => {
    let result = []
    let hasResolveCount = 0
    let len = promises.length
    if (!len) {
      resolve([])
      return
    }

    const handleData = (data, i) => {
      result[i] = data
      hasResolveCount++
      if (hasResolveCount === len) resolve(result)
    }

    for (let i = 0; i < len; i++) {
      const promise = promises[i]
      MyPromise.resolve(promise).then((value) => {
        handleData(value, i)
      }).catch((error) => {
        reject(error)
      })
    }
  })

}

MyPromise.prototype.race = function (promises) {
  if (Array.isArray(promises)) {
    throw new Error('error')
  }

  return new MyPromise((resolve, reject) => {
    for (const promise of promises) {
      MyPromise.resolve(promise).then(data => {
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    }
  })
}

new MyPromise((resolve, reject) => {
  console.log(2)
  resolve()
  console.log(4)
}).then(() => {
  console.log(3)
})
console.log(1)