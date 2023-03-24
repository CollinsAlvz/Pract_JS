// const materias = {
//     fisica: [90, 6, 4, "fisica"],
//     matematica: [84, 8, 2, "matematica"],
//     calculo: [92, 8, 4, "calculo"],
//     multimedios: [96, 8, 4, "multimedios"],
//     ingles: [91, 6, 3, "ingles"],
//     humanidades: [79, 7, 4, "humanidades"],
//     analisis: [75, 9, 2, "analisis"],
//     gestion: [98, 9, 1, "gestion"],
//     algoritmos: [100, 10, 4, "algoritmos"]
// }

// const asistencia = () => {
//     for (materia in materias) {
//         let asistencias = materias[materia][0];
//         let promedio = materias[materia][1];
//         let trabajos = materias[materia][2];

//         console.log(materias[materia][3]);

//         if (asistencias >= 90) {
//             console.log("%c Asistencia en orden", "color:green");
//         } else {
//             console.log("%c Falta de asistencia", "color:red");
//         }
//         if (promedio >= 7) {
//             console.log("%c Promedio en orden", "color:green");
//         } else {
//             console.log("%c Promedio desaprobado", "color:red");
//         }
//         if (trabajos >= 3) {
//             console.log("%c trabajos en orden", "color:green");
//         } else {
//             console.log("%c Faltan trabajos", "color:red");
//         }
//     }
// }
// asistencia(); //denif

let tabajosPracticos = "100 minutos de hacer practicos";
let trabajo = "240 minutos trabajo";
let estudio = "100 minutos de estudio";
let homework = "30 minutos de cosas de la casa";
let decanso = "10 minutos de descaso";

console.log("TAREAS");

for (let i = 0; i < 14; i++) {
    if (i == 0) {
        console.group("Semana 1");
    }
    console.groupCollapsed("Dia " + (i + 1));
    console.log(trabajo);
    console.log(decanso);
    console.log(estudio);
    console.log(tabajosPracticos);
    console.log(homework);
    console.groupEnd();
    if (i == 7) {
        console.groupEnd()
        console.groupCollapsed("Semana 2");
    }
}

console.groupEnd();
console.groupEnd();
