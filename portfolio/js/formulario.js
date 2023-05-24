const nombre = document.getElementById("name")
const email = document.getElementById("email")
const telefono = document.getElementById("tlf")
const mensaje = document.getElementById("mensaje")
const form = document.getElementById("contacto")
const parrafo = document.getElementById("warning")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warning = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(nombre.value.length <2){
       warning += `El nombre no es valido <br>`
       entrar = true
    }
    console.log(regexEmail.test(email.value))
    if(!regexEmail.test(email.value)){
        warning += `El email no es valido <br>`
        entrar = true
    }
    if(telefono.value.length<8){
        warning += `No es valido el numero`
    }

    if(entrar){
        parrafo.innerHTML = warning
    } else {
        parrafo.innerHTML= "Enviado"
    }
})  