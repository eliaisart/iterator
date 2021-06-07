export class Elemento {
    constructor() {
        //pasar como parametro opcional una descripcion
        this.desc;
    }
    palabraClaveValida(palabra) {
        //devuelve cierto si la palabra pasada como parametro se encuentra en la descripcion o falso en caso contrario
        let nose = this.desc.search(palabra);
        if (nose == -1) {
            return false;
        }
        return true;
    }
}
