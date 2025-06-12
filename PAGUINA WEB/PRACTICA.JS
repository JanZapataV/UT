//Obtener ciertas partes del HTML a través de su id
//esto sirve para "acceder" a estas cosas (como a sus estilos y clases)
const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');
const navbar = document.getElementById('navbar');

//Funcion para cerrar la barra de navegación
function cerrarNavbar(e) {
  if (
    document.body.classList.contains('show-nav') && //Si el documento tiene la clase "show-nav" (osea que el menu esta mostrandose)
    e.target !== toggle && //Si el click no se hizo en el boton 
    !toggle.contains(e.target) && 
    e.target !== navbar &&//Si el click no se hizo en la barra de navegacion
    !navbar.contains(e.target)
  ) { //Si estas 3 condiciones pasadas son verdaderas:
    document.body.classList.toggle('show-nav'); //Le quita la clase "show-nav"
    document.body.removeEventListener('click', closeNavbar); //Se quita el "esuchador"
  } else if (!document.body.classList.contains('show-nav')) { //Si no se cumple una o más de las condiciones, y si la barra de navegación no tiene la clase "show-nav" osea que no esta siendo mostrada
    document.body.removeEventListener('click', closeNavbar); //Se quita el escuchador porque no se necesita
  }
}

// Funcion para el boton de la barra de navegación 
toggle.addEventListener('click', () => { //Se agrega un listener (escuchador) que "escucha" a la variable toggle (que es el boton para la barra) para que si le hacen click se ejecuta el código
  document.body.classList.toggle('show-nav'); //Se cambia la clase del cuerpo del HTML a una clase que mueve el cuerpo completo 200 pixeles, esto para mostrar la barra de navegación (que esta escondida en la izq)
  document.body.addEventListener('click', cerrarNavbar); //Se agrega un escuchador que ejecuta la funcion "cerrarNavbar" cuando se hace click en cualquier parte del cuerpo de la página
});

// Funcion para mostrar modal
open.addEventListener('click', () => modal.classList.add('show-modal')); //Escuchador para que cuando se haga click en el boton de resitrarse, se agregue la clase "show-modal" al div "modal", que muestra la página de registro

// Funcion para cerrar modal
close.addEventListener('click', () => modal.classList.remove('show-modal')); //Escuchador para que cuando se haga click en la tacha se cierre el modal quitando la clase de el div modal

// Funcion para cerrar modal cuando se haga click fuera de la página de registro
window.addEventListener('click', e => //Cuando se haga click en cualquier parte de la pantalla
  e.target == modal ? modal.classList.remove('show-modal') : false //Esto es una condicional, funciona asi: el evento ? si es verdad : si es falso. Por ejemplo 1 + 1 = 2 (esto dara el statement true) ? "Correcto" : "Falso"
);      //Si el target (en la parte donde se hace click) es el modal, se le quita la clase que hace que se muestre

const searchIcon = document.getElementById("search-icon");
const searchBar = document.getElementById("search-bar");

searchIcon.addEventListener("click", () => {
    searchBar.classList.toggle("active");
    searchBar.focus(); // Poner el cursor automáticamente en la barra
});
