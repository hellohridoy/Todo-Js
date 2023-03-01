let addTodoButton = document.getElementById('addTodo');
let todoContainer = document.getElementById('toDocontainer');
let inputField = document.getElementById('inputField');

addTodoButton.addEventListener('click',function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    todoContainer.appendChild(paragraph);
    inputField.value = "";

    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration = "line-through";
    })

    paragraph.addEventListener('dblclick',function(){
        todoContainer.removeChild(paragraph);
    })
})