var footer = document.querySelector('footer > p'),
  addEvent = function (el, type, handler) {
    if (el.attachEvent) {
      el.attachEvent('on' + type, handler);
    } else {
      el.addEventListener(type, handler);
    }
  },
  scrollToTop = function (scrollDuration) {
    var scrollStep = -window.scrollY / (scrollDuration / 15),
      scrollInterval = window.setInterval(function () {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        window.clearInterval(scrollInterval);
      }
    }, 15);
  };

addEvent(footer, 'click', function () {
  scrollToTop(500);
});
