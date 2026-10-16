import { Component } from '@angular/core';

// =============================================================
// Exercice 4.3 : La commande
// Objectif : liaison bidirectionnelle avec model() et [(...)].
// =============================================================

const PRIX_CAFE = 15;

@Component({
  // TODO : importe SelecteurQuantite
  imports: [],
  selector: 'app-commande',
  template: `
    <p>☕ Cappuccino Assassino ({{ prixCafe }} crédits)</p>
    <!-- TODO : <app-selecteur-quantite> lié à nbCafes avec [(quantite)] -->
    <!-- TODO : "Total : X crédits" -->
  `,
})
export class Commande {
  protected readonly prixCafe = PRIX_CAFE;

  // TODO : signal nbCafes (1) et computed total
}
