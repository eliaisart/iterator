import { Elemento } from "./Elemento";
import { Vehiculo } from "./Vehiculo";

export abstract class Iterador extends Elemento{
    protected contenido = new Array<Vehiculo> ();
    protected indice:number; //para recorrer el array de vehiculos
    protected palabraClaveConsulta: string; //palabra que se usara para realizar el filtro de busqueda

    setPalabraConsulta(palabra:string, contenido: Array<Vehiculo>){
        //inicia propiedades correspondientes a los valores pasados como parametros
        palabra = this.palabraClaveConsulta;
        contenido = this.contenido;
    }

    inicio(){
        //coloca el indice del array de vehiculos en el primer elemento que cumple con el filtro(elemento con la palabra de busqueda)
        this.indice = 0;
    }

    siguiente(){
        //coloca el indice del array de vehiculos en el siguiente elemento que cumple con la condicion de filtro
        this.indice = this.indice + 1;
    }

    item(){
        //retorna el vehiculo donde se encuentra el indice si esta indice es valido(dentro del array de vehiculos). en otro caso devuelve null
        if(this.indice >= this.contenido.length){
            return null;
        }else{
            return this.contenido[this.indice];
        }
    }

}