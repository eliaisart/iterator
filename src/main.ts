import { CatalogoVehiculo } from "./CatalogoVehiculo.js";
import { IteradorVehiculo } from "./IteradorVehiculo.js";
import { Vehiculo } from "./Vehiculo.js";

let catalogo = new CatalogoVehiculo ();
var iterador:IteradorVehiculo;
var vehiculo :Vehiculo;

catalogo.CreaCatalogoVehiculo ();
console.log ("Contenido de los vehiculos: ");
catalogo.muestraCatalogo ();


iterador = catalogo.busqueda("Toyota");

iterador.inicio ();
vehiculo = iterador.item ();

while (vehiculo != null) {
    vehiculo.visualiza ();
    iterador.siguiente ();
    vehiculo = iterador.item ();
}