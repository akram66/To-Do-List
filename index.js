const todoinput = document.querySelector(".todo-input");
const todobutton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todolist");
const filterOption=document.querySelector(".filter-todo");

todobutton.addEventListener("click", addToDo);
todoList.addEventListener("click", checkRemove);
filterOption.addEventListener("click",filterTodo)

function addToDo(e) {
    e.preventDefault();
    console.log(e);
    //get todo value
    //creat newtodo
    //add to dom
    //reset input
    const todoDiv = document.createElement("div");
    todoDiv.classList.add('todo');
    const newtodo = `
    <li>${todoinput.value}</li>
    <span><i class="far fa-check-square"></i></span>
    <span><i class="far fa-trash-alt"></i></span>`;
    todoDiv.innerHTML = newtodo;
    //append todolist
    todoList.appendChild(todoDiv);
    todoinput.value = "";
}

function checkRemove(e) {
    // console.log(e.target.classList); domtokenlist to array
    const classList = [...e.target.classList];
    const item = e.target;
    console.log(item.parentElement.parentElement);
    console.log(classList);
    if (classList[1] === "fa-check-square") {
        const todo = item.parentElement.parentElement;
todo.classList.toggle("completed")
    } else if (classList[1] === "fa-trash-alt") {
        const todo = item.parentElement.parentElement;
        todo.remove();
    }
}

function filterTodo(e){
    // console.log(e.target.value);
    // console.log(todoList.childNodes);=> //change to array
    const todos=[...todoList.childNodes];
    todos.forEach((todo)=>{
        switch (e.target.value){
            case "all":
                todo.style.display="flex";
                break;
                case "completed":
                    if(todo.classList.contains("completed")){
                        todo.style.display="flex";
                    }else{
                        todo.style.display=none;
                    }
                    break;
                    case "uncompleted":
                        if(!todo.classList.containes("completed")){
                            todo.style.display="flex";
                        }else{
                            todo.style.display="none";
                        }
                        break;
        }
    })

}

 
