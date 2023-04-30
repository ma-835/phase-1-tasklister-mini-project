document.addEventListener("DOMContentLoaded", () => {
addingEventListeners()
});



function addingEventListeners(){
document.getElementById("create-task-form").addEventListener("submit",handleformsubmit)
}


function handleformsubmit(e){
  e.preventDefault()
  const task = e.target[0].value
  displayTask(task)
}

function displayTask(task){
const taskUl = document.getElementById("tasks")
const taskLi = document.createElement("li")
taskLi.textContent = task 
taskUl.appendChild(taskLi)
}
//stage 1
// get form element and attach event listener to form
// get task from input 
// display data 
