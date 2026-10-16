import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// =============================================================
// Exercice 7.1 : La carte de l'Ohio
// Objectif : routes, <router-outlet>, routerLink, routerLinkActive.
// =============================================================

@Component({
  // TODO : importe aussi RouterLink et RouterLinkActive
  imports: [RouterOutlet],
  selector: 'app-carte-ohio',
  template: `
    <nav>
      <!-- TODO : liens Accueil, Café, Boutique (chemins relatifs, sans "/") -->
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
