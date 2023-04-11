let alto = window.screen.availHeight;
let ancho = window.screen.availWidth;

comprar = confirm(`El alto es: ${alto} y El ancho es: ${ancho}`);

if (comprar) {
    alert("Compra realizada exitosamente");
} else {
    alert("Compra cancelada");
}

// *****************************************************
let href = window.location.href;
let pathname = window.location.pathname;
let hostname = window.location.hostname;
let protocol = window.location.protocol;

let html = `Protocolo: ${protocol} <br>
Hostname: ${hostname} <br>
Pathname: ${pathname} <br>
Href: ${href}`;

document.write(html);