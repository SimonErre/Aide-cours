import { Component } from '@angular/core';

// =============================================================
// Exercice 3.1 : La boutique de skins
// Objectif : property binding ([disabled], [class.xxx]).
// =============================================================

const PRIX_SKIN = 50;

@Component({
  selector: 'app-boutique-skins',
  template: `
    <!-- TODO : affiche les crédits (classe "fauche" si crédits < prix) -->
    <!-- TODO : affiche le prix du skin -->
    <!-- TODO : bouton Scroller, bouton Acheter désactivé si pas assez de crédits -->
  `,
  styles: `
    .fauche {
      color: red;
    }
  `,
})
export class BoutiqueSkins {
  protected readonly prixSkin = PRIX_SKIN;

  // TODO : signal credits (40)
  // TODO : méthodes scroller() et acheterSkin()
}
