document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const passwordInput = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    const correctPassword = 'kelas_E';
    if (passwordInput === correctPassword) {
        window.location.href = 'dashboard.html';
    } else {
        errorMessage.textContent = 'Password salah. Silakan coba lagi.';
    }
});