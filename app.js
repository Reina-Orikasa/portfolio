let d = new Date();
let todaySelector = document.querySelector('#today');

let options = {
  month: 'long',
  day: '2-digit',
  hour: 'numeric',
  minute: '2-digit',
};

let formatDate = new Intl.DateTimeFormat('en', options);

let today = formatDate.format(d);

todaySelector.insertAdjacentHTML('beforeend', today);
