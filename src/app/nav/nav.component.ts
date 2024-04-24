import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  constructor(private router: Router) {}

  navigateTo(path: string) {
    this.router.navigateByUrl(path);
  }
}
