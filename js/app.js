const form = document.getElementById('form');
const man = document.getElementById('man');
const woman = document.getElementById('woman');
const masculine = document.querySelector('.masculine');
const femenine = document.querySelector('.femenine');
const button = document.getElementById('button');
const submit = document.getElementById('submit');
const container = document.querySelector('.center');
const invalids = document.querySelectorAll('.invalid');
const fails = Array.from(invalids);
//Form Fields
const name = document.getElementById('name');
const email = document.getElementById('email');
const sex = document.querySelectorAll('[name=sex]');

const year = document.getElementById('year');
const terms = document.getElementById('terms');
//Validate Fields
const keys = {
  yourName: false,
  yourEmail: false,
  yourSex: false,
  yourBirtYear: false,
  ourTerms: false,
};
let { yourName, yourEmail, yourSex, yourBirtYear, ourTerms } = keys;
//Add Event Listener on Validating to the fields
name.addEventListener('blur', validateForm1);
email.addEventListener('blur', validateForm2);
year.addEventListener('change', (e) => {
  if (e.value !== 'Chose The Year') {
    yourBirtYear = true;
    year.style.borderColor = 'green';
    finalValidation();
  }
});
terms.addEventListener('click', () => {
  ourTerms === false ? (ourTerms = true) : (ourTerms = false);
  finalValidation();
});
//Validate if Email is valid
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
//Validate Form
function validateForm1(e) {
  if (e.target.value.length > 0) {
    e.target.style.borderColor = 'green';
    console.log(e.target.type);
    for (let fail of fails) {
      if (
        fail.getAttribute('data-invalid') ===
        e.target.getAttribute('data-input')
      ) {
        fail.style.opacity = 0;
      }
    }
    yourName = true;
  } else {
    e.target.style.borderColor = 'red';
    yourName = false;
    for (let fail of fails) {
      if (
        fail.getAttribute('data-invalid') ===
        e.target.getAttribute('data-input')
      ) {
        fail.style.opacity = 1;
      }
    }
  }
  finalValidation();
}
function validateForm2(e) {
  if (validateEmail(e.target.value)) {
    e.target.style.borderColor = 'green';
    console.log(e.target.type);
    for (let fail of fails) {
      if (
        fail.getAttribute('data-invalid') ===
        e.target.getAttribute('data-input')
      ) {
        fail.style.opacity = 0;
      }
    }
    yourEmail = true;
  } else {
    e.target.style.borderColor = 'red';
    yourName = false;
    for (let fail of fails) {
      if (
        fail.getAttribute('data-invalid') ===
        e.target.getAttribute('data-input')
      ) {
        fail.style.opacity = 1;
      }
    }
  }
  finalValidation();
}
//Add Color to inputs radios and validate the fields
woman.addEventListener('click', () => {
  femenine.style.color = 'lightcoral';
  masculine.style.color = 'white';
  yourSex = true;
  finalValidation();
});
man.addEventListener('click', () => {
  masculine.style.color = 'lightblue';
  femenine.style.color = 'white';
  yourSex = true;
  finalValidation();
});
//Disable button
button.disabled = true;
//Submit events
button.addEventListener('submit', (e) => {
  e.preventDefault();
  container.append(sendImg);
});
button.addEventListener('click', () => {
  const sendImg = document.createElement('IMG');
  sendImg.classList.add('send-img');
  sendImg.src = 'https://c.tenor.com/0ceXa2Dg8ywAAAAC/email-sent.gif';
  sendImg.alt = 'Gif.Send';
  container.append(sendImg);
  setTimeout(() => {
    sendImg.remove();
    submit.click();
  }, 5000);
});
//Validate Form with all the fields filled correctly
function finalValidation() {
  if (
    yourName === true &&
    yourEmail === true &&
    yourSex === true &&
    yourBirtYear === true &&
    ourTerms === true
  ) {
    button.disabled = false;
    button.style.opacity = '1';
    button.style.cursor = 'pointer';
    const divMessage = document.createElement('DIV');
    divMessage.classList.add('center');
    const succesfullMessage = document.createElement('P');
    succesfullMessage.classList.add('success');
    succesfullMessage.textContent = 'Now you can send us your data';
    divMessage.append(succesfullMessage);
    form.append(divMessage);
    setTimeout(() => {
      divMessage.remove();
    }, 5000);
  }
}
