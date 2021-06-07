import { Elemento } from "./Elemento.js";
import { Iterador } from "./Iterador.js";
import { IteradorVehiculo } from "./IteradorVehiculo.js";
import { Vehiculo } from "./Vehiculo.js";

export abstract class Catalogo extends Elemento{
    //contiene el array de vehiculos
    protected listavehiculos = new Array<Vehiculo> ();

    abstract creaIterator(): IteradorVehiculo;
    
    busqueda(palabra: string): Iterador{
        //crea el iterador y llama al metodo setPalabraConsulta
        //le pasa como parametros palabra y array de vehiculos
        //posteriormente retorna el iterador creado
        let it = new IteradorVehiculo();
        it.setPalabraConsulta(palabra, this.listavehiculos);
        
        var primero = 0;
    
        for(var i=0; i<this.listavehiculos.length; i++){
            var cadena = this.listavehiculos[i].palabraClaveValida(palabra);
            if(cadena == true && primero==0){
                primero++;
                console.log("Mostrando el primer vehiculo con la palabra: " + palabra)
                this.listavehiculos[i].visualiza(); 
            }else if(cadena == true && primero>0){
                console.log("Mostrando el siguiente vehiculo con la palabra: " + palabra);
                this.listavehiculos[i].visualiza();
            }

        }
        return it;
    }
}