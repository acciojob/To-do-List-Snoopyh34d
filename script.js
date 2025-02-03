//your code here

const newTodoInput = document.getElementById('newTodoInput');
const addTodoBtn = document.getElementById('addTodoBtn');
const todoList = document.getElementById('todoList');

addTodoBtn.addEventListener('click', () => {
  const newTodo = newTodoInput.value.trim();

  if (newTodo !== '') {
    const listItem = document.createElement('li');
    listItem.textContent = newTodo;
    todoList.appendChild(listItem);
    newTodoInput.value = ''; // Clear the input field
  } else {
    alert('Please enter a todo item.');
  }
});