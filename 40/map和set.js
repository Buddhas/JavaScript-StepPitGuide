// map 比 object ，map 可以用任何数据类型作为键值，
// 方法有set，get，has，delete, clear
// 属性有size
// 只有对同一个对象的引用，Map 结构才将其视为同一个键。这一点要非常小心。
let map = new Map()
const obj = {a:1}
map.set(obj, 1)
console.log(map.get(obj))

// 任何具有iterator的数据类型，都可以作为map的构造参数
let mapArr = new Map([['name', 'bin.chen'], ['title', 'Author']])
for (const item of mapArr) {
    console.log(item)
}

// map 遍历方法包括
// keys(),values(),entries() 返回的都是遍历器，需要用到for of 遍历输出
for (const item of mapArr.keys()) {
    console.log(item)
}
for(const item of mapArr.values()) {
    console.log(item)
}
// map[Symbol.iterator] === map.entries
for (const [key, value] of mapArr.entries()) {
    console.log(key, value)
}

// Set 类似数组，但是成员都是唯一的，Set构造函数的参数要求是实现了iterator的方法的数据结构
// Set 实例方法 add() delete() has() clear()
// Set 属性 size
// Array.from方法可以将 Set 结构转为数组。
// Set 遍历方式有keys，values，entires
const set = new Set([1,2,3,1])
console.log(set.size)
console.log(set.has(1))

// WeakSet 成员只能是对象，weakSet不可以遍历，weakSet里面的对象都是弱引用
// WeakMap 成员只能是对象，也不可以遍历以及size，无法清空，即不支持clear方法
// WeakMap 弱引用的只是键名，而不是键值。键值依然是正常引用
const wm = new WeakMap();
let key = {};
let obj1 = {foo: 1};

wm.set(key, obj1);
obj = null;
wm.get(key)