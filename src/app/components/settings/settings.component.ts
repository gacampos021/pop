import { Component } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { SettingsService } from '../../services/settings.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-settings',
  imports: [MatSliderModule, FormsModule, RouterLink, HeaderComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  sliderValue: any;

  constructor(private setService: SettingsService) {}
  ngOnInit(){
    this.sliderValue = this.setService.qntBubbles;
  }

  onClick(){
    this.setService.setQnt(this.sliderValue)
  }
}
