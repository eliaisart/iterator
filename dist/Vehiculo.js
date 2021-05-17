import { Elemento } from "./Elemento.js";
export class Vehiculo extends Elemento {
    constructor(desc) {
        super();
        this.desc = desc;
    }
    visualiza() {
        //permite mostrar por pantalla la descripcion del vehiculo
        console.log(this.desc);
    }
}
