
// class Calculadora {
//     constructor() {

//     }
//     suma(num1, num2) {
//         return alert("El resultado de la suma es: " + (parseInt(num1) + parseInt(num2)));
//     }
//     restar(num1, num2) {
//         return alert("El resultado de la resta es: " + (parseInt(num1) - parseInt(num2)));
//     }
//     multiplicar(num1, num2) {
//         return alert("El resultado de la multiplicación es: " + (parseInt(num1) * parseInt(num2)));
//     }
//     dividir(num1, num2) {
//         return alert("El resultado de la división es: " + (parseInt(num1) / parseInt(num2)));
//     }
//     potenciar(num, exp) {
//         return alert("El resultado de la división es: " + (parseInt(num) ** parseInt(exp)));
//     }
//     raizCuadrada(num) {
//         return alert("El resultado de la división es: " + (Math.sqrt(num)));
//     }
//     raizCubica(num) {
//         return alert("El resultado de la división es: " + (Math.cbrt(num)));
//     }
// }


// const calcular = new Calculadora();

//  alert("¿Que operacción deseas realizar?")
//  let operacion = prompt("1.SUMA | 2.RESTA | 3.MULTIPLICACIÓN | 4.DIVISIÓN | 5.POTENCIACIÓN | 6.RAIZ CUADRADA | 7.RAIZ CUBICA");

// if (operacion == 1) {
//     let num1 = prompt("Digite el primer numero");
//     let num2 = prompt("Digite el segundo numero");
//     calcular.suma(num1, num2);
// } else if (operacion == 2) {
//     let num1 = prompt("Digite el primer numero");
//     let num2 = prompt("Digite el segundo numero");
//     calcular.restar(num1, num2);
// } else if (operacion == 3) {
//     let num1 = prompt("Digite el primer numero");
//     let num2 = prompt("Digite el segundo numero");
//     calcular.multiplicar(num1, num2);
// } else if (operacion == 4) {
//     let num1 = prompt("Digite el primer numero");
//     let num2 = prompt("Digite el segundo numero");
//     calcular.dividir(num1, num2);
// } else if (operacion == 5) {
//     let num1 = prompt("Digite el primer numero a potenciar");
//     let num2 = prompt("Digite el numero exponencial");
//     calcular.potenciar(num1, num2);
// } else if (operacion == 6) {
//     let num1 = prompt("Raiz cuadrada de: ");
//     calcular.raizCuadrada(num1);
// } else if (operacion == 7) {
//     let num1 = prompt("Raiz cubica de:");
//     calcular.raizCubica(num1);
// } else {
//     alert("La selecion no pertenece a las operaciones establecidas");
// }


//*****************PROBLEMA #2************//
// const obtenerInfo = (materia) => {
//     materias = {
//         fisica: ["Perez", "Pedro", "Pepito", "Cofla", "Maria"],
//         programacion: ["Dalto", "Pedro", "Pepito", "Maria", "Juan"],
//         logica: ["Alvarez", "Pedro", "Pepito", "Cofla", "Maria", "Juan"],
//         quimica: ["Castillo", "Pedro", "Pepito", "Cofla", "Maria"]
//     }

//     if (materias[materia] !== undefined) {
//         return [materias[materia], materia, materias];
//     } else {
//         return materias;
//     }
// }


// const obtenerInfoMataria = (materia) => {
//     let informacion = obtenerInfo(materia);
//     if (informacion !== false) {
//         let profesor = informacion[0][0];
//         let personas = informacion[0];
//         personas.shift();
//         document.write(`El profesor de <b>${informacion[1]}</b> es <b>${profesor}</b><br>Los personas son:  <b>${personas}</b><br><br>`);
//     }
// }

// const cantidadDeClases = (alumno) => {
//     let cantidadTotal = 0;
//     let clasesPresentes = [];
//     let informacion = obtenerInfo();
//     for (info in informacion) {
//         if (informacion[info].includes(alumno)) {
//             cantidadTotal++;
//             clasesPresentes.push(info + " ");
//         }
//     }
//     return `Alumno: ${alumno} esta en <b>${cantidadTotal}</b> clases<br>
//     Esta cursando las clases: <b>${clasesPresentes}</b><br> `;
// }

//*****************PROBLEMA #3************//


let materias = {
    fisica: ["Perez", "Pedro", "Pepito", "Cofla", "Maria"],
    programacion: ["Dalto", "Pedro", "Pepito", "Maria", "Juan"],
    logica: ["Alvarez", "Pedro", "Pepito", "Cofla", "Maria", "Juan"],
    quimica: ["Castillo", "Pedro", "Pepito", "Cofla", "Maria"]
}

const inscribir = (alumno, materia) => {
    personas = materias[materia];

    if (personas.length >= 21) {
        document.write(`Lo sentimos estimado alumno ${alumno}, la clases 
        de ${materia} se encuentra llena`);
    } else {
        personas.push(alumno);
        if (materia == "fisica") {
            materias = {
                fisica: personas,
                programacion: materias["programacion"],
                logica: materias["logica"],
                quimica: materias["quimica"]
            }
        }
        else if (materia == "programacion") {
            materias = {
                fisica: materias["fisica"],
                programacion: personas,
                logica: materias["logica"],
                quimica: materias["quimica"]
            }
        }
        else if (materia == "logica") {
            materias = {
                fisica: materias["fisica"],
                programacion: materias["programacion"],
                logica: personas,
                quimica: materias["quimica"]
            }
        } else if (materia == "quimica") {
            materias = {
                fisica: materias["fisica"],
                programacion: materias["programacion"],
                logica: materias["quimica"],
                quimica: personas
            }
        }
        return document.write(`Felicidades ${alumno}! Te has inscrito a ${materia}.`);
    }

}

inscribir("Tomas", "logica");

document.write(materias['logica']);

