const body = document.querySelector('body');
const changeColorBtn = document.querySelector('.change-color');
const span = document.querySelector('.color');

changeColorBtn.addEventListener('click', event => {
  body.style.backgroundColor = getRandomHexColor();
  span.textContent = body.style.backgroundColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
