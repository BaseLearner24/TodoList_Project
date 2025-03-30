function newList() {
    let text = document.getElementById("screen").value;
    if (text.trim() !== "") { 
        let li = document.createElement("li");

       
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete"); 

       
        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(text));
        li.appendChild(deleteBtn);

        
        document.getElementById("task").appendChild(li);

       
        document.getElementById("screen").value = "";

     
        checkbox.addEventListener("change", function() {
            if (checkbox.checked) {
                li.style.textDecoration = "line-through";
            } else {
                li.style.textDecoration = "none"; 
            }
        });
    }
}

function awayList() {
    const showList = document.getElementById('task');
    showList.innerHTML = ''; 
}


document.getElementById("task").addEventListener("click", function(event) {
    if (event.target.classList.contains("delete")) {
        const listItem = event.target.parentNode;
        listItem.remove();
    }
});



items.forEach(itemText => {
    const listItem = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = 'checkbox';

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete");

    listItem.appendChild(checkbox);
    listItem.appendChild(document.createTextNode(itemText));
    listItem.appendChild(deleteBtn);

    document.getElementById("task").appendChild(listItem);

    
    checkbox.addEventListener("change", function() {
        if (checkbox.checked) {
            listItem.style.textDecoration = "line-through"; 
        } else {
            listItem.style.textDecoration = "none";
        }
    });
});
