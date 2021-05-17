import { CatalogoVehiculo } from "./CatalogoVehiculo.js";
let catalogo = new CatalogoVehiculo();
var iterador;
var vehiculo;
catalogo.CreaCatalogoVehiculo();
console.log("Contenido de los vehiculos: ");
catalogo.muestraCatalogo();
iterador = catalogo.busqueda("Toyota");
iterador.inicio();
vehiculo = iterador.item();
while (vehiculo != null) {
    vehiculo.visualiza();
    iterador.siguiente();
    vehiculo = iterador.item();
}
