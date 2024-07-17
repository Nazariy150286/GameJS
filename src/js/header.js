const switchTheme = document.getElementById('theme-switch');

switchTheme.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  console.log('click');
});
//при кліку на інтерактив висвічувалося сабменю   




// clickLink.addEventListener('click', function(event){
//   event.preventDefault();
//   submenuClass.classList.toggle('show');

  
// });

// document.addEventListener('DOMContentLoaded', function() {
//   const clickLink = document.getElementById('link_active');
//   const submenuClass = document.getElementById('submenu');

//   clickLink.addEventListener('click', function(event) {
//     event.preventDefault();
//     submenuClass.classList.toggle('show');
//   });
// })

const clickLink = document.getElementById('link_active')
const submenuClass = document.getElementById('submenu')

clickLink.addEventListener('click', function(event) {
  event.preventDefault();
  if (submenu.style.display === 'block') {
    submenu.style.display = 'none';
  } else {
    submenu.style.display = 'block';
  }
});
