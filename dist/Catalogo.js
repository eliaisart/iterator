import { Elemento } from "./Elemento.js";
import { IteradorVehiculo } from "./IteradorVehiculo.js";
export class Catalogo extends Elemento {
    constructor() {
        super(...arguments);
        //contiene el array de vehiculos
        this.listavehiculos = new Array();
    }
    creaIterator() {
        //retorna un IteradorVehiculo
        return new IteradorVehiculo();
    }
    busqueda(palabra) {
        //crea el iterador y llama al metodo setPalabraConsulta
        //le pasa como parametros palabra y array de vehiculos
        //posteriormente retorna el iterador creado
        let it = new IteradorVehiculo();
        it.setPalabraConsulta(palabra, this.listavehiculos);
        if (this.listavehiculos[0]) {
            console.log("Mostrando el primer vehiculo con la palabra: " + palabra);
            console.log("Descripcion del vehiculo: " + this.listavehiculos[0].visualiza());
        }
        else {
            for (let i = 0; i <= this.listavehiculos.length; i++) {
                console.log("Mostrando el siguiente vehiculo con la palabra: " + palabra);
                console.log("Descripcion del vehiculo: " + this.listavehiculos[i].visualiza());
            }
        }
        //console.log(palabra);
        return it;
    }
}
