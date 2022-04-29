const input = document.getElementById('email-input');
const showError = document.getElementById('email-container');
const submitButton = document.getElementById('input-submit');
const errorText = document.getElementById('error-message');
const errorIcon = document.getElementById('icon-error');
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

submitButton.addEventListener('click', function (event) {
  const input_text = input.value;
  if (!regex.test(input_text)) {
    event.preventDefault();
    showError.classList.remove('outline-desaturatedRed/40');
    showError.style.outlineColor = 'hsl(0, 93%, 68%)';
    errorText.style.display = 'block';
    errorIcon.style.display = 'block';
  }
});
