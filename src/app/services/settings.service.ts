import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  qntBubbles: number = 3;
  
  setQnt(qnt:number){
    this.qntBubbles=qnt;
  }
}
