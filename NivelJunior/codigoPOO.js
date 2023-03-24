class Animal {
    constructor(especie, clase, tipoAlimentacion) {
        this.especie = especie;
        this.clase = clase;
        this.tipoAlimentacion = tipoAlimentacion;
        this.info = `Soy ${this.especie}, pertenezco a la clase
         ${this.clase} y soy ${this.tipoAlimentacion}`;
    }

    //asi se crea un metodo dentro de las clases
    verInfo() {
        document.write(this.info);
    }

}

class Perro extends Animal {
    constructor(especie, clase, tipoAlimentacion, raza) {
        super(especie, clase, tipoAlimentacion)
        this.raza = null;
    }


    set setRaza(newRaza) {
        this.raza = newRaza;
    }
    get getRaza() {
        return document.write(`. Mi raza es ${this.raza}`);
    }
}

const perro = new Perro("Perro", "Mamalia", "Carnivoro", "golden");
perro.setRaza = "salchicha";
document.write(perro.info);
perro.getRaza();
