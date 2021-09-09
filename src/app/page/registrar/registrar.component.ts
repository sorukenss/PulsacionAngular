import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { PersonaServiceService } from 'src/app/services/persona-service.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  persona:Persona=new Persona();

  constructor(private personaService:PersonaServiceService) { }

  ngOnInit(): void {
  this.persona=new Persona();
  }

  guardar(){
    this.persona.calcularPulsacion();
   this.personaService.guardar(this.persona);
   alert("Se Registro");
  }

  


}
