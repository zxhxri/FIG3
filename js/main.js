const instance = tippy(document.querySelector('.tippy'))
const container = document.querySelector('body')
container.addEventListener('scroll', () => {
  instance.hide(0)
})