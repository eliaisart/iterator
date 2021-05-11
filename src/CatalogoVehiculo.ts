import { Catalogo } from "./Catalogo";
import { Vehiculo } from "./Vehiculo";

export class CatalogoVehiculo extends Catalogo{
    creaIterator(){
        //retorna una instancia a un elemento IteradorVehiculo
    }

    CreaCatalogoVehiculo(){
        //se crea manualmente el catalogo aqui
        this.contenido.push (new Vehiculo ("Toyota Yaris"));
    }
}