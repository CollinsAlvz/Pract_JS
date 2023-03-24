let cadena = "Cadena de prueba para js de la concha de tu madre";
let cadena3 = "HOLA, como estas ";

//METODOS QUE DEVUELVEN UN VALOR

//CONCAT() junta dos o mas cadenas
let resultado = cadena.concat(" ¡HOLA!");
//STARTSWITH() devuelve true si una cadena comienza igual que la  otra cadena
//ENDSWITH() devuelve true si una cadena termina igual que la otra
resultado = cadena.startsWith(cadena2);
//INCLUDES() devuelve true si encuentra un dato de una cadena igual que otra
resultado = cadena.includes(cadena2);
//INDEXOF("") devuelve la posicion de dato que una ingresa de la cadena *
resultado = cadena.indexOf("para");
//LASTINDEXOF("") devuelve la ultima posicion de dato (repetido) que una ingresa de la cadena *
resultado = cadena.lastIndexOf("js");

//METODOS QUE RELLENAN LA CADENA

//rellena la cadena al principio con la cantidad que le pedimos con lo otro
resultado = cadena2.padStart(8, "qwe");
resultado = cadena2.padEnd(20, "qwe"); // lo mismo pero al final
//repite la cadena las veces que le digamos
resultado = cadena3.repeat(5);

// METODOS QUE TRANSFORMAN A LA CADENA

//split("") separa la cadena como un array
resultado = cadena3.split("como");

//substring(posicion1,posicion2) recorta la cadena
resultado = cadena3.substring(4, 10);

//toLocaleLowerCase() toda la cadena es minuscula
resultado = cadena3.toLocaleLowerCase();

//toLocaleUpperCase() toda la cadena es mayuscula
resultado = cadena3.toLocaleUpperCase();

//toString() covierte a la cadena en string
resultado = cadena2.toString();
//trim() eliminar los espacios tanto del principio como el final
resultado = cadena3.trim();
document.write(resultado);
