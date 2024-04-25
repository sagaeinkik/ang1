import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PaperComponent } from '../paper/paper.component';

@Component({
  selector: 'app-convert',
  standalone: true,
  imports: [FormsModule, PaperComponent],
  templateUrl: './convert.component.html',
  styleUrl: './convert.component.scss',
})
export class ConvertComponent {
  convertThis: number = 0;
  result: number = 0;
  startUnit: string = '';
  endUnit: string = '';

  celsiusToFahrenhet() {
    let converted: number = (this.convertThis * 9) / 5 + 32;
    converted = Math.round(converted * 100) / 100;
    this.result = converted;
    this.startUnit = '°C';
    this.endUnit = '°F';
  }

  fahrenheitToCelsius() {
    let converted: number = ((this.convertThis - 32) * 5) / 9;
    converted = Math.round(converted * 100) / 100;
    this.result = converted;
    this.startUnit = '°F';
    this.endUnit = '°C';
  }

  cmToFeet() {
    let converted: number = this.convertThis * 0.0328084;
    converted = Math.round(converted * 100) / 100;
    this.result = converted;
    this.startUnit = 'cm';
    this.endUnit = 'ft';
  }

  feetToCm() {
    let converted: number = this.convertThis * 30.48;
    converted = Math.round(converted * 100) / 100;
    this.result = converted;
    this.startUnit = 'ft';
    this.endUnit = 'cm';
  }
}
