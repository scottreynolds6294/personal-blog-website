const toggleSwitch = document.querySelector('#toggle');
const body = document.querySelector('body');

let mode = "light";
toggleSwitch.addEventListener('change', function(){
    if (this.checked) {
        mode = 'dark';
        body.classList.remove('light');
        body.classList.add('dark');
    }
    else {
        mode = 'light';
        body.classList.remove('dark');
        body.classList.add('light');
    }
});
