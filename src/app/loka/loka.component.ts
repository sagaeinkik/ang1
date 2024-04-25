import { Component } from '@angular/core';
import { CrimetextComponent } from '../crimetext/crimetext.component'; //Texten med linjer
import { PaperComponent } from '../paper/paper.component'; //Pappret

@Component({
  selector: 'app-loka',
  standalone: true,
  imports: [CrimetextComponent, PaperComponent],
  templateUrl: './loka.component.html',
  styleUrl: './loka.component.scss',
})
export class LokaComponent {
  //Array av bilder
  images: string[] = [
    '../../assets/img/loka1.jpg',
    '../../assets/img/loka1.jpg',
    '../../assets/img/loka2.jpg',
    '../../assets/img/loka.jpg',
  ];
  //Gem
  paperclip: string = '../../assets/img/gem.png';

  //Information om Loka
  namn: string = 'Loka a.k.a Lokatten';
  born: string = '2/5 2022';
  crimeAge: string = '23 månader';
  vikt: string = '30 kg';
  occupation: string = 'Arbetslös, snyltare';

  //Lagra nuvarande index
  currentImageIndex: number = 1;

  //Metod som går igenom arrayen och börjar om på 0
  changeImage(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }
}
