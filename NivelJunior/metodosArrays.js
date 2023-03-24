let nombre = ["lola", "mento", "corra", "toto"];
let numeros = [1, 2, 3, 4, 5, 6];

//TRANSFORMADORES

let resultado = nombre.pop(); //toma el ultimo elemento del array

resultado = nombre.shift(); //toma el primer elemento del array

resultado = nombre.push("meto"); //agrega un(os) elemento(s) al array

resultado = numeros.reverse(); //invierte

resultado = numeros.unshift(9); //agrega un(os) elemento(s) al array al final

resultado = numeros.sort(); //ordena el array en orden "alfabetico"

resultado = nombre.splice(2, 3, "tukutuku"); //elimina por rango y agrega elementos

//ACCESORES

let result = nombre.join("--"); //lo convierte en una array en string pero le podes agregar algo

result = nombre.slice(0, -1); //muestra todos por posicion

//DE REPETICION (funcionan flecha como arrays)

//numero=indicador
let re = nombre.filter(numero => numero.length > 4);
document.write(re);

numeros.forEach();







