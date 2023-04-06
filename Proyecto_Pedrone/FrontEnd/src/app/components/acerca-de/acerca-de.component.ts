import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  persona: persona = new persona("","","");

  constructor(public personaService:PersonaService) {

  }
  //lo que este en persona se va a guardar en data - el subcribe lo que hace es conectar 
  //el observer con algunos eventos observables, es un metodo que siempre escucha 
  //siempre que el obserbable haga un cambio
  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {this.persona = data})
  }
}
