// 订阅者
function Watch(vm, exp, cb) {
  this.vm = vm
  this.exp = exp
  this.cb = cb
  this.value = this.get()
}

Watch.prototype = {
  update: () => {
    this.run()
  },
  run: () => {
    let newVal = this.vm.data[this.exp]
    let oldVal = this.value
    if (newVal !== oldVal) {
      this.value = newVal
      this.cb.call(this.vm)
    }
  },
  get: () => {
    Dep.target = this
    let value = this.vm.data[this.exp]
    Dep.target = null
    return value
  }
}

// 订阅器
function Dep() {
  this.subs = []
}

Dep.prototype = {
  addSub: (sub) => {
    this.subs.push(sub)
  },
  notify: () => {
    this.subs.forEach(e => {
      e.update()
    })
  }
}


function observe(data) {
  if (!data || typeof data != 'object') {
    return
  }

  Object.keys.forEach((key) => {
    defineRe(data, key, data[key])
  })
}

function defineRe(data, key, value) {
  observe(value)
  var dep = new Dep()

  Object.defineProperty(data, key, {
    configurable: true,
    enumerable: true,
    get: () => {
      if (Dep.target) {
        dep.addSub(Dep.target)
      }
      return value
    },
    set: (newVal) => {
      if (value === newVal) {
        return
      }
      dep.notify()
    }
  })
}