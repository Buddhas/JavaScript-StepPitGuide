function EventEmitter() {
  this._maxListeners = 10
  this._events = Object.create(null)
}


EventEmitter.prototype.addListener = (type, cb) => {
  if (!this._events) {
    this._events = Object.create(null)
  }

  if (this._events[type]) {
    this._events[type].push(cb)
  } else {
    this._events[type] = [cb]
  }
}


EventEmitter.prototype.remoteListener = (type, cb) => {
  if (Array.isArray(this._events[type])) {
    if (!cb) {
      delete this._events[type]
    } else {
      this._events[type] = this._events[type].filter(e => e !== cb)
    }
  }
}

EventEmitter.prototype.emit(type, ...args) = () => {
  if (Array.isArray(this._events[type])) {
    this._events[type].forEach(fn => {
      fn(args)
    })
  }
}
