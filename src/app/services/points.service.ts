import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PointsService {
  points: number = 0;

  reset(): void{this.points=0;}

  updatePoints(): void{this.points++;}
}
