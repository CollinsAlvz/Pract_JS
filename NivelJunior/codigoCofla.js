dineroCof = prompt("¿Cuanto dinero tienes Cofla?");
// dineroRob = prompt("¿Cuanto dinero tienes Robert?");
// dineroPed = prompt("¿Cuanto dinero tienes Pedro?");

dineroCof = parseInt(dineroCof);

if (dineroCof <= 0.6 && dineroCof < 1) {
    alert("Comprate el helado de agua.");
    alert("Tu vuelto es: " + (dineroCof - 0.6));
} else if (dineroCof <= 1 && dineroCof < 1.6) {
    alert("Comprate el helado de crema");
    alert("Tu vuelto es: " + (dineroCof - 1));
} else if (dineroCof <= 1.6 && dineroCof < 1.7) {
    alert("Comprate el helado de heladix")
    alert("Tu vuelto es: " + (dineroCof - 1.6));
} else if (dineroCof <= 1.7 && dineroCof < 1.8) {
    alert("Comprate el helado de heladovich");
    alert("Tu vuelto es: " + (dineroCof - 1.7));
} else if (dineroCof <= 1.8 && dineroCof < 2.9) {
    alert("Comprate el helado de helardo");
    alert("Tu vuelto es: " + (dineroCof - 1.8));
} else if (dineroCof >= 2.9) {
    alert("Podes comprarte el helado con confites o el de 1/4");
    alert("Tu vuelto es: " + (dineroCof - 2.9));
} else {
    alert("No cuentas con el dinero suficiente para comprar ningun helado")
}



//PARA MAS ADELANTE
// const definirCompra = (n) => {
//     let dinero = prompt(`Cuento dinero tines ${n}`);
//     if (dinero >= 0.6 && dinero < 1) return (`${n} podes comprarte el helado de agua`);
//     if (dinero >= 1 && dinero < 1.6) return (`${n} podes comprarte el helado de crema`);
//     if (dinero >= 1.6 && dinero < 1.7) return (`${n} podes comprarte el helado de heladix`);
//     if (dinero >= 1.7 && dinero < 1.8) return (`${n} podes comprarte el helado de heladovich`);
//     if (dinero >= 1.8 && dinero < 2.9) return (`${n} podes comprarte el helado de helardo`);
//     if (dinero >= 2.9) return (`${n} podes comprarte el helado de confites o pel pote de 1/4kg`);
//     else return (`${n} no podes comprarte ningun helado`);
// }

// console.log(definirCompra("Cofla"));
// console.log(definirCompra("Robert"));
// console.log(definirCompra("Pedro"));


