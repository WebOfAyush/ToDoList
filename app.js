let todo = [];

let req = prompt("Enter Your Request");
while (true) {
    if (req == "quit") {
        console.log("You Quit");
        break;
    }
    if (req == "list") {
        console.log("----------------------------------")
        for (let i = 0; i < todo.length; i++) {
            console.log(i, todo[i]);
            
        }
        console.log("----------------------------------")
    }else if (req == "add") {
        let task = prompt("Add Your task");
        todo.push(task)
        console.log("Task Added")
    }else if (req == "delete") {
        let index = prompt("Enter the index of task you want to delete")
        todo.splice(index, 1)
        console.log("task Deleted");
    }else{
        console.log("Bad Request")
    }
    req = prompt("Enter Your Request");
    
}