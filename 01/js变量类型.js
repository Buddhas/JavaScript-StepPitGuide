//js有五种基本数据类型：undefined,Null,Boolean,Number,String(值类型)
//从内存来说值类型是把每一个值存储在变量类型的每一个位置
var a = 10
var b = a
a = 20
console.log(a) //20
console.log(b)//10

//还有一种引用数据类型：Object，引用类型的存储需要内存的栈区和堆区（堆区是指内存里的堆内存）共同完成，栈区内存保存变量标识符和指向堆内存中该对象的指针，
//也可以说是该对象在堆内存的地址（引用类型）

var obj1 = {age:10}
var obj2 = obj1 //引用类型实际上是将obj1中的指针赋值给obj2,两个变量操作的同一段内存
obj1.age = 20
console.log(obj2.age)//20




//使用JS中使用typeof能得到的哪些类型：6种
console.log(typeof undefined) //undefined
console.log(typeof null) //object
console.log(typeof 'abc') //String
console.log(typeof 123) //Number
console.log(typeof true) //Boolean
console.log(typeof []) // object
console.log(typeof {}) //object
console.log(typeof console.log) //function
console.log(typeof Symbol())


//js内置函数
//Object
//Array
//Boolean
//Number
//String
//Function
//Date
//RegExp
//Error
