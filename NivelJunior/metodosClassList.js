const titulo = document.querySelector(".titulo")

/* Metodos del classList:

.add("nomClass"); añade una clase
.remove("nomClass");remueve una clase
.item(posicion); devuelve el valor de la clase de la pisicion escogida
.contains("nomClass"); devuelve true o false de la clase
.toggle("nomClass"); elimina la clase si existe y viceversa
.replace("classOld","classNew"); reemplaza una clase por otra
*/

titulo.classList.add("grande", "prueba");
titulo.classList.remove("prueba");
let valor = titulo.classList.item(1); document.write(valor + "<br>")
valor = titulo.classList.contains("prueba");
if (!valor) {
    document.write("La clase no exite");
}
titulo.classList.toggle("prueba");
titulo.classList.replace("prueba", "reemplazo");