// https://juejin.cn/post/6998736350841143326#heading-3
// 带泛型参数的extends 需要做分配
type Test112<T> = {
    [P in keyof T]: T[P]
}
type Record1<T, P> = {
    [P in keyof T]: P
}

type Exclude1<T, P> = T extends P ? T : never