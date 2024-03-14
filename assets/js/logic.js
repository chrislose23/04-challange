const modeSwitch = document.querySelector('.mode-switch');
const theme = document.querySelector('.theme');

let mode = 'light';

modeSwitch.addEventListener('click', function() {
    if (mode === 'light') {
        mode = 'dark';
        theme.setAttribute('class', 'dark');
    }
    else {
        mode = 'light';
        theme.setAttribute('class', 'light');
    }
});