class Koa {
    constructor() {
        this.middleWare = []
    }
    use(fn) {
        this.middleWare.push(fn);
        return this
    }
    listen() {
        // 省去启动服务的步骤，直接让middleWare开始运行
        return compose(this.middleWare)({});
    }
}

function compose(middleWare) {
    return function(ctx) {
        let index = -1;

        function next(i) {
            index = i;
            if (index === middleWare.length) return Promise.resolve()
            let fn = middleWare[index];
            return Promise.resolve(fn(ctx, () => next(i + 1)));
        };
        next(0);
    }
}

const app = new Koa();

app.use(async(ctx, next) => {
    // ctx.body("111")
    next()
    console.log("111");
})
app.use(async(ctx, next) => {
    ctx.body("222")

})

app.listen(9000, () => {
    console.log("启动了");
})