import { Component } from '@angular/core';

// =============================================================
// Exercice 6.1 : Le ticket de caisse
// Objectif : récupérer un service avec inject().
// =============================================================

const PRIX_CAFE = 15;

@Component({
  selector: 'app-ticket',
  template: `
    <!-- TODO : une ligne pour 3 cappuccinos, une ligne pour 6 cappuccinos -->
  `,
})
export class Ticket {
  protected readonly prixCafe = PRIX_CAFE;

  // TODO : injecte le service Caisse
}
