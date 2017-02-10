let cc = 'red'
document.body.style.backgroundColor = cc
document.querySelector('h1')
.addEventListener('click', e => {
  cc = cc === 'red'
    ? 'yellow'
    : 'red'
  document.body.style.backgroundColor = cc
})

window.addEventListener('message', e => {
  document.body.children[0].innerHTML = e.data.level
})

setInterval(() => {
  parent.postMessage('test', window.location.href)
}, 1000)
