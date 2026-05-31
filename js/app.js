const form = document.getElementById('form');
const man = document.getElementById('man');
const woman = document.getElementById('woman');
const button = document.getElementById('button');
const submit = document.getElementById('submit');
const container = document.querySelector('.center');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const yearSelect = document.getElementById('year');
const termsCheckbox = document.getElementById('terms');
const state = { name: false, email: false, sex: false, year: false, terms: false };
nameInput.addEventListener('input', () => {
    const isValid = nameInput.value.trim().length > 0;
    validateField(nameInput, isValid, 1);
    state.name = isValid;
    checkForm();
});
emailInput.addEventListener('input', () => {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value);
    validateField(emailInput, isValid, 2);
    state.email = isValid;
    checkForm();
});
yearSelect.addEventListener('change', () => {
    const isValid = yearSelect.value !== '';
    validateField(yearSelect, isValid, 3);
    state.year = isValid;
    checkForm();
});
[man, woman].forEach(radio => {
    radio.addEventListener('change', () => {
        state.sex = true;
        checkForm();
    });
});
termsCheckbox.addEventListener('change', () => {
    state.terms = termsCheckbox.checked;
    checkForm();
});
function validateField(input, isValid, dataId) {
    const errorMsg = document.querySelector('.invalid[data-invalid="' + dataId + '"]');
    if (isValid) {
        input.style.borderColor = 'var(--success)';
        if (errorMsg) errorMsg.style.opacity = 0;
    } else {
        input.style.borderColor = 'var(--error)';
        if (errorMsg) errorMsg.style.opacity = 1;
    }
}
function checkForm() {
    const isReady = state.name && state.email && state.sex && state.year && state.terms;
    button.disabled = !isReady;
}
button.addEventListener('click', () => {
    const sendImg = document.createElement('IMG');
    sendImg.classList.add('send-img');
    sendImg.src = 'https://c.tenor.com/0ceXa2Dg8ywAAAAC/email-sent.gif';
    sendImg.alt = 'Sending...';
    container.innerHTML = '';
    container.append(sendImg);
    setTimeout(() => { submit.click(); }, 2000);
});