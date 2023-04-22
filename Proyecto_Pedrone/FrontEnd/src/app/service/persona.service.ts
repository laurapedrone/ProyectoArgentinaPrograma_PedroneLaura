import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = 'http://localhost:8080/personas/'; //Aqui dejé
  constructor(private http: HttpClient) { }
  //Angular utiliza el Observable para hacer todas las peticiones asincronas
  
  public getPersona(): Observable<persona>{
    return this.http.get<persona>(this.URL+ 'traer/perfil')
  }
}
