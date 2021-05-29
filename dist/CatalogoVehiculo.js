import { Catalogo } from "./Catalogo.js";
import { IteradorVehiculo } from "./IteradorVehiculo.js";
import { Vehiculo } from "./Vehiculo.js";
export class CatalogoVehiculo extends Catalogo {
    constructor() {
        super(...arguments);
        this.contenido = new Array();
    }
    creaIterator() {
        //retorna una instancia a un elemento IteradorVehiculo
        return new IteradorVehiculo();
    }
    CreaCatalogoVehiculo() {
        //se crea manualmente el catalogo aqui
        this.contenido.push(new Vehiculo("Toyota Yaris"));
        this.contenido.push(new Vehiculo("Renault Clio"));
        this.contenido.push(new Vehiculo("Toyota Prius"));
        this.contenido.push(new Vehiculo("Renault Laguna"));
        this.contenido.push(new Vehiculo("Seat Leon"));
        this.contenido.push(new Vehiculo("Renault Megane"));
        this.contenido.push(new Vehiculo("Toyota Corola"));
    }
    muestraCatalogo() {
        for (var i = 0; i < this.contenido.length; i++) {
            let desc = this.contenido[i].visualiza();
            console.log("Descripción del vehiculo: " + desc);
        }
    }
}
