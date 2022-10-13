// TS 相比 JS 多了静态编译

// <----1---->
// TypeScript 中 const 和 readonly 的区别？
// 枚举和常量枚举的区别？接口和类型别名的区别

// 1.1 const 防止变量的值被改变，readonly 防止变量属性被改变
const a: number = 1
interface A {
    readonly a: number
}

// 1.2 常量枚举只能使用常量表达式，在编译阶段会被删除
const enum ConstTest {
    A,
    B
}
const enumTest = ConstTest.A

// const test = ConstTest[0] error

enum Test {
    A,
    B
}

const test = Test[0] // success

// 1.3 interface 和 type 都可以描述接口，他们的继承方式不同
// interface 可以声明合并， type不行, type里面可以使用 typeof 做类型体操，interface不行
// interface 不能声明基本类型的别名
// 定义数据结构用interface，使用类型用type

// object
type PartialPointX = { x: number; };
type PartialPointY = { x: number; };

type PartialPoint = PartialPointX & PartialPointY;

type key = 'key' | 'title'
// type 不行
type Test11 = {
    [key1 in keyof key]: number
}
type Test12 = {
    [key: string]: number
}

interface Test13 {
    [key: string]: number
}


