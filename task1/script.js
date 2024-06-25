const loginForm = document.querySelector('form');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const loginBtn = document.querySelector('#login-btn');
const errorMessage = document.querySelector('#error-msg');
const welcomeMessage = document.querySelector('.welcome-msg');
const welcomeHeader = document.querySelector('#welcome-header');
const darkModeBtn = document.querySelector('#mode-btn');
const body = document.body;


        darkModeBtn.addEventListener('click', () => {
            body.classList.toggle('light-mode');
        });

    loginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const username = usernameInput.value;
        const password = passwordInput.value;

        if ((!/^[a-zA-Z]+$/.test(username)) || (!/^\d+$/.test(password))) {
            errorMessage.textContent = 'Username can only contain letters and password can only contain numbers';

        }else{
            loginForm.style.display = 'none';
            welcomeMessage.style.display = 'block';
            welcomeHeader.textContent = `Xoş gəlmişsiniz, ${username}!`;
        }

    });