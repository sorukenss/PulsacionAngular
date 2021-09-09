import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { PersonaServiceService } from 'src/app/services/persona-service.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {
  persona:Persona=new Persona();
  constructor(private personaService:PersonaServiceService) { }

  ngOnInit(): void {
    this.persona=new Persona();
  }

  mapear(id:string){
   let personas=this.personaService.consultar();
   if(personas==null){
     
   }else{
      this.persona=personas.find(p=> p.id==id);
      
    
   }
  
    
  }
  modificar(id:string){
    let personas=this.personaService.consultar();
    let consindex=personas.findIndex(p=> p.id==id);
    personas[consindex]=this.persona;
    localStorage.setItem('personas', JSON.stringify(personas));
    alert("se cambio con exito");
  }



  


}
