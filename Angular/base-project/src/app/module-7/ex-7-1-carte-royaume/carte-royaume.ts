import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// =============================================================
// Exercice 7.1 : La carte du royaume
// Objectif : routes, <router-outlet>, routerLink, routerLinkActive.
// =============================================================

@Component({
  // TODO : importe aussi RouterLink et RouterLinkActive
  imports: [RouterOutlet],
  selector: 'app-carte-royaume',
  template: `
    <nav>
      <!-- TODO : liens Accueil, Taverne, Boutique (chemins relatifs, sans "/") -->
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
export class CarteRoyaume {}
