const params = new URLSearchParams(window.location.search)
const id = parseInt( params.get("id") )
const container = document.querySelector('.container')

console.log("Te encuentras en el capitulo",id)

//Buscar capítulo en la base de datos
const capitulo = comic.capitulos.find( cap => cap.id === id )

console.log(capitulo)

//Mostrar la información del capitulo en pantalla
container.innerHTML = `

 
<!-- HEADER -->
  <header class="cabecera">
    <button class="btn-volver" onclick="window.history.back()">← Atrás</button>
    <h1 class="logo">POST MORTEM</h1>
  </header>

  <!-- MAIN -->
  <main class="contenedor">
    <section class="info-capitulo">
      <div class="imagen-fondo">
        <img src="${capitulo.imgPortada}" alt="Imagen del capítulo">
        <div class="overlay-gradiente"></div>
        <div class="info-texto">
          <h2 class="numero-capitulo"></h2>
          <h1 class="titulo-capitulo">${capitulo.nombreCap}</h1>
          <p class="">
          ${capitulo.descripcion}
          
          </p>
          <button class="btn-play" id="btnPlay">▶ Reproducir</button>
        </div>
        
      </div>
    </section>

    <!-- LISTA DE CAPÍTULOS -->
    <aside class="lista-capitulos">
      <h3>Más capítulos</h3>
      <div class="miniaturas">
        <a href="capitulo.html?cap=1"><img src="./img/Capitulo 1.jpeg" alt="Capítulo 1">
          <p class="activo">
            Capítulo 1: El Apagón
          </p>
        </a>
        <a href="capitulo.html?cap=2"><img src="./img/Capitulo 2.jpeg" alt="Capítulo 2">
          <p class="activo">
            Capítulo 2: La Ciudad Vacía
          </p>
        </a>
        <a href="capitulo.html?cap=3"><img src="./img/Capitulo 3.jpeg" alt="Capítulo 3">
          <p class="activo">
            Capítulo 3: Aliados En Las Cenizas
          </p>
        </a>
      </div>
    </aside>
  </main>

  <!-- OVERLAY VIDEO -->
  <div class="overlay-video" id="overlayVideo">
    <div class="contenedor-video">
      <button class="cerrar-video" id="cerrarVideo">✖</button>
      <video controls autoplay>
        <source src="video/cap1.mp4" type="video/mp4">
        Tu navegador no soporta este video.
      </video>
    </div>
  </div>


`

