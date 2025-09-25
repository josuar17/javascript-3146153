
const titulocomic = document.querySelector('.titulo-comic');
const descripcioncomic = document.querySelector('.descripcion-comic');
const imgcomic = document.querySelector('.imagen-comic');
const numerocapitulo = document.querySelector('.numero-capitulo');
const listacaps = document.querySelector('.lista-caps');

// Mostrar informacion de la base de datos en la pagina
titulocomic.textContent = comic.nombreComic
descripcioncomic.textContent = comic.descripcion;

// Imprimir informacion de capitulos
comic.capitulos.forEach(cap => {
    const li = document.createElement('li');
    li.innerHTML =
  `
     <a href="./comic.html?id=${cap.id}">
      <p>${cap.nombreCap}</p>
      <img src="${cap.imgPortada}" width="150" alt="">
    </a>
  `
    listacaps.appendChild(li);

});


/* 
document.querySelector('.titulo-capitulo');
document.querySelector('.descripcion-capitulo');
document.querySelector('.imagen-comic');
document.querySelector('.numero-capitulo'); */