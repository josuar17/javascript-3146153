const monedas = document.querySelectorAll(".coin")
const corazones = document.querySelectorAll(".corazon")
const contadorMonedas = document.querySelector("#contador-monedas")
const contadorCorazones = document.querySelector("#contador-corazones")
let totalMonedas = 0
let totalCorazones = 0
const audio1 = document.querySelector("#audio-1");
const audio2 = document.querySelector("#audio-2");
const audio3 = document.querySelector("#audio-3");
const playstop = document.querySelector("#play-stop");

console.log(monedas, corazones, contadorMonedas, contadorCorazones)

monedas.forEach( function (moneda){
   
    moneda.addEventListener( "click" , function () {
        moneda.classList.add("saltar")
        totalMonedas++
        contadorMonedas.textContent = totalMonedas

        if (audio1.paused) {
        audio1.play();
        
        } else {
        audio1.pause();
        
       }
        
        
         } )



} )
corazones.forEach( function (corazon){
    
     corazon.addEventListener( "click" , function () {
          corazon.classList.add("saltar")
            totalCorazones++
            contadorCorazones.textContent = totalCorazones

              if (audio2.paused) {
                audio2.play();
        
              } else {
                audio2.pause();
         }
          
          
            } )

})

function toggleAudiotres() {
    if (audio3.paused) {
        audio3.play();
        playstop.textContent = "stop"
       
    } else {
        audio3.pause();
        playstop.textContent = "play"
        
    }
}

playstop.addEventListener("click", toggleAudiotres);


// Siguiente Boton Siguiente Galeria
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const Escena1 = document.querySelector(".Escena-1");
const Escena2 = document.querySelector(".Escena-2");
const Escena3 = document.querySelector(".Escena-3");    
let i = 1

next.addEventListener("click", function (){
  if(i === 1){
    Escena1.classList.add("d-none")
    Escena2.classList.remove("d-none")
    i++
  }else if(1 == 2){
    Escena2.classList.add("d-none")
    Escena3.classList.remove("d-none")
    i++
  }

})



