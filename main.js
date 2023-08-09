/* Variables: */

let nombre = document.getElementById("nombre")
let checkboxes = document.querySelectorAll('.checkbox')
let ingreso = document.getElementById("ingreso")
let mensaje = document.getElementById("mensaje")
let listado = document.getElementById("listado")
let completoDiv = document.querySelector('.completo')
let cerrarBoton = completoDiv.querySelector('button')
let hechoDiv = document.querySelector('.hecho')
let hechoBoton = hechoDiv.querySelector('button')


/* Registro y bienvenida: */

ingreso.addEventListener("click", () => {
    let persona = nombre.value 
    if(persona != ""){
    dato = nombre.value
    saludo = "Bienvenidx " + dato + ", estas son tus tareas de hoy:"
    mensaje.innerHTML = saludo
    listado.classList.remove('oculto')
    listado.scrollIntoView({behavior: "smooth"})
    }else{
        alert("Por favor ingresa tu nombre :)")
    }
})


/* Tareas completadas: */

checkboxes.forEach(checkbox =>{
    checkbox.addEventListener('change', function(){
        item = this.parentElement.querySelector('p')
    if (this.checked) {
        item.classList.add('verde')
        let tarea = item.textContent
        mostrarCartelHecho(tarea)
    }else{
        item.classList.remove('verde')
        hechoDiv.style.display = 'none'
    }
    } )
    checkbox.addEventListener('change', verificarTareasCompletadas)
})


/* Mis funciones: */

function mostrarCartelHecho(tarea) {
    let mensajeTarea = hechoDiv.querySelector('.tareaHecho')
    mensajeTarea.innerHTML = tarea
    hechoDiv.style.display = 'flex'
}

function verificarTareasCompletadas() {
    let todasCompletadas = true
    checkboxes.forEach(checkbox => {
        if (!checkbox.checked) {
            todasCompletadas = false
        }
    })
    if (todasCompletadas) {
        completoDiv.style.display = 'flex'
    } else {
        completoDiv.style.display = 'none'
    }
}


/* Botones para cerrar ventanas: */

hechoBoton.addEventListener('click', () => {
    hechoDiv.style.display = 'none'
})

cerrarBoton.addEventListener('click', () => {
    completoDiv.style.display = 'none'
})

