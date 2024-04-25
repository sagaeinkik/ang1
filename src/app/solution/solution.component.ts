import { Component } from '@angular/core';
import { PaperComponent } from '../paper/paper.component'; //"Pappret"

@Component({
  selector: 'app-solution',
  standalone: true,
  imports: [PaperComponent],
  templateUrl: './solution.component.html',
  styleUrl: './solution.component.scss',
})
export class SolutionComponent {}
