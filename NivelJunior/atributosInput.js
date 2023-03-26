const input = document.querySelector(".input-norm");
const ipt = document.querySelector(".ipt");

/*
  className: muesta lo que contiene el class
  value: de vuelve el valor que continen el input
  type: cambia el tipo del input
  accept: lo que va aceptar los inputs de tipo file
  form: permite al input que esta fuera vircularse al form
  minLength: el minimo de caracteres que puede conterner el input
  placeholder.
  required.
*/

document.write(input.className);
input.type = "submit";
ipt.minLength = 4;
// input.accept = "image/png";