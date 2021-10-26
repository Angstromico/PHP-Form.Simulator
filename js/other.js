const right = document.querySelector('.right');
const bad = document.querySelector('.bad');
const name = document.getElementById('name');
const email = document.getElementById('email');
const sex = document.getElementById('sex');
const year = document.getElementById('year');
const mainContainer = document.querySelector('.container');
const container = document.querySelector('.radio-container');
const labels = Array.from(document.querySelectorAll('label'));
const names = Array.from(document.querySelectorAll('[name]'));
const newSex = document.getElementById('newSex');
const newYear = document.getElementById('select');
const form = document.getElementById('form2');

//Event for the Right Button
right.addEventListener('click', () => {
  const h2 = document.createElement('H2');
  h2.textContent = 'Dank for the Feedback!';
  container.remove();
  mainContainer.append(h2);
});
//Event for The Bad Button
bad.addEventListener('click', () => {
  container.remove();
  form.classList.remove('non-existens');
});
//Show Field to Fix when click on Label
for (let label of labels) {
  label.addEventListener('click', (e) => {
    for (let nam of names) {
      if (e.target.getAttribute('for') === nam.getAttribute('name')) {
        nam.classList.toggle('opacity-zero');
      }
    }
  });
}
//Validate if Email is valid
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
form.addEventListener('submit', (e) => {
  e.preventDefault();
  for (let nam of names) {
    if (nam.type === 'text') {
      if (nam.value !== '') {
        name.textContent = nam.value;
      }
    }
    if (nam.type === 'email') {
      if (nam.value !== '' && validateEmail(nam.value)) {
        email.textContent = nam.value;
      }
    }
    if (nam.id === 'select') {
      if (nam.value !== 'Chose your Real Year of Birth') {
        year.textContent = nam.value;
      }
    }
    if (nam.id === 'newSex') {
      if (nam.value !== 'Pick Your Real Gender') {
        sex.textContent = nam.value;
      }
    }
  }
  form.remove();
  mainContainer.append(container);
});
