const counter = document.querySelector('#counter');
const minusBtn = document.querySelector('[data-action="decrement"]');
const plusBtn = document.querySelector('[data-action="increment"]');
const value = document.querySelector('#value');

const getValue = () => Number(value.textContent);
const setValue = number => (value.textContent = number);

minusBtn.addEventListener('click', event => {
  setValue(getValue() - 1);
  disableBtn();
});

plusBtn.addEventListener('click', event => {
  setValue(getValue() + 1);
  disableBtn();
});

const disableBtn = () => {
  const currentValue = getValue();
  minusBtn.disabled = currentValue === 0;
  plusBtn.disabled = currentValue === 10;
};

disableBtn();
