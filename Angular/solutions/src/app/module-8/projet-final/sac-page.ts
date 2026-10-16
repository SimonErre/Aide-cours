import { Component, inject } from '@angular/core';

import { SacService } from './sac-service';

@Component({
  selector: 'app-sac-page',
  template: `
    <h2>🎒 Mon sac</h2>
    <ul>
      @for (possede of sac.contenu(); track possede.uid) {
        <li>
          {{ possede.objet.nom }} ({{ possede.objet.poids }} kg)
          <button (click)="sac.vendre(possede.uid)">
            Vendre ({{ sac.prixRevente(possede.objet) }} or)
          </button>
        </li>
      } @empty {
        <li>Ton sac est vide.</li>
      }
    </ul>
    <p>Poids : {{ sac.poidsTotal() }} / {{ sac.poidsMax }} kg</p>
    <p>Valeur de revente : {{ sac.valeurTotale() }} or</p>
  `,
})
export class SacPage {
  protected readonly sac = inject(SacService);
}
