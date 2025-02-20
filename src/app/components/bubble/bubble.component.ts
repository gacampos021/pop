import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule, NgStyle } from '@angular/common'; 
import { PointsService } from '../../services/points.service';

@Component({
  selector: 'app-bubble',
  imports: [NgStyle],
  templateUrl: './bubble.component.html',
  styleUrl: './bubble.component.css'
})

export class BubbleComponent {
  top: number = 0;
  left: number = 0;
  @Output() points = new EventEmitter<number>();

  constructor(private pointsService: PointsService){}

  randomizer(): void{
    this.top = Math.floor(Math.random() * 40);
    this.left = Math.floor(Math.random() * 87);
  }

  handler():void{
    this.randomizer();
    this.pointsService.updatePoints();
    this.points.emit(this.pointsService.points);
  }


  ngOnInit(){
    this.randomizer();
  }

}

