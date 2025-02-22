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
    return this.http.get<any>(this.apiUrl+'qntBubbles');
  }

  postData(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

 /*  setQnt(qnt:number){
    this.qntBubbles=qnt;
  } */
}
