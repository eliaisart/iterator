import { Elemento } from "./Elemento.js";

export class Vehiculo extends Elemento{
    constructor(){
        super();
    }

    visualiza(){
        //permite mostrar por pantalla la descripcion del vehiculo
        console.log(this.desc);
    }

}

