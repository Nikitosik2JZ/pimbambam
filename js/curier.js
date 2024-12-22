
const openFormButton = document.getElementById('openFormButton');
const closeFormButton = document.getElementById('closeFormButton');
const formPopup = document.getElementById('formPopup');

openFormButton.addEventListener('click', () => {
  formPopup.style.display = 'flex';
});


closeFormButton.addEventListener('click', () => {
  formPopup.style.display = 'none';
});

formPopup.addEventListener('click', (event) => {
  if (event.target === formPopup) {
    formPopup.style.display = 'none';
  }
});
