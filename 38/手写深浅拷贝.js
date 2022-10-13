// 浅拷贝
Array.slice()
Array.concat()


// 浅拷贝


const deepClone = (obj, hash = new WeakMap) => {
  const constructor = obj.constructor
  let cloneObj

  switch (constructor) {
    case RegExp:
      cloneObj = new constructor(obj)
      break;
    case Date:
      cloneObj = new constructor(obj)
    case Function:
      cloneObj = eval(obj.toString())
    default:
      if (hash.has(obj)) return hash.get(obj)
      cloneObj = new constructor()
      hash.set(obj, cloneObj)
      break;
  }

  for (const key in obj) {
    cloneObj[key] = isObj(obj[key]) ? deepClone(obj[key], hash) : obj[key]
  }
}


const isObj = (obj) => {
  return typeof obj == 'object' || typeof obj == 'function'
}


const deepClone1 = (obj, hash = new WeakMap()) => {
  let cloneObj = {}
  const constructor = obj.constructor

  for (const key in obj) {
    cloneObj[key] = isObj(obj[key]) ? 
  }
}