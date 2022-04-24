import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";



@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) { }
  get(model: string, params:any): Observable<any> {
    return this.http.get(model, params);
  }
  post(model: string, data?: any): Observable<any> {
    return this.http.post(model, data);
  }
}
