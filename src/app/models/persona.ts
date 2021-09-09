export class Persona {
    id: string;
    nombre:string;
    edad:number;
    sexo:string;
    pulsacion:number;
    constructor(){
        this.id="";
        this.edad=0;
        this.nombre="";
        this.sexo="";
        this.pulsacion=0;
    }

    calcularPulsacion():number {
       if(this.sexo=='M'){
           this.pulsacion=(210-this.edad)/10;
           return this.pulsacion;
       }
        this.pulsacion=(220-this.edad)/10;
        return this.pulsacion;
       
       
    }

}
