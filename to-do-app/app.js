let input = document.getElementById("user-input");
let button = document.getElementById("btn");
let tasksField = document.getElementById("tasks");
button.addEventListener("click", function(){  

    if(input.value == ""){
        alert("Please type a task")
    }
    else{

        let newDiv = document.createElement("div");
        let newTask = document.createElement("p");
        let deleteButton = document.createElement("div")
        deleteButton.classList.add("deleteButton");
        deleteButton.innerText = "✓";
        newTask.innerHTML =  input.value;
        newTask.classList.add("para");
        newDiv.classList.add("newDiv");
        newDiv.appendChild(newTask); 
        newDiv.appendChild(deleteButton);
        tasksField.appendChild(newDiv);
        input.value = "";

        deleteButton.addEventListener("click", function(){
            tasksField.removeChild(newDiv);
        })

        
        newTask.addEventListener("click", function(){
            newTask.classList.toggle("newTask")
            num+=1;
            let numTasks = document.getElementById("nums");
        })
        
    }
    
});

