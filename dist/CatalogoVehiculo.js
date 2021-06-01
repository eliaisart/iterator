import { Catalogo } from "./Catalogo.js";
import { IteradorVehiculo } from "./IteradorVehiculo.js";
import { Vehiculo } from "./Vehiculo.js";
export class CatalogoVehiculo extends Catalogo {
    creaIterator() {
        //retorna una instancia a un elemento IteradorVehiculo
        return new IteradorVehiculo();
    }
    CreaCatalogoVehiculo() {
        //se crea manualmente el catalogo aqui
        this.listavehiculos.push(new Vehiculo("Toyota Yaris"));
        this.listavehiculos.push(new Vehiculo("Renault Clio"));
        this.listavehiculos.push(new Vehiculo("Toyota Prius"));
        this.listavehiculos.push(new Vehiculo("Renault Laguna"));
        this.listavehiculos.push(new Vehiculo("Seat Leon"));
        this.listavehiculos.push(new Vehiculo("Renault Megane"));
        this.listavehiculos.push(new Vehiculo("Toyota Corola"));
    }
    muestraCatalogo() {
        for (var i = 0; i < this.listavehiculos.length; i++) {
            this.listavehiculos[i].visualiza();
        }
    }
}
