import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { PersonaServiceService } from 'src/app/services/persona-service.service';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarComponent implements OnInit {
  personas=[]
  constructor(private personaService:PersonaServiceService) { }

  ngOnInit(): void {
    this.personas=this.personaService.consultar();
  }


}
