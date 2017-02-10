// window.addEventListener('message', e => {
//   document.body.children[0].innerHTML = e.data.level
// })

// setInterval(() => {
//   parent.postMessage('test', window.location.href)
// }, 1000)

const winner = e => parent.postMessage({win: true}, window.location.href)
const btn = document.querySelector('#btn')

btn.addEventListener('click', winner, false)
setTimeout(e => {
  btn.removeEventListener('click', winner, false)
  parent.postMessage({win: false, msg: 'Timeout.'}, window.location.href)
}, 3000)
