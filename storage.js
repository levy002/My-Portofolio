const userNames = document.getElementById('user_name');
const lastName = document.getElementById('last_name');
const useremail = document.getElementById('user_email');
const userMessage = document.getElementById('user-message');

function populateStorage() {
    let formData = {
        firstName: userNames.value,
        lastName: lastName.value,
        email: useremail.value,
        message: userMessage.value
    }
    localStorage.setItem('userData', JSON.stringify(formData));
    let savedFormData = localStorage.getItem('userData');
    savedFormData = JSON.parse(savedFormData);
}

window.onload = () => {
    let savedFormData = localStorage.getItem('userData');
    savedFormData = JSON.parse(savedFormData);
    if(savedFormData !== null) {
        userNames.value = savedFormData.firstName;
        lastName.value = savedFormData.lastName;
        useremail.value = savedFormData.email;
        userMessage.value = savedFormData.message
    }
    populateStorage();
}
 