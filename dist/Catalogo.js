import { Elemento } from "./Elemento.js";
import { IteradorVehiculo } from "./IteradorVehiculo.js";
export class Catalogo extends Elemento {
    constructor() {
        super(...arguments);
        //contiene el array de vehiculos
        this.listavehiculos = new Array();
    }
    busqueda(palabra) {
        //crea el iterador y llama al metodo setPalabraConsulta
        //le pasa como parametros palabra y array de vehiculos
        //posteriormente retorna el iterador creado
        let it = new IteradorVehiculo();
        it.setPalabraConsulta(palabra, this.listavehiculos);
        var primero = 0;
        for (var i = 0; i < this.listavehiculos.length; i++) {
            var cadena = this.listavehiculos[i].palabraClaveValida(palabra);
            if (cadena == true && primero == 0) {
                primero++;
                console.log("Mostrando el primer vehiculo con la palabra: " + palabra);
                this.listavehiculos[i].visualiza();
            }
            else if (cadena == true && primero > 0) {
                console.log("Mostrando el siguiente vehiculo con la palabra: " + palabra);
                this.listavehiculos[i].visualiza();
            }
        }
        return it;
    }
}
