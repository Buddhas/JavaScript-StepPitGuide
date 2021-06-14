const debounce = (timer, fn) => {
    let timerFlag = null
    return () => {
        clearTimeout(null)
        timerFlag = setTimeout(() => {
            fn()
        }, timer);
    }
}