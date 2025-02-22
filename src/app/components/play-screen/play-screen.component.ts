import { Component, EventEmitter, Output } from '@angular/core';
import { BubbleComponent } from '../bubble/bubble.component';
import { NgFor } from '@angular/common';
import { SettingsService } from '../../services/settings.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-play-screen',
  imports: [BubbleComponent, NgFor, HeaderComponent],
  templateUrl: './play-screen.component.html',
  styleUrl: './play-screen.component.css'
})
export class PlayScreenComponent {
  constructor(private setService: SettingsService){}
  bubbles:any;
  qnt!: any;
  sender: number=0;

  ngOnInit() {
    this.setService.getData().subscribe(data => {
      this.bubbles = Array.from({length: data})
    });
  }
  
  handler(points: number){
    this.sender = points
  }
}
