const backButton = document.querySelector('#back-button');
const toggleSwitch = document.querySelector('#toggle-switch')
  
backButton.addEventListener('click', function() {
  window.history.back();
});

let mode = 'dark';
 toggleSwitch.addEventListener('click', function() {
    if (mode === 'dark') {
        mode = 'light';
        body.setAttribute('class', 'light');
      }
      else {
        mode = 'dark';
        body.setAttribute('class', 'dark');
      }
    });
  
