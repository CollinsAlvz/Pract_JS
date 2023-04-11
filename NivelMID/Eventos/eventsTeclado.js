const input = document.querySelector(".input");

input.addEventListener("keydown", (e) => {
    alert("Una tecla fue presionada");
});


input.addEventListener("keypress", (e) => {
    alert("Un usuario presiono una tecla y la salto");
});


input.addEventListener("keyup", (e) => {
    alert("Una tecla fue soltada");
});

