const rightLogin = document.querySelector('.right-login');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', ()=> {
    rightLogin.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    rightLogin.classList.remove('active');
});