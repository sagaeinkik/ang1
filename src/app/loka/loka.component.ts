import { Component } from '@angular/core';

@Component({
  selector: 'app-loka',
  standalone: true,
  imports: [],
  templateUrl: './loka.component.html',
  styleUrl: './loka.component.scss',
})
export class LokaComponent {
  img1: string = '../../assets/img/loka1.jpg';
  img2: string = '../../assets/img/loka2.jpg';
  paperclip: string = '../../assets/img/gem.png';

  namn: string = 'Loka a.k.a Lokatten';
  born: string = '2/5 2022';
  crimeAge: string = '22 månader';
  vikt: string = '30 kg';
  occupation: string = 'Arbetslös';
}
