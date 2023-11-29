/* Variables: */

let name = document.getElementById("name")
let checkboxes = document.querySelectorAll('.checkbox')
let enter = document.getElementById("enter")
let message = document.getElementById("message")
let list = document.getElementById("list")
let completeDiv = document.querySelector('.complete')
let closeBtn = completeDiv.querySelector('button')
let doneDiv = document.querySelector('.done')
let doneBtn = doneDiv.querySelector('button')


/* Login and welcome: */

enter.addEventListener("click", () => {
    let user = name.value 
    if(user != ""){
    data = name.value
    greeting = "Welcome " + data + ", these are your tasks for today:"
    message.innerHTML = greeting
    list.classList.remove('hidden')
    list.scrollIntoView({behavior: "smooth"})
    }else{
        alert("Please enter your name! :)")
    }
})

/* My functions: */

function showDoneAlert(task) {
    let taskMessage = doneDiv.querySelector('.task-done')
    taskMessage.innerHTML = task
    doneDiv.style.display = 'flex'
}

function checkCompletedTasks() {
    let allComplete = true
    checkboxes.forEach(checkbox => {
        if (!checkbox.checked) {
            allComplete = false
        }
    })
    if (allComplete) {
        completeDiv.style.display = 'flex'
    } else {
        completeDiv.style.display = 'none'
    }
}

function restartApp() {
    name.value = ''
    message.innerHTML = ''
    list.classList.add('hidden')

    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
        let item = checkbox.parentElement.querySelector('p');
        item.classList.remove('green');
    });
}


/* Completed tasks: */

checkboxes.forEach(checkbox =>{
    checkbox.addEventListener('change', function(){
        item = this.parentElement.querySelector('p')
    if (this.checked) {
        item.classList.add('green')
        let task = item.textContent
        showDoneAlert(task)
    }else{
        item.classList.remove('verde')
        doneDiv.style.display = 'none'
    }
    } )
    checkCompletedTasks()
})


/* Close buttons: */

doneBtn.addEventListener('click', () => {
    doneDiv.style.display = 'none'
    checkCompletedTasks()
})

closeBtn.addEventListener('click', () => {
    completeDiv.style.display = 'none'
    restartApp()
})

