import { Component } from '@angular/core';

// =============================================================
// Exercice 3.2 : La caption
// Objectif : event binding et $event.
// =============================================================

@Component({
  selector: 'app-caption',
  template: `
    <!-- TODO : champ texte qui appelle ecrire($event) à chaque frappe -->
    <!-- TODO : "Caption : X (N caractères)" -->
  `,
})
export class Caption {
  // TODO : signal caption ('')
  // TODO : méthode ecrire(event: Event)
}
