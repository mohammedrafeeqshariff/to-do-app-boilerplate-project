



const input = document.querySelector("#input");
const button = document.querySelector("#button");
const todoList = document.querySelector("#todolist") 


let todoArray = [];

button.addEventListener("click", ()=>{
    todoArray.push(input.value);
    console.log(todoArray);


    showTodo();
    input.value = null;
})


function showTodo(){

    todoList.innerHTML= null;
    todoArray.forEach((element, index)=>{

        let list = document.createElement("li");
        list.innerText = element;

        todoList.append(list); ///appending created list(<li> </li>) inside <ul> with id = #todolist///

        let editButton = document.createElement("a");
        editButton.innerText = "| Edit";
        let deleteButton = document.createElement("a");
        deleteButton.innerText = " x ";

        list.append(editButton,deleteButton)    ///appending created anchor tag (<a>) inside the created <li> with name (list)///

        editButton.addEventListener("click", ()=>{
            editList(index)
        })
        
        deleteButton.addEventListener("click",()=>{
            deleteTodo(index)
        })



    })
}

    function editList(index){
        let updatedValue = prompt("Please enter a new value");
        // console.log(updatedValue);
        todoArray.splice(index, 1, updatedValue);
        showTodo();
    }

    function deleteTodo(index){
        todoArray.splice(index, 1);
        showTodo()

    }

