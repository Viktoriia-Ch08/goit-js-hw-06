const form = document.querySelector('.login-form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const { email, password } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return console.log('Please fill in all the fields!');
  }
  const info = { email: email.value, password: password.value };
  console.log(info);
  form.reset();
});
