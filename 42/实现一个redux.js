// https://juejin.cn/post/6844904080255483912 参考文章
function redux(reducer, initState) {
    let state = initState
    let listeners = []

    // 订阅
    const subscribe = (listener) => {
        listeners.push(listener)
    }

    // state 值修改
    function dispatch(action) {
        state = reducer(state, action)
        for (const item of listener) {
            item()
        }
    }

    dispatch({ type: new Symbol() })
    function getState() {
        return state
    }

    return { subscribe, dispatch, getState }
}

function combineReduce(state = {}, reducers) {
    const keys = Object.keys(reducers);
    return function (state, action) {
        const nextState = {}
        for (const item of keys) {
            const reducer = reducers[item]
            const previousState = state[item]
            const nextStateForKey = reducer(previousState, action)
            nextState[item] = nextStateForKey
        }
        return nextState
    }
}
function applyMiddlers(...fn) {
    return function (oldCreateStore) {
        return function CreatStore(reducer, state) {
            const store = oldCreateStore(reducer, state)
            let dispatch = store.dispatch
            const chain = fn.map((item) => {
                item(store)
            })
            chain.reverse().map((item) => {
                dispatch = item(dispatch)
            })
            store.dispatch = dispatch
            return store;
        }
    }
}
// 中间件
const loggerMiddler = store => next => action => {
    console.log(logger);
    next()
    console.log(action)
}

// compose 方法
const chain = [A, B, C]
dispatch = compose(...chain)(store.dispatch)

export default function compose(...funcs) {
    if (funcs.length === 1) {
        return funcs[0]
    }
    return funcs.reduce((a, b) => (...args) => a(b(...args)))
}

