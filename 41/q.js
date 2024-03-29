const observer = (obj) => {
    if (typeof (obj) !== 'object') {
        return;
    }
    for (const key in obj) {
        let temp = obj[key];
        observer(temp); // 递归遍历子属性
        const dep = new Dep();
        Object.defineProperty(obj, key, {
            get: function () {
                // 将订阅器Dep添加订阅者的操作设计在getter里面，
                // 这是为了让Watcher初始化时进行触发，因此需要判断是否要添加订阅者。
                console.log('监听到了get:' + key);
                dep.depend();
                return temp;
            },
            set: function (value) {
                if (value === temp) {
                    // 数据没有改变，不需要通知
                    return;
                }
                temp = value;
                dep.notify(); // 数据改变，通知订阅者
                console.log('新值为:' + value);
            }
        });
    }
}

// 由于订阅者有很多，所以需要一个消息订阅器，用来收集订阅者，然后在属性变化的时候执行对应订阅者的更新函数。
class Dep {
    constructor() {
        this.subscribes = [];
    }
    addSubscribe = (subscribe) => {
        this.subscribes.push(subscribe);
    }
    notify = () => {
        this.subscribes.forEach((subscribe) => {
            subscribe.update();
        })
    }
    //判断是否增加订阅者
    depend = () => {
        if (Dep.target) {
            this.addSubscribe(Dep.target)
        }
    }
}

// 这是一个全局唯一 的Watcher，这是一个非常巧妙的设计，因为在同一时间只能有一个全局的 Watcher 被计算
Dep.target = null;

class Watcher {
    constructor(vm, exp, cb) {
        this.cb = cb; // Watcher绑定的更新函数
        this.vm = vm; // 一个VUE的实例对象
        this.exp = exp; // node节点的v-model或v-on：click等指令的属性值。如v-model="name"，exp就是name
        this.value = this.get();  // 将自己添加到订阅器的操作
    }
    update = () => {
        let value = this.vm.data[this.exp];
        let oldVal = this.value;
        if (value !== oldVal) {
            this.value = value;
            this.cb.call(this.vm, value, oldVal);
        }
    }
    get = () => {
        Dep.target = this;  // 缓存自己
        // 下面这个过程中会对 vm 上的数据访问，其实就是为了触发数据对象的getter
        let value = this.vm.data[this.exp]
        Dep.target = null;  // 释放自己，当前vm的数据依赖收集已经完成，那么对应的渲染Dep.target 也需要改变。
        return value;
    }
}



function myVue(data, el, exp) {
    this.data = data;
    observer(data);                     //将数据变的可观测
    el.innerHTML = this.data[exp];           // 初始化模板数据的值
    new Watcher(this, exp, function (value) {
        el.innerHTML = value;
    });
    return this;
}

var ele = document.querySelector('#name');
var input = document.querySelector('input');
var myVue = new myVue({
    name: 'hello world'
}, ele, 'name');

//改变输入框内容
input.oninput = function (e) {
    myVue.data.name = e.target.value
}
