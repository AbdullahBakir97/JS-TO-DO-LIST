// coding

const TodoInput = document.querySelector('.todo-input')
const TodoBtn = document.querySelector('.todo-btn')
const TodoResult = document.querySelector('.todo-result')
const TodoIcons = document.querySelector('.todo-icons')

function addTodo(e){
    e.preventDefault();
    console.log(TodoInput.value)

    const todoLi = document.createElement('li')
    todoLi.classList.add('my-2')

    const todoTitle = document.createElement('h4') 
    todoTitle.innerText = TodoInput.value
    todoTitle.classList.add('d-inline-block')
    todoTitle.classList.add('me-5')

    const TodoIcons = document.createElement('button')
    TodoIcons.button = TodoIcons.value
    TodoIcons.classList.add('d-inline-block')
    TodoIcons.classList.add('float-end')


    todoLi.appendChild(todoTitle)
    TodoResult.appendChild(todoLi)
    TodoIcons.appendChild(todoLi)
   
}


TodoBtn.addEventListener('click', addTodo)