// coding

const TodoInput = document.querySelector('.todo-input')
const TodoBtn = document.querySelector('.todo-btn')
const TodoResult = document.querySelector('.todo-result')



function addTodo(e){
    e.preventDefault();
    console.log(TodoInput.value)

    const todoLi = document.createElement('li')
    todoLi.classList.add('my-2')

    const todoTitle = document.createElement('h4') 
    todoTitle.innerText = TodoInput.value
    todoTitle.classList.add('d-inline-block')
    todoTitle.classList.add('me-5')

    //const TodoIcons = document.createElement('button')
    //TodoIcons.button = TodoIcons.value
    //TodoIcons.classList.add('d-inline-block')
    //TodoIcons.classList.add('float-end')
    //const todoBtnCheck = document.querySelector('.check-btn')
    const checkBtn = document.createElement('button')
    checkBtn.classList.add('btn')
    checkBtn.classList.add('btn-success')
    checkBtn.classList.add('d-inline-block')
    checkBtn.classList.add('float-end')
    //const TodoBtnDelete = document.querySelector('.tn')
    const deleteBtn = document.createElement('button')
    checkBtn.classList.add('btn')
    checkBtn.classList.add('btn-danger')
    checkBtn.classList.add('d-inline-block')
    checkBtn.classList.add('float-end')


    todoLi.appendChild(todoTitle)
    TodoResult.appendChild(todoLi)
    
   
}


TodoBtn.addEventListener('click', addTodo)