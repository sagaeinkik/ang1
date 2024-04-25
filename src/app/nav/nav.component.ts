import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router'; //Router

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  constructor(private router: Router) {}

  /* Metod för navigering så att man kan trycka på hela list element och inte bara a-elementet */
  navigateTo(path: string) {
    this.router.navigateByUrl(path);
  }
}
