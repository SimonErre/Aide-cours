import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { InventaireService } from './inventaire-service';
import { ProfilService } from './profil-service';

/** Mini-app root: permanent header, navigation and page outlet. */
@Component({
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  selector: 'app-projet-final',
  template: `
    <header>
      <p>
        @if (profil.estCree()) {
          <strong>{{ profil.nom() }} (team {{ profil.team() }})</strong> |
        }
        💰 {{ profil.credits() }} crédits | 📱 {{ inventaire.contenu().length }} objets
      </p>
      <nav>
        <a routerLink="." routerLinkActive="actif" [routerLinkActiveOptions]="{ exact: true }">
          Profil
        </a>
        <a routerLink="shop" routerLinkActive="actif">Shop</a>
        <a routerLink="inventaire" routerLinkActive="actif">Inventaire</a>
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
  protected readonly profil = inject(ProfilService);
  protected readonly inventaire = inject(InventaireService);
}
