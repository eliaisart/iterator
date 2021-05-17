import { Catalogo } from "./Catalogo.js";
import { IteradorVehiculo } from "./IteradorVehiculo.js";
import { Vehiculo } from "./Vehiculo.js";

export class CatalogoVehiculo extends Catalogo{
    contenido = new Array<Vehiculo> ();
    
    creaIterator(){
        //retorna una instancia a un elemento IteradorVehiculo
        return new IteradorVehiculo();
    }

    CreaCatalogoVehiculo(){
        //se crea manualmente el catalogo aqui
        this.contenido.push (new Vehiculo ("Toyota Yaris"));
    }

    muestraCatalogo() {
        
        for (var i=0;i<this.contenido.length;i++){ 
            document.write("Contenido de los vehiculos:") 
            document.write("<br>") 
            document.write("Descripción del vehiculo: " + this.contenido[i]) 
            document.write("<br>") 
     }
    }
}