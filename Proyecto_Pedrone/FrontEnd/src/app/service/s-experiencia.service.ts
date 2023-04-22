import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})

export class SExperienciaService {

  expURL= 'http://localhost:8080/experiencia/';


    constructor(private httpClient: HttpClient) { }

    public lista(): Observable<experiencia[]>{
        return this.httpClient.get<experiencia[]>(this.expURL + 'lista');
      }
    
      public detail(id: number): Observable<experiencia>{
        return this.httpClient.get<experiencia>(this.expURL + `detail/${id}`);
      } 
    
      public save(experiencia: experiencia): Observable<any>{
        return this.httpClient.post<any>(this.expURL + 'create', experiencia);
      }
    
      public update(id: number, experiencia: experiencia): Observable<any>{
        return this.httpClient.put<any>(this.expURL + `update/${id}`, experiencia);
      }
    
      public delete(id: number): Observable<any>{
        return this.httpClient.delete<any>(this.expURL + `delete/${id}`);
      }
}
