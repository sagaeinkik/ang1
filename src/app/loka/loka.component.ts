import { Component } from '@angular/core';
import { CrimetextComponent } from '../crimetext/crimetext.component';
import { PaperComponent } from '../paper/paper.component';

@Component({
  selector: 'app-loka',
  standalone: true,
  imports: [CrimetextComponent, PaperComponent],
  templateUrl: './loka.component.html',
  styleUrl: './loka.component.scss',
})
export class LokaComponent {
  images: string[] = [
    '../../assets/img/loka1.jpg',
    '../../assets/img/loka1.jpg',
    '../../assets/img/loka2.jpg',
    '../../assets/img/loka.jpg',
  ];
  paperclip: string = '../../assets/img/gem.png';

  namn: string = 'Loka a.k.a Lokatten';
  born: string = '2/5 2022';
  crimeAge: string = '23 månader';
  vikt: string = '30 kg';
  occupation: string = 'Arbetslös, snyltare';

  currentImageIndex: number = 1;

  changeImage(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }
}
