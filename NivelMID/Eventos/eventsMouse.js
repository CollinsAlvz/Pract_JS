const btn = document.querySelector(".btn");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");

btn.addEventListener("dblclick", (e) => {
    alert("Se dio doble click en el boton");
});

btn2.addEventListener("mouseover", (e) => {
    alert("Se dio mouseOver en el boton");
});

btn3.addEventListener("mouseout", (e) => {
    alert("Se dio mouseOut en el boton");
});

btn4.addEventListener("contextmenu", (e) => {
    alert("Se dio contextmenu en el boton");
});
