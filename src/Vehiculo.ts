import { Elemento } from "./Elemento.js";

export class Vehiculo extends Elemento{
    constructor(desc:string){
        super();
        this.desc=desc;
    }

    visualiza(){
        //permite mostrar por pantalla la descripcion del vehiculo
        console.log("Descripcion del vehiculo: " + this.desc);
        //this.desc;
    }

}

