document.addEventListener('DOMContentLoaded', () => {
    const loginContainer = document.getElementById('login-container');
    const signupContainer = document.getElementById('signup-container');
    const resetPasswordContainer = document.getElementById('reset-password-container');

    const showSignupLink = document.getElementById('show-signup');
    const showLoginLink = document.getElementById('show-login');
    const showLoginFromResetLink = document.getElementById('show-login-from-reset');
    const forgotPasswordLink = document.getElementById('forgot-password');

    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const resetPasswordForm = document.getElementById('resetPasswordForm');

    function showContainer(container) {
        loginContainer.classList.remove('active');
        signupContainer.classList.remove('active');
        resetPasswordContainer.classList.remove('active');
        container.classList.add('active');
    }

    showSignupLink.addEventListener('click', () => showContainer(signupContainer));
    showLoginLink.addEventListener('click', () => showContainer(loginContainer));
    showLoginFromResetLink.addEventListener('click', () => showContainer(loginContainer));
    forgotPasswordLink.addEventListener('click', () => showContainer(resetPasswordContainer));

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const userId = document.getElementById('loginUserId').value;
        const password = document.getElementById('loginPassword').value;
        const loginErrorMessage = document.getElementById('login-error-message');

        if (userId === 'aaryan' && password === '7798') {
            alert('Login successful!');
        } else {
            loginErrorMessage.textContent = 'Invalid User ID or Password';
        }
    });

    signupForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('signupName').value;
        const contact = document.getElementById('signupContact').value;
        const userId = document.getElementById('signupUserId').value;
        const password = document.getElementById('signupPassword').value;
        const confirmPassword = document.getElementById('signupConfirmPassword').value;
        const signupErrorMessage = document.getElementById('signup-error-message');

        if (name && contact && userId && password && confirmPassword) {
            if (password === confirmPassword) {
                alert('Sign up successful!');
            } else {
                signupErrorMessage.textContent = 'Passwords do not match';
            }
        } else {
            signupErrorMessage.textContent = 'Please fill out all fields';
        }
    });

    resetPasswordForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const userId = document.getElementById('resetUserId').value;
        const resetPasswordMessage = document.getElementById('reset-password-message');

        if (userId) {
            alert('Password reset link sent!');
        } else {
            resetPasswordMessage.textContent = 'Please enter your User ID';
        }
    });

    // Show login form by default
    showContainer(loginContainer);
});
