import { Component } from '@angular/core';

// =============================================================
// Exercice 3.1 : La boutique du forgeron
// Objectif : property binding ([disabled], [class.xxx]).
// =============================================================

const PRIX_EPEE = 50;

@Component({
  selector: 'app-forge',
  template: `
    <!-- TODO : affiche l'or (classe "pauvre" si or < prix) -->
    <!-- TODO : affiche le prix de l'épée -->
    <!-- TODO : bouton Miner, bouton Acheter désactivé si pas assez d'or -->
  `,
  styles: `
    .pauvre {
      color: red;
    }
  `,
})
export class Forge {
  protected readonly prixEpee = PRIX_EPEE;

  // TODO : signal or (40)
  // TODO : méthodes miner() et acheterEpee()
}
