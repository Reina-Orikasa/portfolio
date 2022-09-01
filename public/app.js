gsap.registerPlugin(ScrollTrigger);

let d = new Date();

let options = {
  month: 'long',
  day: '2-digit',
  year: 'numeric-',
};

function displayDate(d, options, htmlSelector) {
  let formatDate = new Intl.DateTimeFormat('en', options);

  let today = formatDate.format(d);

  htmlSelector.insertAdjacentHTML('beforeend', today);
}

displayDate(
  d,
  {
    year: 'numeric',
  },
  document.querySelector('.year')
);

gsap.from('#header-text', {
  duration: 0.8,
  y: -300,
  ease: 'bounce',
});