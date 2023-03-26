
// METODOS DE SELECCION DE ELEMENTOS

document.getElementById("parrafo"); // seleciona un elemento por id
document.querySelector(".text"); //devuelve el primer elemento 
document.querySelectorAll(".muchos"); //devuelve todos los elementos 

//METODOS PARA DEFINIR,OBTENER Y ELIMINAR ATRIBUTOs

const update = document.querySelector(".input");
update.setAttribute("type", "text"); // primer elemento que se desea modificar, el otro la modificación

document.write(update.getAttribute("type")); // se obtione el valor atributo 

update.removeAttribute("type"); // se elimina el atributo

//ATRIBUTOS GLOBALES

/*contentEditable : permite que podamos editar lo que contenga la etiqueta
  dir: permite direccionar el contenido de la etiquea
*/
const titulo = document.querySelector(".titulo");
titulo.setAttribute("contentEditable", "true"); 