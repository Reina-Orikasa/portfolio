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

gsap.from('#header-icons', {
  duration: 0.5,
  y: 300,
  opacity: 0,
  scale: 0.5,
  delay: 0.5,
});

gsap.from('#colorful', {
  scrollTrigger: '#panel-right',
  duration: 0.8,
  opacity: 0,
  scale: 0.7,
  delay: 0.5,
  y: 400,
});

gsap.from('#panel-right', {
  scrollTrigger: '#panel-right',
  duration: 0.8,
  opacity: 0,
  y: 400,
  scale: 0.7,
  delay: 0.5,
});

gsap.from('#pkmn-home', {
  scrollTrigger: '#home-img',
  duration: 0.7,
  y: 400,
  delay: 0.4,
  opacity: 0,
});

gsap.from('#top-panel', {
  scrollTrigger: '#top-panel',
  duration: 0.5,
  y: 300,
});

function changeColor(color, imgSrc, imgSrcSet) {
  let section = document.getElementById('colorful');
  let image = document.getElementById('colorful-image');
  image.src = imgSrc;
  image.srcset = imgSrcSet;

  section.style.transition = 'all 0.6s';
  section.style.backgroundColor = color;
}
