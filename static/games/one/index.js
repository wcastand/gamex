// Event -> Void
const winner =
  e => parent.postMessage({win: true}, window.location.href)

// Void -> DOMNode
const btn =
  document.querySelector('#btn')

btn.addEventListener('click', winner, false)
setTimeout(e => {
  btn.removeEventListener('click', winner, false)
  parent.postMessage({win: false}, window.location.href)
}, 3000)
