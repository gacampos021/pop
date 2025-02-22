import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private apiUrl = 'http://localhost:3000/'; 

  private http: HttpClient = inject(HttpClient);

  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl+'settings/');
  }

  postData(data: any): Observable<any> {
    return this.http.patch<any>(this.apiUrl+'settings/', data);
  }

  fitJson(data: any): Observable<any>{
    return this.http.delete<any>(this.apiUrl+'/settings', data);
  }

 /*  setQnt(qnt:number){
    this.qntBubbles=qnt;
  } */
}
