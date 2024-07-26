const modal = document.querySelector('.backdrop');
const modalBtnOpen = document.querySelector('.modal-btn-open');
const modalBtnClose = document.querySelector('.modal-btn-close');

const toggleModal = () => modal.classList.toggle('is-hidden');

modalBtnOpen.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleModal);

document.addEventListener('DOMContentLoaded', function () {
    var inputs = document.querySelectorAll('.input-form');
  
    inputs.forEach(function (input) {
      // Добавляем обработчик события потери фокуса
      input.addEventListener('blur', function () {
        this.style.backgroundColor = 'gray';
        this.style.color = 'white';
      });
  
      // Добавляем обработчик события фокуса
      input.addEventListener('focus', function () {
        this.style.backgroundColor = 'white';
        this.style.color = 'black';
      });
    });
  });


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const stars = entry.target.querySelector('.stars');
  
      if (entry.isIntersecting) {
        stars.classList.add('stars-animation');
      } else {
        stars.classList.remove('stars-animation'); // Reset animation when not intersecting
      }
    });
  });
  
  // Select all three elements and observe each of them
  document.querySelectorAll('.stars-wrapper').forEach(element => {
    observer.observe(element);
  });