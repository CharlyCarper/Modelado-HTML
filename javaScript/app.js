
const cuerpo = document.querySelector('body');
const nombre = document.querySelector('.g-nomb');

nombre.addEventListener('input', funcion);

function funcion(e) {

    console.log(e.target.value)
}

const descripcion = document.querySelector('textarea');

descripcion.addEventListener('click', muestraElemento);


function muestraElemento(e) {
    e.preventDefault();
    cuerpo.style.backgroundColor = 'red';
}