const body = document.querySelector('body');
const changeColorBtn = document.querySelector('.change-color');

changeColorBtn.addEventListener('click', event => {
  body.style.backgroundColor = getRandomHexColor();
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
