import { Routes } from '@angular/router';
import { PlayScreenComponent } from './components/play-screen/play-screen.component';
import { SettingsComponent } from './components/settings/settings.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {path:'', redirectTo: 'home', pathMatch: 'full'},
    {path:'home', component: HomeComponent},
    {path:'play', component: PlayScreenComponent},
    {path: 'settings', component: SettingsComponent}
];
