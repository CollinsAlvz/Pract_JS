/****************PROBLEMA #1**********************/



/****************PROBLEMA #2**********************/
let cantidad = prompt("¿Cuantos alumnos son?");
let listAlumnos = [];

for (let i = 0; i < cantidad; i++) {
    listAlumnos[i] = [prompt("Nombre del alumno" + (i + 1)), 0];
}

const Asistencia = (nombre, p) => {
    let presencia = prompt(nombre);
    if (presencia == "p" || presencia == "P") {
        listAlumnos[p][1]++;
    }
}

for (let i = 0; i < 30; i++) {
    for (alumno in listAlumnos) {
        Asistencia(listAlumnos[alumno][0], alumno);
    }
}

for (alumno in listAlumnos) {
    let resultado = `${listAlumnos[alumno][0]}:<br>
    ___________Presencias: ${listAlumnos[alumno][1]}<br>
    ___________Ausencias: ${30 - listAlumnos[alumno][1]}<br>`;

    if ((30 - listAlumnos[alumno][1]) > 18) {
        resultado += "<b>REBROBADO POR AUSENCIAS</b><br><br>";
    } else {
        resultado += "<br><br>";
    }
    document.write(resultado);
}

/****************PROBLEMA #3**********************/

const suma = (num1, num2) => {
    return alert("El resultado de la suma es: " + (parseInt(num1) + parseInt(num2)));
}
const restar = (num1, num2) => {
    return alert("El resultado de la resta es: " + (parseInt(num1) - parseInt(num2)));
}
const multiplicar = (num1, num2) => {
    return alert("El resultado de la multiplicación es: " + (parseInt(num1) * parseInt(num2)));
}
const dividir = (num1, num2) => {
    return alert("El resultado de la división es: " + (parseInt(num1) / parseInt(num2)));
}

alert("¿Que operacción deseas realizar?")
let operacion = prompt("1.SUMA | 2.RESTA | 3.MULTIPLICACIÓN | 4.DIVISIÓN");

if (operacion == 1) {
    let num1 = prompt("Digite el primer numero");
    let num2 = prompt("Digite el segundo numero");
    suma(num1, num2);
} else if (operacion == 2) {
    let num1 = prompt("Digite el primer numero");
    let num2 = prompt("Digite el segundo numero");
    restar(num1, num2);
} else if (operacion == 3) {
    let num1 = prompt("Digite el primer numero");
    let num2 = prompt("Digite el segundo numero");
    multiplicar(num1, num2);
} else if (operacion == 4) {
    let num1 = prompt("Digite el primer numero");
    let num2 = prompt("Digite el segundo numero");
    dividir(num1, num2);
} else {
    alert("La selecion no pertenece a las operaciones establecidas");
}

