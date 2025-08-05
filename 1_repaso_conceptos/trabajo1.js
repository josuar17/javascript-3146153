// captura de variables
const imagen = document.querySelector("#imagen")
const boton1 = document.querySelector("#boton1")
const boton2 = document.querySelector("#boton2")
const boton3 = document.querySelector("#boton3")

// Funciones 
function blancoynegro () {
    console.log("imagen modificada") ;
    imagen.style.filter = "grayscale(100%)"




   /*  boton1.style.background = "blueviolet"
    boton1.style.color = "white"
    boton1.style.heigth = "200px"
    boton1.style.borderRadius = "50%" */

    
}
function desenfocar () {
    console.log("imagen desenfocada")
    imagen.style.filter = "blur(5px)"
}
function zoomyrotar () {
    console.log("imagen rotada")
    imagen.style.transform = " scale(1.2) rotate(10deg)"
}




// Eventos
boton1.addEventListener("click", blancoynegro)
boton2.addEventListener("click",desenfocar)
boton3.addEventListener("click", zoomyrotar)