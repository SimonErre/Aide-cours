import { Component } from '@angular/core';

// =============================================================
// Exercice 1.3 : Le Café de l'Ohio (composition)
// Objectif : utiliser des composants dans un autre composant.
// =============================================================

// TODO : importe Barista et Client

@Component({
  imports: [
    // TODO : déclare Barista et Client ici
  ],
  selector: 'app-cafe-ohio',
  template: `
    <h2>☕ Le Café de l'Ohio</h2>
    <!-- TODO : une barista et trois clients -->
  `,
})
export class CafeOhio {}
