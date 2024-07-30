const scientists = [
  { name: 'Albert', surname: 'Einstein', born: 1879, dead: 1955, id: 1 },
  { name: 'Isaac', surname: 'Newton', born: 1643, dead: 1727, id: 2 },
  { name: 'Galileo', surname: 'Galilei', born: 1564, dead: 1642, id: 3 },
  { name: 'Marie', surname: 'Curie', born: 1867, dead: 1934, id: 4 },
  { name: 'Johannes', surname: 'Kepler', born: 1571, dead: 1630, id: 5 },
  { name: 'Nicolaus', surname: 'Copernicus', born: 1473, dead: 1543, id: 6 },
  { name: 'Max', surname: 'Planck', born: 1858, dead: 1947, id: 7 },
  { name: 'Katherine', surname: 'Blodgett', born: 1898, dead: 1979, id: 8 },
  { name: 'Ada', surname: 'Lovelace', born: 1815, dead: 1852, id: 9 },
  { name: 'Sarah E.', surname: 'Goode', born: 1855, dead: 1905, id: 10 },
  { name: 'Lise', surname: 'Meitner', born: 1878, dead: 1968, id: 11 },
  { name: 'Hanna', surname: 'Einshtein', born: 1829, dead: 1909, id: 12 },
];

const scientistContainer = document.querySelector('.scientists__list');
const buttons = document.querySelectorAll('.scientists__button');

function displayScientists(scientists) {
  scientistContainer.innerHTML = '';
  scientists.forEach(scientist => {
    const div = document.createElement('div');
    div.classList.add('scientists__item');
    div.innerHTML = `<h2 class="scientists__name">${scientist.name} ${scientist.surname}<br>${scientist.born}-${scientist.dead}</h2>`;
    scientistContainer.appendChild(div);
  });
}

function filterScientists(filterFunction) {
  const filteredScientists = scientists.filter(filterFunction);
  displayScientists(filteredScientists);
}

buttons[0].addEventListener('click', () => {
  filterScientists(
    scientist => scientist.born >= 1801 && scientist.born <= 1900
  );
});

buttons[1].addEventListener('click', () => {
  const sortedScientists = [...scientists].sort((a, b) =>
    a.surname.localeCompare(b.surname)
  );
  displayScientists(sortedScientists);
});

buttons[2].addEventListener('click', () => {
  const sortedScientists = [...scientists].sort(
    (a, b) => b.dead - b.born - (a.dead - a.born)
  );
  displayScientists(sortedScientists);
});

buttons[3].addEventListener('click', () => {
  const albertEinstein = scientists.find(
    scientist => scientist.name === 'Albert' && scientist.surname === 'Einstein'
  );
  // alert(`Albert Einstein народився у ${albertEinstein.born}`);
  displayScientists([albertEinstein]);
});

buttons[4].addEventListener('click', () => {
  filterScientists(scientist => scientist.surname.startsWith('C'));
});

buttons[5].addEventListener('click', () => {
  const filteredScientists = scientists.filter(
    scientist => !scientist.name.startsWith('A')
  );
  displayScientists(filteredScientists);
});

buttons[6].addEventListener('click', () => {
  const youngestScientist = scientists.reduce((youngest, scientist) =>
    scientist.born > youngest.born ? scientist : youngest
  );
  displayScientists([youngestScientist]);
});

buttons[7].addEventListener('click', () => {
  const longestLived = scientists.reduce((max, scientist) =>
    scientist.dead - scientist.born > max.dead - max.born ? scientist : max
  );
  const shortestLived = scientists.reduce((min, scientist) =>
    scientist.dead - scientist.born < min.dead - min.born ? scientist : min
  );
  displayScientists([longestLived, shortestLived]);
});

buttons[8].addEventListener('click', () => {
  filterScientists(scientist => scientist.name[0] === scientist.surname[0]);
});

displayScientists(scientists);
