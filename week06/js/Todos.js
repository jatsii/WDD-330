import utilities from "./utilities";
import ls from "./ls";

//on click handler button
document.querySelector("add").onclick = addNewTodo;

//get imput
const input =  document.querySelector("#fname");

//add on enter
input.addEventListener("keypress", e =>{
    if(e.keycode == '13') addNewTodo();
})

loadTodos();

function addNewTodo(e){}
function createTodoItem(todo){}
function addToList(todoDiv){}
function loadTodos(){}
function deleteTodo(e){}
