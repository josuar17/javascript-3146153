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






