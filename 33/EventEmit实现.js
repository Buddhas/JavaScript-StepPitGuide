function EventEmit() {
  this._maxListener = 10
  this.__events = Object.create(null)
}

// 绑定事件
EventEmit.prototype.addListener = function(type, listener) {
  if (!this.__events) {
    this.__events = Object.create(null)
  }
  if (this.__events[type]) {
    if (this.__events[type].length < this._maxListener) {
      this.__events[type].push(listener)
    }
  } else {
    this.__events[type] = [listener]
  }
}
// 移除事件
EventEmit.prototype.remoteListener = function(type, listener) {
  if (!listener) {
    if (this.__events[type]) {
      delete this.__events[type]
    } 
  } else {
    this.__events[type] = this.__events[type].filters((e) => {
      return e !== listener && e.origin !== listener 
    })
  }
}
// 只绑定一次
EventEmit.prototype.once = (type, listener) => {
  const only = () => {
    listener.apply(this)
    this.remoteListener(type, listener)
  }
  only.listener = listener
  this.addEventListener(type, only)
}

EventEmit.prototype.emit = (type) => {
  if (Array.isArray(this.__events[type])) {
    this.__events[type].forEach(fn => {
      fn.apply(this)
    });
  }
}