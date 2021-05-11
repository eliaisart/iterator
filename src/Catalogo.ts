import { Elemento } from "./Elemento";
import { Iterador } from "./Iterador";

export abstract class Catalogo extends Elemento{
    //contiene el array de vehiculos

    creaIterator(){
        //retorna un IteradorVehiculo
    }
    
    busqueda(palabra: string): Iterador{
        //crea el iterador y llama al metodo setPalabraConsulta
        //le pasa como parametros palabra y array de vehiculos
        //posteriormente retorna el iterador creado
    }
}