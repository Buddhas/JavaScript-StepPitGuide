function limitLoad(urls, handler, limit) {
  const promises = urls.splice(0, limit).map((url, index) => {
    return handler(url).then(() => {
      return index
    })
  })

  return urls.reduce((p, c) => {
    p.then(() => {
      return Promise.race(promises).then(index => {
        promises[index] = handler(c).then(() => {
          return index
        })
      })
    }).then(() => {
      Promise.all(promises)
    })

  }, Promise.resolve())
}