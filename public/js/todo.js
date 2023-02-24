//console.log("todo.js");

//import { getDeletedTodos } from "../../backend/lib/todoLib";

let light=true;

function setTheme(){
    if(light){
    document.documentElement.setAttribute("data-bs-theme","dark");
    document.getElementById("themeButton").innerHTML='<i class="fas fa-sun fa-lg fa-fw"></i>';
    }
    else{
        document.documentElement.setAttribute("data-bs-theme","light");
        document.getElementById("themeButton").innerHTML='<i class="fas fa-moon fa-lg fa-fw"></i>';
    }
    light=!light;
    //document.getElementById("themeButton").innerHTML='<i class="fas fa-sun fa-lg fa-fw"></i>';
} 

fetch("/api/todos")
    .then(function(response){
         return response.json();
    })
    .then(function(data){
        console.log(data);
        //hide the loader
        document.getElementById("loader").style.display = "none";
    });



//const { createTodo } = require("../../backend/lib/todoLib");

//hide the loader
//document.getElementById("loader").style.display = "none";
//show the loader
//document.getElementById("loader").style.display ="block";
document.getElementById("addButton").addEventListener("click",clicked)
function clicked()
{
    createTodo(document.getElementById("inputBox").value);
    document.getElementById("inputBox").value="";
    
}
    
//const inputBox= document.getElementById("inputBox");
/*inputBox.addEventListener("keydown",function(event){
    if(event.keyCode==13){
        createTodo(inputBox.value);
    }
})*/
async function createTodo(text){
    //if text is null or undefined use inputbox.val
    await fetch("/api/todos",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:text})});
    await getAllTodo();
}
async function getAllTodo(){
    const todoresult = await fetch("/api/todos");
    const todos = await todoresult.json();
    const todoList = document.getElementById("todoList");

        todoList.innerHTML = null;
        console.log(todos);
        todoCount = todos.data.length;
        document.getElementById("todoCount").innerHTML = todoCount;    
        //looping 
        todos.data.forEach((el, index) => {
       
            let listItem = document.createElement("li");
            let labelItem = document.createElement("label");
            let inputItem = document.createElement("input");
            let buttonItem = document.createElement("button");

            // * CREATING THE DELETE BUTTON
            buttonItem.classList.add("btn");
            buttonItem.classList.add("btn-outline-danger");
            buttonItem.innerHTML = `<i class="fas fa-close fa-lg fa-fw"></i>`
            buttonItem.setAttribute("onclick", `deleteTodo("${el._id}")`)

            // * CREATING THE CHECKBOX
            inputItem.classList.add("form-check-input")
            inputItem.classList.add("me-1")
            inputItem.type = "checkbox";
            inputItem.value = "";
            inputItem.setAttribute("onclick", `setChecked("${el._id}")`)
            inputItem.id =`Checkbox${index}`
        
            
            // * CREATING THE TEXT LABEL
            let textNode = document.createTextNode(el.title);
            labelItem.classList.add("form-check-label");
            labelItem.setAttribute("for",`Checkbox${index}`)
            labelItem.appendChild(textNode);
            labelItem.setAttribute("data-name", `${el._id}`);

            if (el.isCompleted) {
                labelItem.classList.add("crossed")
                inputItem.setAttribute("checked", "true")
            }
            
            // * ADDING BOOTSTRAP CLASSES TO THE LIST ITEM <LI> TAG
            listItem.classList.add("list-group-item")
            listItem.classList.add("my-list-item")

            listItem.appendChild(inputItem);
            listItem.appendChild(labelItem);
            listItem.appendChild(buttonItem);

            todoList.appendChild(listItem);
        })
}
getAllTodo();

async function setChecked(id)
{
    await fetch("/api/todos/"+ id,{method : "PUT", headers : {"Content-Type":"application/json"},body : JSON.stringify({isCompleted : true})});
    await getAllTodo();
}

document.getElementById("pills-profile-tab").addEventListener("click",getAllCompletedTodos);
async function getAllCompletedTodos(){
    const todoresult = await fetch("/api/todoscom");
    const todos = await todoresult.json();
    const todoList = document.getElementById("completedTodosList");

        todoList.innerHTML = null;
        console.log(todos);
        completedCount = todos.data.length;
        document.getElementById("completedCount").innerHTML = completedCount;    
        //looping 
        todos.data.forEach((el, index) => {
       
            let listItem = document.createElement("li");
            let labelItem = document.createElement("label");
            let inputItem = document.createElement("input");
            let buttonItem = document.createElement("button");

            // * CREATING THE DELETE BUTTON
            buttonItem.classList.add("btn");
            buttonItem.classList.add("btn-outline-danger");
            buttonItem.innerHTML = `<i class="fas fa-close fa-lg fa-fw"></i>`
            buttonItem.setAttribute("onclick", `deleteTodo("${el._id}")`)

            // * CREATING THE CHECKBOX
            inputItem.classList.add("form-check-input")
            inputItem.classList.add("me-1")
            inputItem.type = "checkbox";
            inputItem.value = "";
            inputItem.setAttribute("onclick", `setChecked("${el._id}")`)
            inputItem.id =`Checkbox${index}`
        
            
            // * CREATING THE TEXT LABEL
            let textNode = document.createTextNode(el.title);
            labelItem.classList.add("form-check-label");
            labelItem.setAttribute("for",`Checkbox${index}`)
            labelItem.appendChild(textNode);
            labelItem.setAttribute("data-name", `${el._id}`);
           
            
            // * ADDING BOOTSTRAP CLASSES TO THE LIST ITEM <LI> TAG
            listItem.classList.add("list-group-item")
            listItem.classList.add("my-list-item")

            listItem.appendChild(inputItem);
            listItem.appendChild(labelItem);
            listItem.appendChild(buttonItem);

            todoList.appendChild(listItem);
        })
}

getAllCompletedTodos();

async function deleteTodo(id)
{
    await fetch("/api/todos/"+ id,{method : "PUT", headers : {"Content-Type":"application/json"},body : JSON.stringify({isDeleted : true})});
    await getAllTodo();
}

document.getElementById("pills-contact-tab").addEventListener("click",getAllDeletedTodos);
async function getAllDeletedTodos(){
    const todoresult = await fetch("/api/todosdel");
    const todos = await todoresult.json();
    const todoList = document.getElementById("deletedTodosList");

        todoList.innerHTML = null;
        console.log(todos);
        deletedCount = todos.data.length;
        document.getElementById("deletedCount").innerHTML = deletedCount;    
        //looping 
        todos.data.forEach((el, index) => {
       
            let listItem = document.createElement("li");
            let labelItem = document.createElement("label");
            let inputItem = document.createElement("input");
            let buttonItem = document.createElement("button");

            // * CREATING THE DELETE BUTTON
            buttonItem.classList.add("btn");
            buttonItem.classList.add("btn-outline-danger");
            buttonItem.innerHTML = `<i class="fas fa-close fa-lg fa-fw"></i>`
            buttonItem.setAttribute("onclick", `deleteTodo("${el._id}")`)

            // * CREATING THE CHECKBOX
            inputItem.classList.add("form-check-input")
            inputItem.classList.add("me-1")
            inputItem.type = "checkbox";
            inputItem.value = "";
            inputItem.setAttribute("onclick", `setChecked("${el._id}")`)
            inputItem.id =`Checkbox${index}`
        
            
            // * CREATING THE TEXT LABEL
            let textNode = document.createTextNode(el.title);
            labelItem.classList.add("form-check-label");
            labelItem.setAttribute("for",`Checkbox${index}`)
            labelItem.appendChild(textNode);
            labelItem.setAttribute("data-name", `${el._id}`);

            // * ADDING BOOTSTRAP CLASSES TO THE LIST ITEM <LI> TAG
            listItem.classList.add("list-group-item")
            listItem.classList.add("my-list-item")

            listItem.appendChild(inputItem);
            listItem.appendChild(labelItem);
            listItem.appendChild(buttonItem);

            todoList.appendChild(listItem);
        })
}
getAllDeletedTodos();

