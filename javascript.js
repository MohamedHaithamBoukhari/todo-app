// ======= Dark mode ========== //

let toggle = document.querySelector(".toggle");
toggle.onclick = function() {
  let main = document.querySelector('main');
  if(this.getAttribute("src") === 'images/icon-moon.svg') {
    this.src = 'images/icon-sun.svg';
    main.style.backgroundImage = 'url("images/bg-desktop-dark.jpg")';
  }else {
    this.src = 'images/icon-moon.svg';
    main.style.backgroundImage = 'url("images/bg-desktop-light.jpg")';
  }
  darkMode();
}

function darkMode() {
  document.body.classList.toggle('dark');

  let newTodo = document.querySelector('.new-todo');
  newTodo.classList.toggle('dark-new');

  let list = document.querySelector('.list');
  list.classList.toggle('dark-list');

  let containers = document.querySelectorAll('.container');
  for(let cont of containers){
    cont.classList.toggle('dark-container');
  }

  let checkMark = document.querySelectorAll('.checkmark');
  for(let check of checkMark) {
    check.classList.toggle('dark-checkmark')
  }

  let filter = document.querySelector('.filter');
  filter.classList.toggle('dark-filter');

  let clear = document.querySelector('.clear');
  clear.classList.toggle('dark-clear');
}