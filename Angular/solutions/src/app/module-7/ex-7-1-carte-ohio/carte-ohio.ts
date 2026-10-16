import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

/** Mini-app root: navigation bar plus the outlet where pages are displayed. */
@Component({
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  selector: 'app-carte-ohio',
  template: `
    <nav>
      <a routerLink="." routerLinkActive="actif" [routerLinkActiveOptions]="{ exact: true }">
        Accueil
      </a>
      <a routerLink="cafe" routerLinkActive="actif">Café</a>
      <a routerLink="boutique" routerLinkActive="actif">Boutique</a>
    </nav>
    <hr />
    <router-outlet />
  `,
  styles: `
    nav a {
      margin-right: 1rem;
    }

    .actif {
      font-weight: bold;
    }
  `,
})
export class CarteOhio {}
