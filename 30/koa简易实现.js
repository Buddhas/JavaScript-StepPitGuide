function compose(middleware) {
    if (!Array.isArray(middleware) ) {
        throw new Error('error')
    }
    for (const fn of middleware) {
        if (typeof fn !== 'function') {
            throw new Error('error')
        }
    }
    return (ctx) => {
        let index = -1
        return dispatch(0)
        function dispatch(i) {
            if (i <= index) {
                throw new Error('error')
            }
            index = i
            let fn = middleware[i]
            if (!fn) return Promise.resolve()
            try {
                return Promise.resolve(fn(ctx, () => {  dispatch(i +1 )}))
            } catch (error) {
                return Promise.reject()
            }
        }
    }
}
const m1 = async (context, next) => {
    console.log('in-1');
    await next();
    console.log('out-1');
  };
  const m2 = async (context, next) => {
    console.log('in-2');
    await next();
    console.log('out-2');
  };
  const m3 = async (context, next) => {
    console.log('in-3');
    await next();
    console.log('out-3');
  };
  compose([m1, m2, m3])();