// public: 成员都默认为public，被此限定符修饰的成员是可以被外部访问；
// private: 被此限定符修饰的成员是只可以被类的内部访问；
// protected: 被此限定符修饰的成员是只可以被类的内部以及类的子类访问;
// ?? 空值合并运算符
// ! 非空断言运算符 x! 将从 x 值域中排除 null 和 undefined
// !. 在变量名后添加，可以断言排除undefined和null类型
// noImplicitThis: true 的情况下，必须去声明 this 的类型，
// 才能在函数或者对象中使用this。
// 协变：子类型可以赋值给父类型，逆变：父类型可以赋值给子类型
// 默认是双向逆变，父子类型相互赋值，strictFunctionType 可以约束赋值关系
class Test111 {
    public A: number = 0
    public getT() {
        console.log(this.A)
    }
}