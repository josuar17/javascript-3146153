let imagenprincipal = document.getElementById("imagenprincipal")
let botonblancoynegro = document.getElementById("botonblancoynegro")
let botondesenfocar = document.getElementById("botondesenfocar")
let botonzoomrotar = document.getElementById("botonzoomrotar")

imagenprincipal.addeventlistener("click", function() {
    alert("has hecho click en la imagen principal")
})
botonblancoynegro.addeventlistener("click", function() {
    alert("has hecho click en el boton blanco y negro")
})
botondesenfocar.addeventlistener("click", function() {
    alert("has hecho click en el boton desenfocar")
})
botonzoomrotar.addeventlistener("click", function() {
    alert("has hecho click en el boton zoom y rotar")
})