let obj = {
  data: ['name:前端小鹿', 'age:18', 'sex:男'],
  [Symbol.iterator]: function () {
    const self = this
    let index = 0;
    return {
      next: function () {
        if (index < self.data.length) {
          return {
            value: self.data[index++],
            done: false
          };
        }
        return { value: undefined, done: true };
      }
    }
  }
}


for (let i of obj) {
  console.log(i)
  //"name:前端小鹿" "age:18" "sex:男"
}