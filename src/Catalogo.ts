import { Elemento } from "./Elemento.js";
import { Iterador } from "./Iterador.js";
import { IteradorVehiculo } from "./IteradorVehiculo.js";
import { Vehiculo } from "./Vehiculo.js";

export abstract class Catalogo extends Elemento{
    //contiene el array de vehiculos
    protected listavehiculos = new Array<Vehiculo> ();

    creaIterator(){
        //retorna un IteradorVehiculo
        return new IteradorVehiculo();
    }
    
    busqueda(palabra: string): Iterador{
        //crea el iterador y llama al metodo setPalabraConsulta
        //le pasa como parametros palabra y array de vehiculos
        //posteriormente retorna el iterador creado
        let it = new IteradorVehiculo();
        it.setPalabraConsulta(palabra, this.listavehiculos);
        return it;
    }
}