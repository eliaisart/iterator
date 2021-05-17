export class Elemento {
    constructor() {
        //pasar como parametro opcional una descripcion
        this.desc;
    }
    palabraClaveValida(palabra) {
        //devuelve cierto si la palabra pasada como parametro se encuentra en la descripcion o falso en caso contrario
        if (this.desc == palabra) {
            return true;
        }
        return false;
    }
}
