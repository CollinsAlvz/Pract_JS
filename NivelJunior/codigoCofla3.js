class Celular {
    constructor(color, peso, resolucionPantalla, resolucionCamara, memoRam) {
        this.color = color;
        this.peso = peso;
        this.resolucionPantalla = resolucionPantalla;
        this.resolucionCamara = resolucionCamara;
        this.memoRam = memoRam;
        this.estado = false;
    }

    info() {
        return `Color: <b>${this.color}</b> <br>
        Peso: <b>${this.peso}</b><br>
        Resolución de Pantalla: <b>${this.resolucionPantalla}</b><br>
        Resolución de Camara: <b>${this.resolucionCamara}</b><br>
        Memoria RAM: <b>${this.memoRam}</b><br>`;
    }

    btnEncendidoApagado() {
        if (this.estado == false) {
            alert("El movil esta encendido");
            this.estado = true;
        } else {
            alert("El movil esta apagado");
            this.estado = false;
        }
    }

    reiniciar() {
        if (this.estado == true) {
            alert("El movil se esta reiniciando");
        } else {
            alert("El movil no puede reiniciarse entado apagado");
        }

    }

    tomarFoto() {
        alert(`El movil esta tomando fotos con una resolución de ${this.resolucionCamara}`);
    }

    grabar() {
        alert(`El movil esta tomando grabando con una resolución de ${this.resolucionCamara}`);
    }
}

// const xiaomi = new Celular("Azul Platinado", "150g", "10'", "Full HD", "16GB");

// xiaomi.btnEncendidoApagado();
// xiaomi.reiniciar();

// const iphone = new Celular("Blanco", "100g", "5'", "Full HD", "50GB");

// const huawei = new Celular("Platinado", "130g", "8'", "Full HD", "28GB");

// document.write(`${xiaomi.info()}<br>
// ${iphone.info()}<br>
// ${huawei.info()}`);

class AltaGama extends Celular {
    constructor(color, peso, resolucionPantalla, resolucionCamara, memoRam, camSL, recFacial, camExtra) {
        super(color, peso, resolucionPantalla, resolucionCamara, memoRam);
        this.camSL = camSL;
        this.recFacial = recFacial;
        this.camExtra = camExtra;
    }

    camaraSrLenta() {
        alert(`El movil esta grabando en camara super lenta`);
    }

    reconocimiento() {
        alert(`El movil esta iniciando el reconocimiento facial`);
    }

    camaraExtra() {
        alert(`El movil esta iniciando la camara extrar`);
    }
}

class App {
    constructor(descargas, puntuacion, peso) {
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.estado = false;
        this.estadoApp = false;
    }


}
