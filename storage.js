const userNames = document.getElementById('user_name');
const lastName = document.getElementById('last_name');
const useremail = document.getElementById('user_email');
const userMessage = document.getElementById('user-message');

function setStorage() {
  const currentName = localStorage.getItem('name');
  const currentLastName = localStorage.getItem('lastName');
  const currentEmail = localStorage.getItem('email');
  const currentMessage = localStorage.getItem('message');

  userNames.value = currentName;
  lastName.value = currentLastName;
  useremail.value = currentEmail;
  userMessage.value = currentMessage;
}