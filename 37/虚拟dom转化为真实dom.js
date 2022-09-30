function render(vnode) {
    // 如果是字符串
    if (typeof vnode === 'string') {
        return document.createTextNode(vnode)
    }

    // 如果是对象
    const dom = document.createElement(vnode.tag)
    if (vnode.attrs) {
        Object.keys(vnode.attrs).forEach((key) => {
            dom.setAttribute(key, vnode.attrs[key])
        })
    }

    vnode.children.forEach((item) => {
        dom.appendChild(render(item))
    })

    return dom
}