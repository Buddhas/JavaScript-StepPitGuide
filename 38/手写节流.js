const throttle = (timer, fn) => {
  let timerFlag = null
  return () => {
    if (!timerFlag) {
      timer = setTimeout(() => {
        timerFlag = null
        fn()
      }, timer);
    }
  }
}