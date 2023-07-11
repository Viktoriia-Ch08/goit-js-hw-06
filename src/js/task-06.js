const input = document.querySelector('#validation-input');
const length = Number(document.querySelector('[data-length]').dataset.length);

input.addEventListener('input', event => {
  input.className =
    event.currentTarget.value.length === length ? 'valid' : 'invalid';
});
