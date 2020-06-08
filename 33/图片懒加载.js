let imgs = document.getElementsByTagName['img']

function thro(fn, delay) {
  let timer = null
  return ()=> {
    if (!timer) {
      timer = setTimeout(() => {
        fn()
        timer = null
      }, delay);
    }
  }
} 

function lazy() {
  let clientHeight = document.documentElement.clientHeight
  let scrollHeight = document.documentElement.scrollTop
  for(let i = 0; i < imgs.length; i++) {
    if (imgs[i].offsetTop < clientHeight + scrollHeight) {
      imgs[i].src = imgs.getAttribute('data-src')
    }
  }
}