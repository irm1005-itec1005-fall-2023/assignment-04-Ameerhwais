/* Assignment 04: Finishing a Todo List App
 *
 * 
 *
 */


//
// Variables
//

// Constants
const appID = "app";
const headingText = "To do. To done. ✅";

// DOM Elements
let appContainer = document.getElementById(appID);

//
// Functions
//

// Add a heading to the app container
function inititialise() {
  // If anything is wrong with the app container then end
  if (!appContainer) {
    console.error("Error: Could not find app contianer");
    return;
  }

  // Create an h1 and add it to our app
  const h1 = document.createElement("h1");
  h1.innerText = headingText;
  appContainer.appendChild(h1);

  // Init complete
  console.log("App successfully initialised");
}

//
// Inits & Event Listeners
//
inititialise();

if (todos.length === 0) {
  emptyState.style.display = 'block';
} else {
  emptyState.style.display = 'none';
  todos.forEach(todo => {
      const listItem = document.createElement('li');
      listItem.className = `todo-item ${todo.completed ? 'completed' : ''}`;
      listItem.innerHTML = `
          <span>${todo.text}</span>
          <button onclick="toggleTodoStatus(${todo.id})">Done</button>
          <button onclick="deleteTodo(${todo.id})">Delete</button>
      `;
      todoList.appendChild(listItem);
  });
}


function addTodo() {
const todoInput = document.getElementById('todoInput');
const todoText = todoInput.value.trim();

if (todoText !== '') {
  const newTodo = {
      id: todos.length + 1,
      text: todoText,
      completed: false,
  };

  todos.push(newTodo);
  todoInput.value = '';
  renderTodos();
}
}

function toggleTodoStatus(todoId) {
const todoIndex = todos.findIndex(todo => todo.id === todoId);

if (todoIndex !== -1) {
  todos[todoIndex].completed = !todos[todoIndex].completed;
  renderTodos();
}
}

function deleteTodo(todoId) {
todos = todos.filter(todo => todo.id !== todoId);
renderTodos();
}

// Initial rendering
renderTodos();

