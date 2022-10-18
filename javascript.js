let filter = document.querySelector(".filter");
let tasks = document.getElementsByClassName('hidden_input');

filter.onclick =function(event) {
  let target = event.target;
  let current = document.querySelector(".active");
  current.classList.remove("active");
  target.classList.add("active");

  if(target.innerHTML === "Completed"){
    showCompleted();
  } else if(target.innerHTML === "All") {
    showAll();
  } else if(target.innerHTML === "Active") {
    showActive();
  }
}

function showCompleted() {
  for(let task of tasks) {
      task.closest('li').hidden = task.checked === false;
  }
}

function showAll() {
  for(let task of tasks) {
    task.closest('li').hidden = false;
  }
}

function showActive() {
  for(let task of tasks) {
      task.closest('li').hidden = task.checked === true;
  }
}

let clear = document.querySelector(".clear");
clear.onclick = function() {
  for(let task of tasks) {
    if(task.checked === true){
      task.closest("li").remove();
    }
  }
}


let list = document.querySelector(".list");
list.onclick = function(event) {
  let target = event.target;
  if(target.className !== 'cross') return;
  target.closest("li").remove();
}

let todoInput = document.querySelector(".new-todo");
todoInput.onkeypress = function(event) {
  if(event.key==="Enter"){
    event.preventDefault();
    createTask(this.value);
    this.value = '';
  }
}

function createTask(value) {
  let li = document.createElement("li");
  li.innerHTML = `<label class="container">
                    <input type="checkbox" class="hidden_input">
                    <span class="text">${value}</span>
                    <span class="checkmark"><img src="images/icon-check.svg" class="check"></span>
                    <img src="images/icon-cross.svg" class="cross">
            </label>`;
  list.firstElementChild.append(li);
}
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

  let mainSection = document.querySelector(".main-section");
  mainSection.classList.toggle("dark-main-section");

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

  let control = document.querySelector(".control");
  control.classList.toggle("dark-control");

  let filterMobile = document.querySelector(".mobile");
  filterMobile.classList.toggle("dark-filter-mobile");
}


