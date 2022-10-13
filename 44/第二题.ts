// TypeScript 中 any、never、unknown、null & undefined 和 void 有什么区别？
// any 没有类型检查的功能
// never 不存在的值，是任何类型的子类型，做类型收窄
// unknow 使用的时候需要去定义
// 没有显式返回值的函数会隐式返回 undefined 使用void，
// 具有 never 返回类型的函数永不返回

type Foo = string | number;

function controlFlowAnalysisWithNever(foo: Foo) {
    if (typeof foo === "string") {
        // 这里 foo 被收窄为 string 类型
    } else if (typeof foo === "number") {
        // 这里 foo 被收窄为 number 类型
    } else {
        // foo 在这里是 never
        const check: never = foo;
    }
}