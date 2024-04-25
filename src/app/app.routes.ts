import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LokaComponent } from './loka/loka.component';
import { ConvertComponent } from './convert/convert.component';
import { SolutionComponent } from './solution/solution.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'loka', component: LokaComponent },
  { path: 'convert', component: ConvertComponent },
  { path: 'solution', component: SolutionComponent },
];
