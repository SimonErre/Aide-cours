import { Component } from '@angular/core';

// =============================================================
// Exercice 1.3 : La taverne (composition)
// Objectif : utiliser des composants dans un autre composant.
// =============================================================

// TODO : importe Tavernier et Client

@Component({
  imports: [
    // TODO : déclare Tavernier et Client ici
  ],
  selector: 'app-taverne',
  template: `
    <h2>🍺 La Taverne du Poney Fringant</h2>
    <!-- TODO : un tavernier et trois clients -->
  `,
})
export class Taverne {}
