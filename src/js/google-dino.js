const dino = document.querySelector('.google-dino__dino');
const cactus = document.querySelector('.google-dino__cactus');
const points = 0;

let x = Math.floor(
  dino.getBoundingClientRect().x + dino.getBoundingClientRect().width / 2
);
let y = Math.floor(
  dino.getBoundingClientRect().y + dino.getBoundingClientRect().width / 2
);

const cactusRun = () => {
  cactus.style.right = `${
    Number(cactus.style.right.split('px')[0]) + 8 + points * 0.05
  }px`;
  x = Math.floor(
    dino.getBoundingClientRect().x + dino.getBoundingClientRect().width / 2
  );

  y = Math.floor(
    dino.getBoundingClientRect().y + dino.getBoundingClientRect().width / 2
  );

  if (x < 0) {
    cactus.style.display = 'none';
    cactus.style.right = `-60px`;
    setTimeout(() => (cactus.style.display = 'block'), 200);
  }
};
