'use strict';
const headerElement = document.getElementById('header');


document.addEventListener('scroll', function() {
  // const scrollY = window.pageYOffset;

  // if (scrollY > 0) {
  //   document.getElementById('header').classList.add('active');
  // } else {
  //   document.getElementById('header').classList.remove('active');
  // }

  if (document.getElementById('hero').getBoundingClientRect().bottom < 0) {
    headerElement.classList.add('active')
  } else {
    headerElement.classList.remove('active');
  }
});
