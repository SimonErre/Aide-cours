import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { HerosService } from './heros-service';
import { SacService } from './sac-service';

/** Mini-app root: permanent header, navigation and page outlet. */
@Component({
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  selector: 'app-projet-final',
  template: `
    <header>
      <p>
        @if (heros.estCree()) {
          <strong>{{ heros.nom() }} le {{ heros.classe() }}</strong> |
        }
        💰 {{ heros.or() }} or | 🎒 {{ sac.contenu().length }} objets
      </p>
      <nav>
        <a routerLink="." routerLinkActive="actif" [routerLinkActiveOptions]="{ exact: true }">
          Accueil
        </a>
        <a routerLink="marche" routerLinkActive="actif">Marché</a>
        <a routerLink="sac" routerLinkActive="actif">Sac</a>
      </nav>
    </header>
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
export class ProjetFinal {
  protected readonly heros = inject(HerosService);
  protected readonly sac = inject(SacService);
}
