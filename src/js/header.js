const switchTheme = document.getElementById('theme-switch');

switchTheme.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  console.log('click');
});


const clickLink = document.getElementById('link_active')
const submenuClass = document.getElementById('submenu')
const arrowSign = document.getElementById('arrow')
clickLink.addEventListener('click', function(event) {
  event.preventDefault();
  arrowSign.classList.toggle('rotated');
  if (submenu.style.display === 'block') {
    submenu.style.display = 'none';
  } else {
    submenu.style.display = 'block';
  }
});



