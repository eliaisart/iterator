export abstract class Elemento{

    protected desc:string;

    constructor(){
        //pasar como parametro opcional una descripcion
        this.desc;
    }

    palabraClaveValida(palabra:string){
        //devuelve cierto si la palabra pasada como parametro se encuentra en la descripcion o falso en caso contrario
        if (this.desc == palabra){
            return true;
        }
        return false;
    }
}