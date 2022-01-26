const formButton = document.querySelector('#formButton');
const userEmail = document.querySelector('#user_email');
const errorMsg = document.querySelector('.form-error');
errorMsg.textContent = 'Please add your email using lower case format * e.g. username@gmail.com*';

function emailValidation(e) {
  if (userEmail.value !== userEmail.value.toLowerCase()) {
    errorMsg.style.display = 'block';
    e.preventDefault();
  } else {
    errorMsg.style.display = 'none';
  }
}

formButton.addEventListener('click', emailValidation);
