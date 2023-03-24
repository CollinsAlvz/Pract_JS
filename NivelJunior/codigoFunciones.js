function saludar() {
    repuesta = prompt("Hi friend! What's up?");
    if (repuesta == "bien") {
        alert("Good for you");
    } else {
        alert("Ow men, relax it's the a beatiful day..");
    }
}

//saludar();

function frase() {
    return "Quiero pejibaye";
}

// let resibir = frase();
// document.write(resibir);


function operacion(num1, num2, tipo) {
    if (tipo == "suma") {
        return "El resultado de la suma es: " + (num1 + num2);
    } else if (tipo == "resta") {
        return "El resultado de la resta es: " + (num1 - num2);
    } else if (tipo == "multiplicar") {
        return "El resultado de la multiplicación es: " + (num1 * num2);
    } else {
        return "El resultado de la división es: " + (num1 / num2);
    }
}

let resultado = operacion(10, 5, "dividir");
document.write(resultado);