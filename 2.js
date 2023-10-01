document.querySelector('#login form').addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Login button clicked');
});

document.querySelector('#register form').addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Register button clicked');
});