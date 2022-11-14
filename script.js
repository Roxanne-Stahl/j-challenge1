const form = document.getElementById('userForm');
const email = document.getElementById('userEmail');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailVal = email.value;

    //email validation
    if(!validateEmail(emailVal)){
        form.classList.add('error');
    }
    else {
        form.classList.remove('error');
        email.value = '';
    }
});

function validateEmail(email) {
    let regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regEx.test(String(email).toLowerCase());
};