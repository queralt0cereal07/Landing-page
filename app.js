const modeBtn = document.querySelector('.btn.btn-outline-light');

modeBtn.addEventListener('click', () => {

    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        modeBtn.textContent = 'Light mode';
    } else {
        modeBtn.textContent = 'Dark mode';
    }
});
