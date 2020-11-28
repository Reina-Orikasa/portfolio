let d = new Date();
let todaySelector = document.querySelector('#today');

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
    month: 'long',
    day: '2-digit',
    year: 'numeric',
  },
  todaySelector
);

displayDate(d, { year: 'numeric' }, document.querySelector('.year'));
