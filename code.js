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
    TodoInput.value  = '' 
    todoTitle.classList.add('d-inline-block')
    todoTitle.classList.add('me-5')
    todoLi.appendChild(todoTitle)

    const TodoIcons = document.createElement('div')
    //TodoIcons.button = TodoIcons.value
    TodoIcons.classList.add('d-inline-block')
    TodoIcons.classList.add('float-end')
    //const todoBtnCheck = document.querySelector('.check-btn')
    const checkBtn = document.createElement('button')
    checkBtn.classList.add('btn')
    checkBtn.classList.add('btn-success')
    checkBtn.innerHTML = '<i class="fa-duotone fa-clipboard-check" style="--fa-primary-color: #008a1c; --fa-secondary-color: #31b44c;"></i>'
    TodoIcons.appendChild(checkBtn)
    //const TodoBtnDelete = document.querySelector('.tn')
    const btnDelete = document.createElement('button')
    btnDelete.classList.add('btn')
    btnDelete.classList.add('btn-danger')
    btnDelete.innerHTML = '<i class="fa-duotone fa-trash-can" style="--fa-primary-color: #d10000; --fa-secondary-color: #c02a2a;"></i>'
    TodoIcons.appendChild(btnDelete)


    todoLi.appendChild(TodoIcons)

    TodoResult.appendChild(todoLi)
    
   
}

function todoToggle(e){
    const item = e.targt


    if ( item.classList[1] == 'btn-success'){
        console.log('completed')
        const taskli = item.parentElment.parentElment.parentElment
        taskLi.childNodes[0].classList.Toggle('completed')

    }
        
     else if ( item.classList[1] == 'btn-danger'){
        item.parentElment.parentElment.parentElment.classList.add('delete')
     }
}   

	TodoBtn.addEventListener('click', addTodo)
    TodoResult.addEventListener('click' , todoToggle)