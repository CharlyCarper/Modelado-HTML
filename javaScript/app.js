const nombre = document.querySelector('.g-nomb');

nombre.addEventListener('input',funcion);

function funcion (e){
    
    console.log(e.target.value);
}