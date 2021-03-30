Function.prototype.bind2 = function (context) {
  var self = this;

  console.log(self)
  var args = Array.prototype.slice.call(arguments, 1);
 
  var fbound = function () {

      var bindArgs = Array.prototype.slice.call(arguments);
      
      console.log(this)
      console.log(this instanceof self)
      // 当作为构造函数时，this 指向实例，self 指向绑定函数，因为下面一句 `fbound.prototype = this.prototype;`，已经修改了 fbound.prototype 为 绑定函数的 prototype，此时结果为 true，当结果为 true 的时候，this 指向实例。
      // 当作为普通函数时，this 指向 window，self 指向绑定函数，此时结果为 false，当结果为 false 的时候，this 指向绑定的 context。
      self.apply(this instanceof self ? this : context, args.concat(bindArgs));
  }

  // 修改返回函数的 prototype 为绑定函数的 prototype，实例就可以继承函数的原型中的值
  fbound.prototype = this.prototype;
  return fbound;
}


Function.prototype.bind = (context) => {
  const self = this

  const args = [].slice.call(arguments, 1)


  const f = () => {
    const innerArgs = [].slice.call(arguments)

    self.apply(this instanceof self ? this : context, args.concat(innerArgs))
  }

  f.prototype = this.prototype

  return f

}