function EventEmitter() {
  this._event = {}
}


EventEmitter.prototype.push = (type, fn) => {
  if (this._event[type]) {
    this._event[type].push(fn)
  } else {
    this._event[type] = [fn]
  }
}


EventEmitter.prototype.remove = (type, fn) => {
  if (!Array.isArray(this._event[type])) return
  if (fn) {
    this._event[type] = this._event[type].filter(item => {
      return item != fn && item.fn != fn
    })
  } else {
    delete this._event[type]
  }
}


EventEmitter.prototype.emit = (type, ...args) => {
  if (Array.isArray(this._event[type])) {
    this._event[type].forEach((fn) => {
      fn.apply(this, args)
    })
  }
}


EventEmitter.prototype.once = (type, fn) => {
  const only = () => {
    fn()
    this.remove(type, fn)
  }
  only.fn = fn
  this.push(type, only)
}