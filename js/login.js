document.getElementById('btn-submit').addEventListener('click', function () {
    console.log('button is clicked');

    const emailField = document.getElementById('email');
    // console.log(emailField);
    const emailValue = emailField.value;
    console.log(emailValue);

    const passwordField = document.getElementById('password');
    const passwordValue = passwordField.value;

    console.log(passwordValue);

    if (emailValue === 'sky@gmail.com' && passwordValue === 'secret') {
        window.location.href = 'bank.html';
    }
    else {
        alert('incorrect password or email');
    }
})