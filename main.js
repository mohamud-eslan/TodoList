//selectors

const todoInput = document.querySelector(".todoInpt");
const todoButton = document.querySelector(".todoBtn");
const todoList = document.querySelector(".todoLst");

//event listeners

todoButton.addEventListener('click', addTodo);

//functions
function addTodo(event){
    // prevent form from submitting
   event.preventDefault();
   //todo div
   const todoVid = document.createElement('div');
   todoVid.classList.add('todo');
   //create li
   const newTodo = document.createElement('li');
   newTodo.innerText = todoInput.value;
   newTodo.classList.add('todo-item');
   todoVid.appendChild(newTodo);
//    checked button
const completedButton = document.createElement('button');
completedButton.innerHTML = '<i class="fas fa-check"></i>'
completedButton.classList.add("completed-btn");
todoVid.appendChild(completedButton);

// checked button
const trashButton = document.createElement('button');
trashButton.innerHTML = '<i class="fas fa-trash"></i>'
trashButton.classList.add("trash-btn");
todoVid.appendChild(trashButton);

// append to List
todoList.appendChild(todoVid);

// clear todoInputnvalue
todoInput.value = " ";
}