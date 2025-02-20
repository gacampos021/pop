import { Component, Input } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { PointsService } from '../../services/points.service';
import { SettingsService } from '../../services/settings.service';
import { NgStyle, NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterLink, NgStyle, NgIf ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() points!: any;
  @Input() strTimer: string = '';
  
  strPoints: string = '';
  showPoints: boolean = false;
  timerZero: number=0;
  activateTimer = false;
  timerLive: any = 0;
  mili: any = 0;
  sec: any = 0;
  flagEndScreen: boolean = false;
  
  constructor(private router: Router, private pointsService: PointsService, private settingsService: SettingsService) {}

  showEndScreen(){
    this.flagEndScreen = !this.flagEndScreen;
  }

  iniciarCronometro(): void {
    if (!this.activateTimer) {
      this.activateTimer = true;
      this.timerZero = Date.now() - this.timerLive; 

      setInterval(() => {
        if (this.activateTimer) {
          this.timerLive = Date.now() - this.timerZero;
          this.sec = Math.floor(this.timerLive / 1000);
          this.mili = this.timerLive % 1000;
          this.strTimer = this.sec+':'+this.mili;
        }
        if(this.points == this.settingsService.qntBubbles*2){
          this.activateTimer = false;
          if(!this.flagEndScreen){this.showEndScreen();}
        }
      }, 10); 
    }
    
  }

  resetGame(){
    window.location.reload();
  }

  ngOnInit() {
    const path = this.router.url.split('/')[1];
    if(path == 'play'){
      this.pointsService.reset();
      this.strPoints = "Points: ";
      this.iniciarCronometro();
    }
    else{
      this.strPoints = "";
      this.strTimer = "";
    }
  }
}
