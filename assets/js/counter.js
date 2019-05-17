const dots = document.querySelectorAll('.grid-item');
dots.forEach(dot => dot.addEventListener('click', myFunc));

function myFunc(e) {
    console.log(event.target.style.background);
  }