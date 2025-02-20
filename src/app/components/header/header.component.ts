import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() points!: any;
  strPoints: string = '';
  strTimer: string = '';
  showPoints: boolean = false;
  
  constructor(private router: Router) {}

  ngOnInit() {
    const path = this.router.url.split('/')[1];
    this.strPoints = path == 'play' ? "Points: "+this.points : ''
    this.strTimer = path == 'play' ? "00:00" : ''
  }
}
