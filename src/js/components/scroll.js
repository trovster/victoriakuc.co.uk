const footer = document.querySelector('footer > p')

const addEvent = function (el, type, handler) {
  if (el.attachEvent) {
    el.attachEvent('on' + type, handler)
  } else {
    el.addEventListener(type, handler)
  }
}

const scrollToTop = function (scrollDuration) {
  const scrollStep = -window.scrollY / (scrollDuration / 15)
  const scrollInterval = window.setInterval(function () {
    if (window.scrollY !== 0) {
      window.scrollBy(0, scrollStep)
    } else {
      window.clearInterval(scrollInterval)
    }
  }, 15)
}

addEvent(footer, 'click', function () {
  scrollToTop(500)
})
