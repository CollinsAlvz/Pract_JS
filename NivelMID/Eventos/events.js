const btn = document.querySelector(".btn");
const btn2 = document.querySelector(".btn2");
const contenedor = document.querySelector(".contenedor");

btn.addEventListener("click", (e) => {
    alert("Hola bb");
    console.log(e.target);
});

btn2.addEventListener("click", (e) => {
    alert("Di click al boton");
    e.stopPropagation();
});

contenedor.addEventListener("click", (e) => {
    alert("Di click al contenedor");
});