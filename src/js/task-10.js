const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const divBoxes = document.querySelector('#boxes');
let newDiv;
let size = 30;

createBtn.addEventListener('click', createBoxes);

function createBoxes() {
  for (let i = 0; i < input.value; i += 1) {
    newDiv = document.createElement('div');
    newDiv.className = 'new-div';
    giveSize(size);
    newDiv.style.backgroundColor = getRandomHexColor();
    divBoxes.append(newDiv);
  }
}

function giveSize(size) {
  for (let i = 0; i <= divBoxes.children.length; i += 1) {
    newDiv.style.width = `${size}px`;
    newDiv.style.height = `${size}px`;
    size = size + 10;
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

destroyBtn.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  [...divBoxes.children].forEach(el => el.remove());
}
