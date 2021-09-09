import { Injectable } from '@angular/core';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaServiceService {

  constructor() { }

  consultar():Persona[]{
    let personas=localStorage.getItem('personas');
    if(personas==null){
      return [];
    }
    return  JSON.parse(personas);
  }

  guardar(persona:Persona){ 
   let personas=this.consultar();
   personas.push(persona);
   localStorage.setItem('personas', JSON.stringify(personas));
   return persona;
  }



}
