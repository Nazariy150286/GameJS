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

const games =  [
  {
    id: 1,
    name: 'Високосний калькулятор',
    category: 'numerical',

  },
  {
      id: 2,
      name: 'Вгадай число',
      category: 'numerical',

    },
    {
      id: 3,
      name: 'Камінь-Ножиці-Папір',
      category: 'game',

    },
    {
      id: 4,
      name: 'Калькулятор',
      category: 'numerical',

    },
    {
      id: 5,
      name: 'Калькулятор часу',
      category: 'numerical',

    },
    {
      id: 6,
      name: 'Google динозаврик',
      category: 'game',

    },
    {
      id: 7,
      name: 'Футбол',
      category: 'game',

    },
    {
      id: 8,
      name: 'Найбільше число',
      category: 'numerical',

    },
    {
      id: 9,
      name: 'Наша команда',
      category: 'acquaintance',

    },
    {
      id: 10,
      name: 'Вчений',
      category: 'acquaintance',

    },
]
const allSect = document.getElementById('all')
const numSect = document.getElementById('number')
const gameSect = document.getElementById('game')
const greetingSect = document.getElementById('greeting')

const numerical = document.getElementById('numerical')
const game = document.getElementById('game')
const acquaintance = document.getElementById('acquaintance')

numSect.addEventListener('click', () =>  {
  
  numerical.style.display = 'block'
  game.style.display = 'none'
  acquaintance.style.display = 'none'

})
gameSect.addEventListener('click', () =>  {
  
  numerical.style.display = 'none'
  game.style.display = 'block'
  acquaintance.style.display = 'none'

})
greetingSectSect.addEventListener('click', () =>  {
  
  numerical.style.display = 'none'
  game.style.display = 'none'
  acquaintance.style.display = 'block'

})