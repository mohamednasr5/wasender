/* WA Sender — policy page enhancer
   Sets stagger index (--i) on .policy-content children and
   triggers the .reveal entrance class once the DOM is ready. */
document.addEventListener('DOMContentLoaded', function () {
  var content = document.querySelector('.policy-content');
  if (!content) return;

  Array.prototype.forEach.call(content.children, function (el, i) {
    el.style.setProperty('--i', i);
  });

  requestAnimationFrame(function () {
    content.classList.add('reveal');
  });
});
