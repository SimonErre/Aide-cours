import { Component } from '@angular/core';

// =============================================================
// Exercice 4.3 : Le sélecteur de quantité
// Objectif : liaison bidirectionnelle avec model() et [(...)].
// =============================================================

const PRIX_POTION = 15;

@Component({
  // TODO : importe SelecteurQuantite
  imports: [],
  selector: 'app-comptoir',
  template: `
    <p>Potion de soin ({{ prixPotion }} pièces)</p>
    <!-- TODO : <app-selecteur-quantite> lié à nbPotions avec [(quantite)] -->
    <!-- TODO : "Total : X pièces d'or" -->
  `,
})
export class Comptoir {
  protected readonly prixPotion = PRIX_POTION;

  // TODO : signal nbPotions (1) et computed total
}
