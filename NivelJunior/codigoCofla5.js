const materias = {
    fisica: [90, 6, 4, "fisica"],
    matematica: [84, 8, 2, "matematica"],
    calculo: [92, 8, 4, "calculo"],
    multimedios: [96, 8, 4, "multimedios"],
    ingles: [91, 6, 3, "ingles"],
    humanidades: [79, 7, 4, "humanidades"],
    analisis: [75, 9, 2, "analisis"],
    gestion: [98, 9, 1, "gestion"],
    algoritmos: [100, 10, 4, "algoritmos"]
}

const asistencia = () => {
    for (materia in materias) {
        let asistencias = materias[materia][0];
        if (asistencias >= 90) {
            console.log(`${materias[materia][3]}:`);
            console.log("%cAprobado", "color:green");
        } else {

            console.log(`${materias[materia][3]}:`);
            console.log("%cDesaprobado", "color:red");
        }
    }
}
asistencia(); //denif