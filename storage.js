const userNames = document.getElementById('user_name');
const lastName = document.getElementById('last_name');
const useremail = document.getElementById('user_email');
const userMessage = document.getElementById('user-message');

let formData = {
  firstName: '',
  email: '',
  message: '',
  lastName: '',
};

const form = document.querySelector('form');

if (localStorage.getItem('formData') != null) {
  formData = JSON.parse(localStorage.getItem('formData'));
  userNames.value = formData.firstName;
  useremail.value = formData.email;
  userMessage.value = formData.message;
  lastName.value = formData.lastName;
}

form.addEventListener('change', (e) => {
  e.preventDefault();
  formData.firstName = userNames.value;
  formData.email = useremail.value;
  formData.message = userMessage.value;
  formData.lastName = lastName.value;
  localStorage.setItem('formData', JSON.stringify(formData));
});
