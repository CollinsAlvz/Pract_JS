
const contenedor = document.querySelector(".flex-container");
const button = document.querySelector(".send-button");
let oldValor = button.value;
button.value = oldValor.toUpperCase();

function crearLlave(nombre, modelo, precio) {
    img = "<img class='llave-img' src='llave.png'>";
    nombre = `<h2>${nombre}</h2>`;
    modelo = `<h3>${modelo}</h3>`;
    precio = `<p>Precio: <b>$${precio}</b></p>`;

    return [img, nombre, modelo, precio];
}

const changeHidden = (number) => {
    document.querySelector(".key-data").value = number;
}

let documentFragment = document.createDocumentFragment();

for (let i = 0; i <= 20; i++) {
    let modeloRamdon = Math.round(Math.random() * 10000);
    let precioRamdon = Math.round(Math.random() * 10 + 30);
    let llave = crearLlave(`Llave ${i}`, `Modelo ${modeloRamdon}`, precioRamdon)
    let div = document.createElement("DIV");
    div.addEventListener("click", () => { changeHidden(modeloRamdon) });
    div.tabIndex = i;
    div.classList.add(`item-${i}`, 'flex-item');
    div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];
    documentFragment.appendChild(div);
}

contenedor.appendChild(documentFragment);
