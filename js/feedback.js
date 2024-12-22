const modal = document.getElementById('modal');
const openModal = document.getElementById('openModal');
const closeModal = document.getElementById('closeModal');
const cancel = document.getElementById('cancel');
const stars = document.querySelectorAll('.star');
let selectedRating = 0;


openModal.addEventListener('click', () => {
  modal.style.display = 'flex';
});


closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

cancel.addEventListener('click', () => {
  modal.style.display = 'none';
});


stars.forEach(star => {
  star.addEventListener('click', () => {
    selectedRating = star.getAttribute('data-value');
    stars.forEach(s => s.classList.remove('active'));
    star.classList.add('active');
    for (let i = 0; i < selectedRating; i++) {
      stars[i].classList.add('active');
    }
  });
});


document.getElementById('reviewForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const review = document.getElementById('review').value.trim();
  if (!selectedRating || !name || !review) {
    alert('Пожалуйста, заполните все поля и выберите рейтинг!');
    return;
  }
  alert(`Спасибо за отзыв, ${name}!`);
  modal.style.display = 'none';
});