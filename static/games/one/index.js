let cc = 'red'
document.body.style.backgroundColor = cc
document.querySelector('h1')
.addEventListener('click', e => {
  cc = cc === 'red'
    ? 'yellow'
    : 'red'
  document.body.style.backgroundColor = cc
})
