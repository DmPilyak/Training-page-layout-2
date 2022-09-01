window.addEventListener("DOMContentLoaded", () => {

  const header = document.querySelector('.header');
  const dropdownMenu = document.querySelector('.dropdown-menu');
  window.addEventListener('resize', (event) => {
    if(event.target.innerWidth < 1023) {
      header.classList.add('container');
    } else {
      header.classList.remove('container');
      dropdownMenu.style.display = 'none';
    }
  });

  const burgerButton = document.querySelector('.burger-btn');
  burgerButton.addEventListener('click', () => {
    const display = window.getComputedStyle(dropdownMenu).display;
    if(display === 'none') {
      dropdownMenu.style.display = 'block';
    } else {
      dropdownMenu.style.display = 'none';
    }
  })
})