//selectors

const todoInput = document.querySelector(".todoInpt");
const todoButton = document.querySelector(".todoBtn");
const todoList = document.querySelector(".todoLst");

//event listeners

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

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
//create the delete functionality
function deleteCheck(event){
    const item = event.target;
    if(item.classList[0] === "trash-btn"){
        const todo = item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function(){
            todo.remove();
        })
    }
    //check mark
    if(item.classList[0] === "completed-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}