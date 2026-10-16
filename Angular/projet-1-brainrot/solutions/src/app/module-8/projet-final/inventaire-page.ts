import { Component, inject } from '@angular/core';

import { InventaireService } from './inventaire-service';

@Component({
  selector: 'app-inventaire-page',
  template: `
    <h2>📱 Mon inventaire</h2>
    <ul>
      @for (possede of inventaire.contenu(); track possede.uid) {
        <li>
          {{ possede.objet.nom }} ({{ possede.objet.taille }} Go)
          <button (click)="inventaire.vendre(possede.uid)">
            Vendre ({{ inventaire.prixRevente(possede.objet) }} crédits)
          </button>
        </li>
      } @empty {
        <li>Ton inventaire est vide.</li>
      }
    </ul>
    <p>Stockage : {{ inventaire.stockageTotal() }} / {{ inventaire.stockageMax }} Go</p>
    <p>Valeur de revente : {{ inventaire.valeurTotale() }} crédits</p>
  `,
})
export class InventairePage {
  protected readonly inventaire = inject(InventaireService);
}
