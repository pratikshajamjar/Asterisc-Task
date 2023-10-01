javascript
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    alert(`Thank you for registering, ${name}! We will send a confirmation email to ${email}.`);
});