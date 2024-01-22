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
      const square = entry.target.querySelector('.stars');
  
      if (entry.isIntersecting) {
        square.classList.add('stars-animation');
      return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      square.classList.remove('stars-animation');
    });
  });
  
  observer.observe(document.querySelector('.stars-wrapper'));