import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LokaComponent } from './loka/loka.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'loka', component: LokaComponent },
];
