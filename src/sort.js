document.addEventListener("DOMContentLoaded", () => {
addingEventListeners()
});



function addingEventListeners(){
document.getElementById("create-task-form").addEventListener("submit",handleformsubmit)
}


function handleformsubmit(e){
  e.preventDefault()
  const task = e.target[0].value
  const priorityLevel =parseInt(e.target.priority.value)
  console.log(priorityLevel)
  displayTask(task, priorityLevel)
}

function displayTask(task, priorityLevel){
const taskUl = document.getElementById("tasks")
const taskLi = document.createElement("li")
const deleteBtn = document.createElement("button")
deleteBtn.textContent = "x"
deleteBtn.addEventListener("click", deleteTask)

taskLi.textContent = task + " "
taskLi.style.color = getPriorityColor(priorityLevel)
taskLi.appendChild(deleteBtn)
taskUl.appendChild(taskLi)
}
function deleteTask(e) {
console.log(e)
e.target.parentNode.remove()
}

function getPriorityColor(priorityLevel){
  //grab it 
  if (priorityLevel === 1 ) {
    return "red"
  } else if (priorityLevel===2){
    return "blue"
  }else {
    return "green"
  }
    
  }
  // add event listener 
  //

//stage 1
// get form element and attach event listener to form
// get task from input 
// display data 



// Stage 2 
// add delete button to each item on the list 

// stage 3 
// select a priority level for task before submittung 
//change color of task according to the priority level
