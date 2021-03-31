const lazyLoad = () => {
  const imgs = document.getElementsByTagName('img')

  const clientHeight = document.body.clientHeight
  const scrollTop = document.body.scrollTop

  for(let i = 0; i < imgs.length; i++) {
    if (imgs[i].offsetTop < clientHeight + scrollTop) {
      imgs[i].setAttribute('src') = imgs[i].getAttribute('data-src')
    }
  }
}


const lazyLoad = () => {
  const imgs = document.getElementsByTagName('img')

  const clientHeight = document.body.clientHeight

  for(let i = 0; i < imgs.length; i++) {
    if (imgs[i].getBoundingClientRect().top < clientHeight) {
      imgs[i].setAttribute('src') = imgs[i].getAttribute('data-src')
    }
  }
}