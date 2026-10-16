import { Component } from '@angular/core';

// =============================================================
// Exercice 6.1 : Le calculateur du marchand
// Objectif : récupérer un service avec inject().
// =============================================================

const PRIX_POTION = 15;

@Component({
  selector: 'app-facture',
  template: `
    <!-- TODO : une ligne pour 3 potions, une ligne pour 6 potions -->
  `,
})
export class Facture {
  protected readonly prixPotion = PRIX_POTION;

  // TODO : injecte le service Marchand
}
