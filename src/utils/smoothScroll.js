// Based on https://github.com/Yuliang-Lee/vue2-smooth-scroll

export function smoothScroll(elementToScrollTo, offset) {
  // we use requestAnimationFrame to be called by the browser before every repaint
  const requestAnimationFrame =
    window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    function(fn) {
      window.setTimeout(fn, 16);
    };

  let duration = 500;
  let container = window;
  const clock = Date.now();

  const startPoint = container.scrollTop || window.pageYOffset;

  let end = getTop(elementToScrollTo, startPoint);
  end += offset;

  const step = () => {
    const elapsed = Date.now() - clock;
    // calculate the scroll position we should be in
    let position = end;
    if (elapsed < duration) {
      position =
        startPoint + (end - startPoint) * easeInOutCubic(elapsed / duration);

      requestAnimationFrame(step);
    }

    container === window
      ? container.scrollTo(0, position)
      : (container.scrollTop = position);
  };
  step();
}

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
}

function getTop(element, start) {
  if (element.nodeName === "HTML") return -start;
  return element.getBoundingClientRect().top + start;
}
