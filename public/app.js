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

gsap.to('.created', {
  scrollTrigger: '.created',
  duration: 0.3,
  y: -100,
  delay: 0.4,
  opacity: 1,
});

gsap.to('.created1', {
  scrollTrigger: '.bg-3',
  duration: 0.3,
  y: -100,
  delay: 0.4,
  opacity: 1,
});

gsap.to('.created2', {
  scrollTrigger: '.bg-4',
  duration: 0.3,
  y: -100,
  delay: 0.4,
  opacity: 1,
});
